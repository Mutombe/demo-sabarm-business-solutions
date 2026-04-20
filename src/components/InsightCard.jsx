import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from '@phosphor-icons/react';

export default function InsightCard({ insight, featured = false }) {
  return (
    <Link
      to={`/insights/${insight.slug}`}
      className={`group flex flex-col bg-ivory-50 border border-stone-200 hover:border-teal-600 transition-colors ${
        featured ? 'lg:flex-row' : ''
      }`}
    >
      <div className={`overflow-hidden ${featured ? 'lg:w-1/2 aspect-[16/10] lg:aspect-auto' : 'aspect-[16/10]'}`}>
        <img
          src={insight.cover}
          alt={insight.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-700"
        />
      </div>
      <div className={`p-6 lg:p-7 flex flex-col ${featured ? 'lg:w-1/2 lg:justify-center lg:p-10' : ''}`}>
        <div className="flex items-center gap-3 mb-4 text-[11px] uppercase tracking-[0.14em] font-mono">
          <span className="bg-teal-50 text-teal-700 px-2.5 py-1">{insight.category}</span>
          <span className="text-stone-400">{insight.readTime}</span>
        </div>
        <h3 className={`font-display text-teal-700 group-hover:text-teal-600 transition-colors text-balance leading-tight mb-3 ${
          featured ? 'text-3xl lg:text-4xl' : 'text-xl'
        }`}>
          {insight.title}
        </h3>
        <p className="text-sm text-stone-600 leading-relaxed mb-5 line-clamp-3">{insight.excerpt}</p>
        <div className="mt-auto pt-4 border-t border-stone-200 flex items-center justify-between text-[12px]">
          <span className="text-stone-500">
            {insight.author} · {insight.date}
          </span>
          <ArrowUpRight size={18} className="text-teal-700 group-hover:text-copper-500 transition-colors" weight="bold" />
        </div>
      </div>
    </Link>
  );
}
