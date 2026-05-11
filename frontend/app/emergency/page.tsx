'use client';
import { useState } from 'react';
import { api } from '@/lib/api';
const types = ['accident', 'fire', 'medical', 'pregnancy', 'violence'];
export default function EmergencyPage() {
  const [form, setForm] = useState({ emergency_type: 'accident', description: '', latitude: '', longitude: '' });
  const submit = async () => await api.post('/emergencies/incidents/', { ...form, latitude: Number(form.latitude), longitude: Number(form.longitude) });
  return <div className='space-y-4'><h2 className='text-2xl font-semibold'>SOS</h2><button className='bg-red-600 px-4 py-2 rounded-full animate-pulse'>SOS</button><div className='grid gap-2'><select className='bg-slate-800 p-2' onChange={(e)=>setForm({...form, emergency_type:e.target.value})}>{types.map(t=><option key={t}>{t}</option>)}</select><input placeholder='Latitude' className='bg-slate-800 p-2' onChange={(e)=>setForm({...form,latitude:e.target.value})}/><input placeholder='Longitude' className='bg-slate-800 p-2' onChange={(e)=>setForm({...form,longitude:e.target.value})}/><textarea placeholder='Description' className='bg-slate-800 p-2' onChange={(e)=>setForm({...form,description:e.target.value})}/><button onClick={submit} className='bg-emerald-500 px-4 py-2 rounded'>Report Emergency</button></div></div>;
}
