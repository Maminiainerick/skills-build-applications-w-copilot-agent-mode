import { useEffect, useState } from 'react'
import { apiBaseUrl, normalizeCollection } from '../api.js'

function formatValue(value) {
  if (value === null || value === undefined || value === '') {
    return '—'
  }

  if (Array.isArray(value)) {
    return value.join(', ')
  }

  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}/.test(value)) {
    return new Date(value).toLocaleDateString()
  }

  return value
}

function ResourceView({ title, endpoint, columns, fetcher = fetch }) {
  const [records, setRecords] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true

    async function loadRecords() {
      setStatus('loading')
      setError('')

      try {
        const response = await fetcher(`${apiBaseUrl}${endpoint}`)

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }

        const payload = await response.json()
        const collection = normalizeCollection(payload)

        if (active) {
          setRecords(collection)
          setStatus('ready')
        }
      } catch (requestError) {
        if (active) {
          setError(requestError.message)
          setRecords([])
          setStatus('error')
        }
      }
    }

    loadRecords()

    return () => {
      active = false
    }
  }, [endpoint, fetcher])

  return (
    <section className="resource-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{endpoint}</p>
          <h2>{title}</h2>
        </div>
        <span className="badge text-bg-dark">{apiBaseUrl}</span>
      </div>

      {status === 'loading' && <div className="alert alert-secondary">Loading records</div>}
      {status === 'error' && <div className="alert alert-warning">{error}</div>}

      {status === 'ready' && (
        <div className="table-responsive resource-table-wrap">
          <table className="table align-middle mb-0">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column.key} scope="col">{column.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {records.length === 0 ? (
                <tr>
                  <td colSpan={columns.length}>No records returned.</td>
                </tr>
              ) : (
                records.map((record, index) => (
                  <tr key={record._id ?? record.id ?? `${title}-${index}`}>
                    {columns.map((column) => (
                      <td key={column.key}>{formatValue(record[column.key])}</td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default ResourceView