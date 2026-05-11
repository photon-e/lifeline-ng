# Lifeline NG API (MVP)

## Auth
- `POST /api/auth/register/`
- `POST /api/auth/login/`
- `POST /api/auth/refresh/`
- `GET/PATCH /api/auth/profile/`

## Emergencies
- `GET/POST /api/emergencies/incidents/`
- `GET/PATCH /api/emergencies/incidents/{id}/`
- `POST /api/emergencies/responses/`
- `PATCH /api/emergencies/responses/{id}/`
- WebSocket: `ws://host/ws/incidents/`

## Operations
- `GET/PATCH /api/operations/responder-profile/`
- `GET/POST /api/operations/vehicles/`
- `GET /api/operations/hospitals/`

## Donations
- `GET/POST /api/donations/`
- `GET /api/donations/stats/`

## Admin Analytics
- `GET /api/analytics/admin/`
