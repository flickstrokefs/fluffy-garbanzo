import { GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 p-2 font-semibold text-lg", className)}>
      <GraduationCap className="h-7 w-7 text-primary" />
      <span className="text-foreground group-data-[state=collapsed]:hidden">Campus Companion</span>
    </div>
  );
}
