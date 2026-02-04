// src/app/api/blog/posts/route.ts
import { NextResponse } from "next/server";
import { wpFetchSafe } from "@/lib/wp";

type WPMedia = {
  source_url?: string;
  alt_text?: string;
};

type WPPost = {
  id: number;
  slug: string;
  title?: { rendered?: string };
  excerpt?: { rendered?: string };
  date?: string;
  _embedded?: {
    "wp:featuredmedia"?: WPMedia[];
  };
};

function getFeatured(post: WPPost) {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  return {
    url: media?.source_url || null,
    alt: media?.alt_text || "",
  };
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page") || "1") || 1;
  const perPage = Number(searchParams.get("perPage") || "9") || 9;

  const wpPath = `/wp-json/wp/v2/posts?_embed=1&per_page=${perPage}&page=${page}`;

  const { json, error } = await wpFetchSafe<WPPost[]>(wpPath);

  if (!json) {
    return NextResponse.json({
      ok: false,
      page,
      perPage,
      totalPages: 0,
      posts: [],
      error: error || "WP not ready",
    });
  }

  const posts = json.map((p) => {
    const featured = getFeatured(p);
    return {
      id: p.id,
      slug: p.slug,
      title: p.title?.rendered || "",
      excerpt: p.excerpt?.rendered || "",
      date: p.date || "",
      featured,
    };
  });

  return NextResponse.json({
    ok: true,
    page,
    perPage,
    totalPages: 0,
    posts,
  });
}
