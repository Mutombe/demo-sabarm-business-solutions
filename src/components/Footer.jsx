import React from 'react';
import { Link } from 'react-router-dom';
import {
  LinkedinLogo,
  WhatsappLogo,
  MapPin,
  Clock,
  Phone,
  EnvelopeSimple,
} from '@phosphor-icons/react';
import { business, services, waHref } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="relative bg-teal-800 text-ivory-100 mt-20 sm:mt-28">
      <div className="grain" />
      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 pt-16 sm:pt-20 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={business.logo}
                alt={business.name}
                className="h-11 w-11"
                loading="lazy"
               onError={e => { e.currentTarget.style.display = 'none'; }} />
              <div>
                <div className="font-display text-xl text-ivory-50">
                  {business.name}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-teal-200 mt-1 font-mono">
                  Chartered Accountants
                </div>
              </div>
            </Link>
            <p className="text-[14px] text-teal-100/80 leading-relaxed max-w-sm">
              {business.tagline} Independent chartered accountants, serving Zimbabwean businesses from Mount Pleasant, Harare since {business.established}.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={waHref('Hello Sabarm — I would like to discuss an engagement.')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="h-10 w-10 border border-teal-500/60 flex items-center justify-center text-teal-100 hover:bg-copper-500 hover:text-ivory-50 hover:border-copper-500 transition-colors"
              >
                <WhatsappLogo size={16} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-10 w-10 border border-teal-500/60 flex items-center justify-center text-teal-100 hover:bg-copper-500 hover:text-ivory-50 hover:border-copper-500 transition-colors"
              >
                <LinkedinLogo size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <p className="numeral text-copper-300 mb-5">01 / SERVICES</p>
            <ul className="space-y-2.5 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-teal-100/85 hover:text-copper-300 transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Firm */}
          <div className="lg:col-span-2">
            <p className="numeral text-copper-300 mb-5">02 / FIRM</p>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="text-teal-100/85 hover:text-copper-300 transition-colors">About</Link></li>
              <li><Link to="/team" className="text-teal-100/85 hover:text-copper-300 transition-colors">Team</Link></li>
              <li><Link to="/industries" className="text-teal-100/85 hover:text-copper-300 transition-colors">Industries</Link></li>
              <li><Link to="/insights" className="text-teal-100/85 hover:text-copper-300 transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="text-teal-100/85 hover:text-copper-300 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Visit */}
          <div className="col-span-2 lg:col-span-3">
            <p className="numeral text-copper-300 mb-5">03 / VISIT</p>
            <ul className="space-y-3.5 text-sm text-teal-100/85">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 text-copper-400 shrink-0" weight="duotone" />
                <span>{business.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={16} className="mt-0.5 text-copper-400 shrink-0" weight="duotone" />
                <span>
                  Mon–Fri {business.hours.weekdays}<br />
                  Sat {business.hours.saturday}<br />
                  Sun {business.hours.sunday}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 text-copper-400 shrink-0" weight="duotone" />
                <a
                  href={`tel:${business.phone.replace(/\s/g, '')}`}
                  className="hover:text-copper-300"
                >
                  {business.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <EnvelopeSimple size={16} className="mt-0.5 text-copper-400 shrink-0" weight="duotone" />
                <a
                  href={`mailto:${business.email}`}
                  className="hover:text-copper-300"
                >
                  {business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-teal-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-teal-200/80">
          <p>
            © 2026 {business.name}. All rights reserved. Registered practising chartered accountants, Zimbabwe.
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <span>ICAZ</span>
            <span className="text-teal-400/50">·</span>
            <span>ACCA</span>
            <span className="text-teal-400/50">·</span>
            <span>ICSAZ</span>
            <span className="text-teal-400/50">·</span>
            <span>CFA Institute</span>
          </p>
        </div>

        <p className="mt-5 text-center text-[11px] text-teal-300/70 tracking-wide">
          Website by{' '}
          <a
            href="https://bitstudio.co.zw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-copper-300 hover:underline"
          >
            Bit Studio
          </a>
        </p>
      </div>
    </footer>
  );
}
