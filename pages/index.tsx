import {
  useSession, signIn, signOut
} from 'next-auth/client'

import Dashboard from '../components/Layout/Dashboard'
export default function Home() {
  return (
    <Dashboard title='Welcome to Discord Bot Assistant'>

    </Dashboard>)
}
