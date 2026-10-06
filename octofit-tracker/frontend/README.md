# OctoFit Tracker Frontend

React 19 presentation tier for the OctoFit Tracker multi-tier application.

## Environment

When running in GitHub Codespaces, define `VITE_CODESPACE_NAME` so the frontend can call the backend at `https://$VITE_CODESPACE_NAME-8000.app.github.dev`.

For local development, create `.env.local` in this folder:

```env
VITE_CODESPACE_NAME=your-codespace-name
```

If `VITE_CODESPACE_NAME` is unset, the app falls back to `http://localhost:8000`.
