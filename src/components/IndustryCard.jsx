import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';

export default function IndustryCard({ industry, index }) {
  return (
    <article className="group relative overflow-hidden bg-teal-900 text-ivory-50 h-[440px] flex flex-col justify-end">
      <img
        src={industry.image}
        alt={industry.name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-50 group-hover:opacity-65 group-hover:scale-[1.03] transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-900/70 to-teal-900/10" />
      <div className="relative p-7">
        <p className="numeral text-copper-300 mb-3">
          {String(index + 1).padStart(2, '0')} / INDUSTRY
        </p>
        <h3 className="font-display text-3xl text-ivory-50 mb-3 text-balance">
          {industry.name}
        </h3>
        <p className="text-sm text-teal-100/85 mb-5 max-w-sm leading-relaxed">
          {industry.tagline}
        </p>
        <ul className="space-y-1.5 mb-5">
          {industry.points.map((p, i) => (
            <li key={i} className="text-[12.5px] text-teal-100/80 flex items-baseline gap-2">
              <span className="text-copper-400">—</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-copper-300 font-medium pt-3 border-t border-teal-700/60">
          Sector specialisation
          <ArrowRight size={14} weight="bold" className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </article>
  );
}
