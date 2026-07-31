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
    "TAMOE is a private, offline-first iPhone app for planning every wedding guest across multiple celebrations.";

  return {
    title: {
      default: "TAMOE | Every guest, thoughtfully planned",
      template: "%s | TAMOE",
    },
    description,
    icons: {
      icon: "/tamoe-logo.png",
      apple: "/tamoe-logo.png",
    },
    openGraph: {
      title: "TAMOE | Every guest, thoughtfully planned",
      description,
      type: "website",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1200,
          height: 630,
          alt: "TAMOE wedding guest-list planner",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "TAMOE | Every guest, thoughtfully planned",
      description,
      images: [`${origin}/og.png`],
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
            src="/tamoe-logo.png"
            alt=""
            width={72}
            height={72}
            unoptimized
          />
          <span>TAMOE</span>
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
              src="/tamoe-logo.png"
              alt=""
              width={72}
              height={72}
              unoptimized
            />
            <span>TAMOE</span>
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
