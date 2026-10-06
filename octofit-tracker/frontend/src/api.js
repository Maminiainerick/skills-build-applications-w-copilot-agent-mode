const codespaceName = import.meta.env.VITE_CODESPACE_NAME

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

export function normalizeCollection(payload) {
  if (Array.isArray(payload)) {
    return payload
  }

  for (const key of ['results', 'items', 'data', 'docs']) {
    if (Array.isArray(payload?.[key])) {
      return payload[key]
    }
  }

  return []
}