import ResourceView from './ResourceView.jsx'

const activitiesEndpoint = '/api/activities/'

function Activities() {
  return (
    <ResourceView
      title="Activities"
      endpoint={activitiesEndpoint}
      fetcher={fetch}
      columns={[
        { key: 'user', label: 'User' },
        { key: 'type', label: 'Type' },
        { key: 'durationMinutes', label: 'Minutes' },
        { key: 'caloriesBurned', label: 'Calories' },
        { key: 'activityDate', label: 'Date' },
      ]}
    />
  )
}

export default Activities