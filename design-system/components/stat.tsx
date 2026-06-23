/**
 * Stat — big-number block.
 *
 * Always cite a source below or link to one.
 */
import * as React from 'react';
import { cn } from './utils';

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  source?: string;
  align?: 'left' | 'center';
}

export const Stat: React.FC<StatProps> = ({
  value, label, source, align = 'left', className, ...props
}) => (
  <div
    className={cn(
      'flex flex-col gap-3',
      align === 'center' && 'items-center text-center',
      className
    )}
    {...props}
  >
    <div className="text-display-lg text-brand-600 leading-none tracking-[-0.02em] font-semibold">
      {value}
    </div>
    <div className="text-body-md text-ink-700 max-w-[28ch]">{label}</div>
    {source && <div className="text-caption text-ink-500">— {source}</div>}
  </div>
);
