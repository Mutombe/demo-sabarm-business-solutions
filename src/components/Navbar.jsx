import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { List, X, Phone } from '@phosphor-icons/react';
import { business, navLinks } from '../data/siteData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* Top utility strip */}
      <div className="hidden md:block bg-teal-700 text-ivory-100">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 h-9 flex items-center justify-between text-[11px] tracking-wide font-mono">
          <span className="uppercase">Registered Practising Chartered Accountants · Harare</span>
          <div className="flex items-center gap-6">
            <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="flex items-center gap-1.5 hover:text-copper-300 transition-colors">
              <Phone size={12} weight="bold" />
              {business.phone}
            </a>
            <a href={`mailto:${business.email}`} className="hover:text-copper-300 transition-colors">
              {business.email}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-ivory-50/95 backdrop-blur-md border-b border-stone-200 shadow-[0_1px_0_0_rgba(14,77,74,0.04)]'
            : 'bg-ivory-50 border-b border-stone-200'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-5 lg:px-10 h-[68px] flex items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-3 group min-w-0">
            <img
              src={business.logo}
              alt={business.name}
              className="h-10 w-10 shrink-0"
              loading="eager"
             onError={e => { e.currentTarget.style.display = 'none'; }} />
            <div className="min-w-0">
              <div className="font-display text-[19px] sm:text-[21px] leading-none tracking-tight text-teal-700 truncate">
                {business.shortName}
              </div>
              <div className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-stone-500 mt-1 font-mono">
                Business Solutions
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative text-[13px] font-medium tracking-wide transition-colors py-2 ${
                    isActive
                      ? 'text-teal-700'
                      : 'text-stone-700 hover:text-teal-600'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <span className="absolute -bottom-0 left-0 right-0 h-[2px] bg-copper-500" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center justify-center gap-2 bg-teal-600 text-ivory-50 px-5 py-2.5 text-[12px] uppercase tracking-[0.14em] hover:bg-teal-700 transition-colors"
            >
              Book a consultation
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="h-10 w-10 flex lg:hidden items-center justify-center text-teal-700"
            >
              <List size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-teal-900/50"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute top-0 right-0 h-full w-[88%] max-w-sm bg-ivory-50 flex flex-col transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 h-[68px] border-b border-stone-200">
            <span className="font-display text-xl text-teal-700">Menu</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="h-10 w-10 flex items-center justify-center text-stone-700"
            >
              <X size={22} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col px-6 py-6 gap-0 overflow-y-auto">
            {navLinks.map((l, i) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `py-4 font-display text-2xl transition-colors border-b border-stone-200 flex items-baseline gap-4 ${
                    isActive ? 'text-teal-700' : 'text-stone-800'
                  }`
                }
              >
                <span className="numeral text-stone-400">{String(i + 1).padStart(2, '0')}</span>
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="px-6 py-6 border-t border-stone-200 space-y-3">
            <a
              href={`tel:${business.phone.replace(/\s/g, '')}`}
              className="w-full flex items-center justify-center gap-2 bg-teal-600 text-ivory-50 py-3.5 text-[12px] uppercase tracking-[0.14em]"
            >
              <Phone size={14} weight="fill" />
              {business.phone}
            </a>
            <p className="text-xs text-stone-500 text-center">
              {business.address}
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
