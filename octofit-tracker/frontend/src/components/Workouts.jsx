import ResourceView from './ResourceView.jsx'

const workoutsEndpoint = '/api/workouts/'

function Workouts() {
  return (
    <ResourceView
      title="Workouts"
      endpoint={workoutsEndpoint}
      fetcher={fetch}
      columns={[
        { key: 'title', label: 'Title' },
        { key: 'focus', label: 'Focus' },
        { key: 'difficulty', label: 'Difficulty' },
        { key: 'durationMinutes', label: 'Minutes' },
        { key: 'exercises', label: 'Exercises' },
      ]}
    />
  )
}

export default Workouts