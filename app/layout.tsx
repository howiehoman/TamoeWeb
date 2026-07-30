import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import MotionEffects from "./MotionEffects";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const description =
    "Tamoe is a private, offline-first iPhone guest-list planner made for weddings with multiple events.";

  return {
    title: {
      default: "Tamoe — One guest list for every wedding moment",
      template: "%s | Tamoe",
    },
    description,
    icons: {
      icon: "/tamoe-logo.png",
      apple: "/tamoe-logo.png",
    },
    openGraph: {
      title: "Tamoe — One guest list for every wedding moment",
      description,
      type: "website",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1200,
          height: 630,
          alt: "Tamoe wedding guest-list planner",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Tamoe — One guest list for every wedding moment",
      description,
      images: [`${origin}/og.png`],
    },
  };
}

const navLinks = [
  { href: "/#story", label: "Story" },
  { href: "/#features", label: "Features" },
  { href: "/#privacy", label: "Privacy" },
  { href: "/faq", label: "FAQ" },
  { href: "/support", label: "Support" },
];

function Header() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href="/" aria-label="Tamoe home">
          <Image
            src="/tamoe-logo.png"
            alt=""
            width={72}
            height={72}
            unoptimized
          />
          <span>Tamoe</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="nav-cta" href="/#download">
          Get Tamoe
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
            <Link href="/#download">Get Tamoe</Link>
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
              src="/tamoe-logo.png"
              alt=""
              width={72}
              height={72}
              unoptimized
            />
            <span>Tamoe</span>
          </Link>
          <p>A calmer way to care for every name on your wedding guest list.</p>
        </div>
        <div className="footer-links">
          <div>
            <strong>Explore</strong>
            <Link href="/#story">Our story</Link>
            <Link href="/#features">Features</Link>
            <Link href="/faq">FAQ</Link>
          </div>
          <div>
            <strong>Help</strong>
            <Link href="/support">Support</Link>
            <a href="mailto:support@tamoe.app">Email us</a>
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
        <span>© 2026 Tamoe. All rights reserved.</span>
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
