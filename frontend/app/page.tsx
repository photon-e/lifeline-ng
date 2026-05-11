import Link from 'next/link';
import { ArrowRight, BadgeCheck, Clock3, HeartPulse, Shield, Users } from 'lucide-react';

const stats = [
  { label: 'Cities in rollout', value: '12+' },
  { label: 'Average dispatch time', value: '< 3 min' },
  { label: 'Connected responders', value: '2,500+' },
];

const highlights = [
  {
    title: 'One-tap SOS activation',
    description: 'Trigger an emergency alert instantly and share your location with nearest certified responders.',
    icon: HeartPulse,
  },
  {
    title: 'Smart responder routing',
    description: 'Route incidents to the right responder team using availability, distance, and incident type.',
    icon: Shield,
  },
  {
    title: 'Real-time coordination',
    description: 'Keep families, hospitals, and field teams synchronized through live event updates.',
    icon: Users,
  },
];

const trustPoints = ['Verified responder onboarding', 'Transparent impact reporting', '24/7 operational readiness'];

export default function Home() {
  return (
    <section className='space-y-12'>
      <div className='relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/20 via-slate-900 to-slate-950 px-6 py-14 shadow-2xl shadow-cyan-900/20 md:px-12'>
        <div className='absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl' />
        <div className='absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl' />

        <div className='relative z-10 max-w-3xl space-y-6'>
          <span className='inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200'>
            Emergency Response Platform
          </span>
          <h1 className='text-balance text-4xl font-bold leading-tight text-white md:text-6xl'>
            Emergency response, reimagined for every community.
          </h1>
          <p className='max-w-2xl text-lg text-slate-200'>
            Lifeline NG connects people in distress to verified responders in seconds with an intuitive dispatch network built for Nigeria.
          </p>

          <div className='flex flex-wrap items-center gap-3'>
            <Link
              href='/emergency'
              className='inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-cyan-300'
            >
              Launch SOS
              <ArrowRight size={18} />
            </Link>
            <Link
              href='/responder'
              className='inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 font-semibold text-white transition hover:border-cyan-300/60 hover:bg-white/5'
            >
              Join as Responder
            </Link>
          </div>
        </div>
      </div>

      <div className='grid gap-4 md:grid-cols-3'>
        {stats.map((stat) => (
          <article key={stat.label} className='rounded-2xl border border-white/10 bg-slate-900/70 p-5'>
            <p className='text-3xl font-bold text-white'>{stat.value}</p>
            <p className='mt-1 text-sm text-slate-300'>{stat.label}</p>
          </article>
        ))}
      </div>

      <div className='grid gap-5 md:grid-cols-3'>
        {highlights.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className='rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-lg shadow-slate-950/30'
          >
            <div className='mb-4 inline-flex rounded-xl bg-cyan-400/10 p-2 text-cyan-300'>
              <Icon size={20} />
            </div>
            <h2 className='text-xl font-semibold text-white'>{title}</h2>
            <p className='mt-2 text-sm leading-6 text-slate-300'>{description}</p>
          </article>
        ))}
      </div>

      <div className='grid gap-6 rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:grid-cols-2 md:p-8'>
        <div className='space-y-4'>
          <h3 className='text-2xl font-bold text-white'>Built with trust, speed, and accountability.</h3>
          <p className='text-slate-300'>
            We partner with emergency teams, hospitals, and donors to deliver rapid lifesaving support where and when it matters most.
          </p>
        </div>
        <ul className='space-y-3'>
          {trustPoints.map((item) => (
            <li key={item} className='flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/60 p-3 text-slate-200'>
              <BadgeCheck size={18} className='text-emerald-300' />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className='rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-6 text-center md:p-8'>
        <div className='mx-auto mb-3 flex w-fit items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200'>
          <Clock3 size={14} />
          Every second matters
        </div>
        <h4 className='text-2xl font-bold text-white'>Be part of the network that saves lives daily.</h4>
        <p className='mx-auto mt-2 max-w-2xl text-slate-200'>
          Support emergency operations through donations or join the field response force to strengthen critical care access across the country.
        </p>
        <div className='mt-5 flex flex-wrap justify-center gap-3'>
          <Link href='/donate' className='rounded-full bg-white px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-slate-100'>
            Donate now
          </Link>
          <Link href='/admin' className='rounded-full border border-white/20 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10'>
            View operations
          </Link>
        </div>
      </div>
    </section>
  );
}
