import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from '@phosphor-icons/react';
import { ArrowUpRight } from '@phosphor-icons/react';

export default function ServiceCard({ service, index }) {
  const Icon = Icons[service.icon] || Icons.Briefcase;
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group relative bg-ivory-50 border border-stone-200 hover:border-teal-600 transition-all duration-300 p-7 flex flex-col h-full focus:outline-none"
    >
      <div className="flex items-start justify-between mb-8">
        <div className="h-12 w-12 bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-ivory-50 transition-colors">
          <Icon size={22} weight="duotone" />
        </div>
        <span className="numeral text-stone-400 tabular-nums">
          {String(index + 1).padStart(2, '0')} / {String(7).padStart(2, '0')}
        </span>
      </div>

      <h3 className="font-display text-2xl text-teal-700 mb-3 group-hover:text-teal-600 transition-colors">
        {service.title}
      </h3>
      <p className="text-sm text-stone-600 leading-relaxed mb-6">{service.short}</p>

      <ul className="mt-auto space-y-1.5 mb-7">
        {service.sub.slice(0, 3).map((s, i) => (
          <li key={i} className="text-[12.5px] text-stone-500 flex items-baseline gap-2">
            <span className="text-copper-500">—</span>
            <span>{s}</span>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between pt-5 border-t border-stone-200">
        <span className="text-[11px] uppercase tracking-[0.16em] text-teal-700 font-medium">
          Explore service
        </span>
        <ArrowUpRight size={18} className="text-teal-700 group-hover:text-copper-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" weight="bold" />
      </div>
    </Link>
  );
}
