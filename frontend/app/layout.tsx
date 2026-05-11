import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html><body><nav className='p-4 border-b border-slate-800 flex gap-4'><Link href='/'>Lifeline NG</Link><Link href='/emergency'>SOS</Link><Link href='/responder'>Responder</Link><Link href='/admin'>Admin</Link><Link href='/donate'>Donate</Link></nav><main className='max-w-5xl mx-auto p-4'>{children}</main></body></html>;
}
