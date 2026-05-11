import axios from 'axios';
export const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api' });
export const wsUrl = process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:8000/ws/incidents/';
