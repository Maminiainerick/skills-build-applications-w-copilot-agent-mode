import ResourceView from './ResourceView.jsx'

const usersEndpoint = '/api/users/'

function Users() {
  return (
    <ResourceView
      title="Users"
      endpoint={usersEndpoint}
      fetcher={fetch}
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'role', label: 'Role' },
        { key: 'team', label: 'Team' },
      ]}
    />
  )
}

export default Users