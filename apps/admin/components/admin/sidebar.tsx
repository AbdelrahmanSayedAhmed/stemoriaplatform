// apps/admin/components/admin/sidebar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  Wrench,
  Gamepad2,
  FlaskConical,
  UserCheck,
  FileText,
  CreditCard,
  Shield,
  ClipboardList,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from 'lucide-react';
// Note: In production this would be from 'next-auth/react'
// import { signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

// Mock signOut for testing
function signOut() {
  console.log('Sign out');
}

const menuItems = [
  {
    title: 'Main',
    items: [
      { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
      { icon: ClipboardList, label: 'Analytics', href: '/analytics' },
    ],
  },
  {
    title: 'Management',
    items: [
      { icon: Users, label: 'Users & Institutions', href: '/users', badge: 12 },
      { icon: GraduationCap, label: 'Curriculum', href: '/curriculum' },
      { icon: BookOpen, label: 'Learn Content', href: '/content' },
      { icon: Wrench, label: 'Tools & Labs', href: '/tools' },
      { icon: Gamepad2, label: 'Games', href: '/games' },
      { icon: UserCheck, label: 'Tutoring', href: '/tutoring' },
    ],
  },
  {
    title: 'Operations',
    items: [
      { icon: FileText, label: 'Assessments', href: '/assessments' },
      { icon: CreditCard, label: 'Finance', href: '/finance' },
      { icon: Shield, label: 'Moderation', href: '/moderation', badge: 3 },
    ],
  },
  {
    title: 'System',
    items: [
      { icon: Shield, label: 'Security', href: '/security' },
      { icon: ClipboardList, label: 'Audit Logs', href: '/audit' },
      { icon: Settings, label: 'Settings', href: '/settings' },
    ],
  },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        'bg-gray-900 text-white transition-all duration-300',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center justify-between px-4">
          {!collapsed && (
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">🧬</span>
              <span className="font-bold text-xl">STEMORIA Admin</span>
            </Link>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="text-white hover:bg-gray-800"
          >
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        </div>

        <ScrollArea className="flex-1 px-3">
          <div className="space-y-4 py-4">
            {menuItems.map((section) => (
              <div key={section.title}>
                {!collapsed && (
                  <h2 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                    {section.title}
                  </h2>
                )}
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          'flex items-center justify-between rounded-lg px-2 py-2 text-sm font-medium transition-colors',
                          isActive
                            ? 'bg-gray-800 text-white'
                            : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                        )}
                      >
                        <div className="flex items-center">
                          <Icon className={cn('h-5 w-5', collapsed ? '' : 'mr-3')} />
                          {!collapsed && <span>{item.label}</span>}
                        </div>
                        {!collapsed && item.badge && (
                          <span className="ml-auto flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-600 px-1 text-xs text-white">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="border-t border-gray-800 p-4">
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-300 hover:bg-gray-800 hover:text-white"
            onClick={() => signOut()}
          >
            <LogOut className={cn('h-5 w-5', collapsed ? '' : 'mr-3')} />
            {!collapsed && <span>Logout</span>}
          </Button>
        </div>
      </div>
    </aside>
  );
}