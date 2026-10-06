import ResourceView from './ResourceView.jsx'

const teamsEndpoint = '/api/teams/'

function Teams() {
  return (
    <ResourceView
      title="Teams"
      endpoint={teamsEndpoint}
      fetcher={fetch}
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'mascot', label: 'Mascot' },
        { key: 'members', label: 'Members' },
        { key: 'weeklyGoalMinutes', label: 'Weekly Goal' },
      ]}
    />
  )
}

export default Teams