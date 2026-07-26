"use client";

import { Heart } from "lucide-react";
import Link from "next/link";
import { LinkedinIcon, InstagramIcon, FacebookIcon, GithubIcon } from "./Icons";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "LinkedIn", icon: LinkedinIcon, url: "#" },
  { name: "Instagram", icon: InstagramIcon, url: "#" },
  { name: "Facebook", icon: FacebookIcon, url: "#" },
  { name: "GitHub", icon: GithubIcon, url: "#" },
];

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-[#D90429]/3 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <Link href="#home" className="inline-block">
              <span className="text-2xl font-bold font-[var(--font-space)]">
                <span className="text-white">FERDOUS</span>
                <span className="text-[#D90429]">.</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm mt-2 font-[var(--font-inter)]">
              © {new Date().getFullYear()} Md. Ferdous Rahman Fakir. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-400 hover:text-[#D90429] transition-colors font-[var(--font-inter)]"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-500 hover:text-[#D90429] hover:bg-white/5 transition-all"
                aria-label={social.name}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-600 text-xs font-[var(--font-inter)] flex items-center justify-center gap-1">
            Crafted with <Heart size={12} className="text-[#D90429]" /> by Ferdous Rahman Fakir
          </p>
        </div>
      </div>
    </footer>
  );
}