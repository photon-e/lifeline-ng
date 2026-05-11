import './globals.css';
import Link from 'next/link';
import { Activity, HeartHandshake, LayoutDashboard, ShieldAlert, Siren } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home', icon: Activity },
  { href: '/emergency', label: 'SOS', icon: Siren },
  { href: '/responder', label: 'Responder', icon: ShieldAlert },
  { href: '/admin', label: 'Admin', icon: LayoutDashboard },
  { href: '/donate', label: 'Donate', icon: HeartHandshake },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <header className='sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur'>
          <div className='mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3'>
            <Link href='/' className='text-lg font-semibold tracking-tight text-white'>
              Lifeline NG
            </Link>
            <nav className='flex flex-wrap items-center gap-2'>
              {navLinks.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className='inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-sm text-slate-200 transition hover:border-cyan-400/60 hover:text-white'
                >
                  <Icon size={15} />
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className='mx-auto min-h-[calc(100vh-140px)] w-full max-w-6xl px-4 py-8'>{children}</main>

        <footer className='border-t border-white/10 bg-slate-950/80'>
          <div className='mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between'>
            <p>Designed for faster emergency response in Nigeria.</p>
            <p>© {new Date().getFullYear()} Lifeline NG.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
