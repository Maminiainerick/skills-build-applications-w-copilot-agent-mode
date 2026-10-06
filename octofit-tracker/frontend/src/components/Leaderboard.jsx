import ResourceView from './ResourceView.jsx'

const leaderboardEndpoint = '/api/leaderboard/'

function Leaderboard() {
  return (
    <ResourceView
      title="Leaderboard"
      endpoint={leaderboardEndpoint}
      fetcher={fetch}
      columns={[
        { key: 'rank', label: 'Rank' },
        { key: 'user', label: 'User' },
        { key: 'team', label: 'Team' },
        { key: 'points', label: 'Points' },
      ]}
    />
  )
}

export default Leaderboard