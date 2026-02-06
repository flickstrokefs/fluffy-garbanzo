'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Newspaper, Users, Map, BookOpen, MessageCircle, Smile, Siren } from 'lucide-react';
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';

const links = [
  { href: '/dashboard', label: 'Dashboard', icon: Home },
  { href: '/dashboard/daily-pulse', label: 'Daily Pulse', icon: Newspaper },
  { href: '/dashboard/student-exchange', label: 'Student Exchange', icon: Users },
  { href: '/dashboard/explorers-guide', label: 'Explorer\'s Guide', icon: Map },
  { href: '/dashboard/academic-cockpit', label: 'Academic Cockpit', icon: BookOpen },
  { href: '/dashboard/chatbot', label: 'Campus Assistant', icon: MessageCircle },
  { href: '/dashboard/mental-wellbeing', label: 'Wellbeing Check', icon: Smile },
  { href: '/dashboard/emergency', label: 'Emergency SOS', icon: Siren },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {links.map((link) => {
        const Icon = link.icon;
        const isActive = pathname === link.href;
        return (
          <SidebarMenuItem key={link.href}>
            <Link href={link.href} passHref legacyBehavior>
              <SidebarMenuButton
                asChild
                isActive={isActive}
                tooltip={link.label}
              >
                <a>
                  <Icon />
                  <span>{link.label}</span>
                </a>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        );
      })}
    </SidebarMenu>
  );
}
