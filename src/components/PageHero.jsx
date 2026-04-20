import React from 'react';
import { Link } from 'react-router-dom';
import { CaretRight } from '@phosphor-icons/react';

export default function PageHero({ numeral, eyebrow, title, sub, breadcrumbs = [], image }) {
  return (
    <section className="relative bg-teal-800 text-ivory-50 overflow-hidden">
      <div className="grain" />
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt=""
            loading="eager"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-900/60 via-teal-800/80 to-teal-800"></div>
        </div>
      )}
      <div className="absolute inset-0 fine-grid opacity-30 pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 pt-16 pb-20 lg:pt-24 lg:pb-28">
        {breadcrumbs.length > 0 && (
          <nav className="mb-8 flex items-center gap-1.5 text-[12px] text-teal-200 font-mono tracking-wide overflow-x-auto no-scrollbar">
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5 whitespace-nowrap">
                {b.to ? (
                  <Link to={b.to} className="hover:text-copper-300 transition-colors">{b.label}</Link>
                ) : (
                  <span className="text-ivory-100 truncate max-w-[60vw] sm:max-w-none">{b.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <CaretRight size={10} className="text-teal-400" />}
              </span>
            ))}
          </nav>
        )}
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-9">
            {numeral && (
              <p className="numeral text-copper-300 mb-4">{numeral}</p>
            )}
            {eyebrow && (
              <p className="text-[12px] uppercase tracking-[0.2em] text-teal-200 font-mono mb-5">{eyebrow}</p>
            )}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
              {title}
            </h1>
            {sub && (
              <p className="mt-6 text-base lg:text-lg text-teal-100/85 leading-relaxed max-w-2xl text-pretty">
                {sub}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
