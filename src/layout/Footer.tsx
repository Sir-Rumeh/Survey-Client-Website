import { CheckCircle2, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[var(--muted)] border-t border-[var(--border)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-8 w-8 text-[hsl(var(--primary))]" />
              <span className="text-xl font-bold text-[var(--foreground)]">
                SurveyPlus
              </span>
            </div>
            <p className="text-sm text-[var(--muted-foreground)]">
              SurveyPlus is a leading online platform for surveys and data analysis,
              helping businesses, researchers, and NGOs simplify data collection and analysis.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-[var(--muted-foreground)] hover:text-[hsl(var(--primary))] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-[var(--muted-foreground)] hover:text-[hsl(var(--primary))] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-[var(--muted-foreground)] hover:text-[hsl(var(--primary))] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-[var(--muted-foreground)] hover:text-[hsl(var(--primary))] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--foreground)] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-sm text-[var(--muted-foreground)] hover:text-[hsl(var(--primary))] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm text-[var(--muted-foreground)] hover:text-[hsl(var(--primary))] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#overview"
                  className="text-sm text-[var(--muted-foreground)] hover:text-[hsl(var(--primary))] transition-colors"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-sm text-[var(--muted-foreground)] hover:text-[hsl(var(--primary))] transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-[var(--muted-foreground)] hover:text-[hsl(var(--primary))] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--foreground)] mb-4">
              Contact
            </h3>
            <div className="space-y-2 text-sm text-[var(--muted-foreground)]">
              <p>
                SurveyPlus LTD, 5th Floor, SpacePod Building,<br />
                Km 18 Lekki-Epe Expressway,<br />
                By Agungi Bus Stop, Lagos, Nigeria
              </p>
              <p>
                <a
                  href="tel:+2348120322881"
                  className="hover:text-[hsl(var(--primary))] transition-colors"
                >
                  +234 812 032 2881
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@getsurveyplus.com"
                  className="hover:text-[hsl(var(--primary))] transition-colors"
                >
                  info@getsurveyplus.com
                </a>
              </p>
            </div>
          </div>

          {/* Available On */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--foreground)] mb-4">
              Available on:
            </h3>
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center justify-center h-12 w-32 bg-[var(--foreground)] text-[var(--background)] rounded-lg text-xs font-medium">
                Google Play
              </div>
              <div className="inline-flex items-center justify-center h-12 w-32 bg-[var(--foreground)] text-[var(--background)] rounded-lg text-xs font-medium">
                App Store
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-[var(--border)] text-center text-sm text-[var(--muted-foreground)]">
          © 2023 SurveyPlus By GetBundi Media. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

