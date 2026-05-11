# Lifeline NG - Emergency Medical Response MVP

Modern MVP for Nigeria-focused emergency reporting and responder dispatch.

## Architecture
- **Frontend**: Next.js + React + Tailwind (mobile-first)
- **Backend**: Django + DRF + JWT
- **DB**: SQLite (default local) or PostgreSQL (production)
- **Realtime**: Django Channels WebSockets

## Core models
- User (citizen/responder/admin)
- ResponderProfile
- EmergencyIncident
- EmergencyResponse
- Donation
- Vehicle
- Hospital

## Quick start
1. `cp .env.example .env`
2. Choose DB mode:
   - Default local mode uses SQLite (no PostgreSQL needed).
   - For PostgreSQL, set `DB_ENGINE=postgres` and ensure Postgres is running on configured host/port.
3. Backend:
   - `cd backend`
   - `python -m venv .venv && source .venv/bin/activate`
   - `pip install -r requirements.txt`
   - `python manage.py migrate`
   - `python manage.py runserver`
4. Frontend:
   - `cd frontend`
   - `npm install`
   - `npm run dev`

## Realtime flow
1. Citizen creates incident from `/emergency`.
2. Backend finds online responders in 10km radius.
3. Backend broadcasts incident over `ws/incidents/`.
4. Responders receive and accept in responder console.

## Seed data
Use `scripts/seed_data.py` inside Django shell.

## Future-ready extensions
Fleet management, AI dispatching, SMS support, hospital integrations, chat/video, rewards.

See `docs/API.md` for endpoint documentation.


## Troubleshooting database errors
If you still see `connection refused` on `localhost:5432`, your environment is still using Postgres.
- Confirm `.env` has `DB_ENGINE=sqlite` for local development.
- Restart your terminal/process after changing `.env`.
- Run `python manage.py migrate` again from `backend/`.
