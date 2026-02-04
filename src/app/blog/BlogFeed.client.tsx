"use client";

import { useEffect, useRef, useState } from "react";

type BlogCard = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  featured: { url: string | null; alt: string };
};

type ApiResponse = {
  ok: boolean;
  page: number;
  perPage: number;
  totalPages: number; // 0 = sconosciuto
  posts: BlogCard[];
  error?: string;
};

export default function BlogFeedClient() {
  const perPage = 9;

  const [posts, setPosts] = useState<BlogCard[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const fetchPage = async (p: number) => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/blog/posts?page=${p}&perPage=${perPage}`);
      const data = (await res.json()) as ApiResponse;

      if (!data.ok) {
        setHasMore(false);
        return;
      }

      setPosts((prev) => {
        const seen = new Set(prev.map((x) => x.id));
        const merged = [...prev];
        for (const item of data.posts) {
          if (!seen.has(item.id)) merged.push(item);
        }
        return merged;
      });

      if (!data.posts.length) setHasMore(false);
      if (data.totalPages && p >= data.totalPages) setHasMore(false);
    } catch {
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!sentinelRef.current) return;

    const el = sentinelRef.current;
    const io = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && !isLoading && hasMore) {
          const next = page + 1;
          setPage(next);
          fetchPage(next);
        }
      },
      { root: null, rootMargin: "800px 0px 800px 0px", threshold: 0 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [page, isLoading, hasMore]);

  return (
    <>
      <div className="row reset-grid">
        {posts.map((post) => (
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4" key={post.id}>
            <article className="blog__item">
              <div className="blog__img-wrapper">
                <a href={`/blog/${post.slug}`}>
                  <div className="img-box">
                    <img
                      className="image-box__item"
                      src={post.featured.url || "/assets/imgs/blog/placeholder.jpg"}
                      alt={post.featured.alt || post.title}
                    />
                    <img
                      className="image-box__item"
                      src={post.featured.url || "/assets/imgs/blog/placeholder.jpg"}
                      alt={post.featured.alt || post.title}
                    />
                  </div>
                </a>
              </div>

              <h5>
                <a href={`/blog/${post.slug}`} className="blog__title">
                  {post.title}
                </a>
              </h5>

              <a href={`/blog/${post.slug}`} className="blog__btn">
                Leggi di più{" "}
                <span>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </a>
            </article>
          </div>
        ))}
      </div>

      <div ref={sentinelRef} style={{ height: 1 }} />

      {isLoading && (
        <div style={{ padding: "40px 0", textAlign: "center" }}>
          Caricamento...
        </div>
      )}

      {!hasMore && posts.length > 0 && (
        <div style={{ padding: "40px 0", textAlign: "center" }}>
          Fine articoli
        </div>
      )}

      {!hasMore && posts.length === 0 && (
        <div style={{ padding: "40px 0", textAlign: "center" }}>
          Nessun articolo disponibile (WordPress non è ancora pronto).
        </div>
      )}
    </>
  );
}
