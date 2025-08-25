// apps/admin/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AdminProviders } from './providers';
import { AdminSidebar } from '@/components/admin/sidebar';
import { AdminHeader } from '@/components/admin/header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'STEMORIA Admin - Staff Management Portal',
  description: 'Internal administration panel for STEMORIA platform',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AdminProviders>
          <div className="flex h-screen bg-gray-100">
            <AdminSidebar />
            <div className="flex-1 flex flex-col">
              <AdminHeader />
              <main className="flex-1 overflow-y-auto p-6">
                {children}
              </main>
            </div>
          </div>
        </AdminProviders>
      </body>
    </html>
  );
}