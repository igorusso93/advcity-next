import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Advcity",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/progressbar.css" />
        <link rel="stylesheet" href="/assets/css/meanmenu.min.css" />
        <link rel="stylesheet" href="/assets/css/master.css" />
      </head>

      <body>
        {children}

        <Script src="/assets/js/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/counter.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/ScrollToPlugin.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/ScrollSmoother.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/SplitText.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/chroma.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/mixitup.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vanilla-tilt.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.meanmenu.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />

        <Script id="viewport-and-title" strategy="afterInteractive">
          {`
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", \`\${vh}px\`);
            window.addEventListener("resize", () => {
              let vh = window.innerHeight * 0.01;
              document.documentElement.style.setProperty("--vh", \`\${vh}px\`);
            });

            let titleInterval = null;
            const originalTitle = document.title;

            addEventListener('blur', function() {
              titleInterval = setInterval(() => {
                document.title = 'Ritorna qui 😢😢😢';
              }, 2000);
            });

            addEventListener('focus', function() {
              if (titleInterval) {
                clearInterval(titleInterval);
                document.title = originalTitle;
              }
            });
          `}
        </Script>

        <Script id="register-sw" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.register('/service-worker.js')
                .then(() => console.log('ServiceWorker registrato'))
                .catch((error) => console.error('Errore registrazione ServiceWorker:', error));
            }
          `}
        </Script>
      </body>
    </html>
  );
}
