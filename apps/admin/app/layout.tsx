// apps/admin/app/layout.tsx
import type { Metadata } from 'next';
import { AdminProviders } from './providers';
import { AdminSidebar } from '@/components/admin/sidebar';
import { AdminHeader } from '@/components/admin/header';
import './globals.css';

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
      <body className="font-sans">
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