import { Outlet } from 'react-router-dom'

export function AuthLayput() {
  return (
    <div>
      <h1>Autenticação</h1>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
