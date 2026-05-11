'use client';
import { useState } from 'react';
import { api } from '@/lib/api';
export default function Donate() { const [amount, setAmount] = useState(''); return <div className='space-y-3'><h2 className='text-2xl'>Support Response Operations</h2><input className='bg-slate-800 p-2' placeholder='Amount (NGN)' onChange={(e)=>setAmount(e.target.value)}/><button className='bg-blue-600 px-4 py-2 rounded' onClick={()=>api.post('/donations/', { donor_name:'Anonymous', amount})}>Donate</button></div>; }
