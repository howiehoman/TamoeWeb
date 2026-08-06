import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MotionEffects from "./MotionEffects";
import "./globals.css";

export function generateMetadata(): Metadata {
  const description =
    "TAMOE is a private, offline-first iPhone app for planning every wedding guest across multiple celebrations.";

  return {
    title: {
      default: "TAMOE | Every Guest. Perfectly Organized.",
      template: "%s | TAMOE",
    },
    description,
    icons: {
      icon: "/tamoe-logo.png",
      apple: "/tamoe-logo.png",
    },
    openGraph: {
      title: "TAMOE | Every Guest. Perfectly Organized.",
      description,
      type: "website",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "TAMOE. Every Guest. Perfectly Organized.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "TAMOE | Every Guest. Perfectly Organized.",
      description,
      images: ["/og.png"],
    },
  };
}

const navLinks = [
  { href: "/#story", label: "Story" },
  { href: "/#team", label: "Team" },
  { href: "/#features", label: "Features" },
  { href: "/#privacy", label: "Privacy" },
  { href: "/faq", label: "FAQ" },
  { href: "/support", label: "Support" },
];

function Header() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href="/" aria-label="TAMOE home">
          <Image
            className="brand-icon"
            src="/tamoe-logo.png"
            alt=""
            width={72}
            height={72}
            unoptimized
          />
          <Image
            className="brand-wordmark"
            src="/tamoe-wordmark.png"
            alt="TAMOE"
            width={1298}
            height={298}
            unoptimized
          />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="nav-cta" href="/#download">
          Get TAMOE
        </Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
            <Link href="/#download">Get TAMOE</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-grid">
        <div className="footer-brand">
          <Link className="brand" href="/">
            <Image
              className="brand-icon"
              src="/tamoe-logo.png"
              alt=""
              width={72}
              height={72}
              unoptimized
            />
            <Image
              className="brand-wordmark"
              src="/tamoe-wordmark.png"
              alt="TAMOE"
              width={1298}
              height={298}
              unoptimized
            />
          </Link>
          <p>Every name, celebration, and invitation decision in one shared guest list.</p>
        </div>
        <div className="footer-links">
          <div>
            <strong>Explore</strong>
            <Link href="/#story">Our story</Link>
            <Link href="/#team">Team</Link>
            <Link href="/#features">Features</Link>
            <Link href="/faq">FAQ</Link>
          </div>
          <div>
            <strong>Help</strong>
            <Link href="/support">Support</Link>
            <a href="mailto:tamoaeapp@gmail.com">tamoaeapp@gmail.com</a>
            <Link href="/about">About</Link>
          </div>
          <div>
            <strong>Legal</strong>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
      <div className="section-shell footer-bottom">
        <span>© 2026 TAMOE. All rights reserved.</span>
        <span>Designed with care for wedding days.</span>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <MotionEffects />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
