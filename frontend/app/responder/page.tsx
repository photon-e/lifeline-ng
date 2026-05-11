'use client';
import { useEffect, useState } from 'react';
import { wsUrl } from '../../lib/api';
export default function ResponderPage() {
  const [alerts, setAlerts] = useState<any[]>([]);
  useEffect(()=>{ const ws = new WebSocket(wsUrl); ws.onmessage = (e)=> setAlerts((p)=>[JSON.parse(e.data), ...p]); return ()=>ws.close();},[]);
  return <div><h2 className='text-2xl font-semibold mb-4'>Responder Console</h2><button className='bg-emerald-600 px-3 py-2 rounded mb-3'>Go Online</button><ul className='space-y-2'>{alerts.map((a,i)=><li key={i} className='p-3 bg-slate-900 rounded'>Incident #{a.incident_id} ({a.type})</li>)}</ul></div>;
}
