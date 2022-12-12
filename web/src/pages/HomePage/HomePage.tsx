import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'

import TemplatesCell from 'src/components/TemplatesCell'

const HomePage = () => {
  const { isAuthenticated } = useAuth()
  return <>{!isAuthenticated ? <div>Register</div> : <TemplatesCell />}</>
}

export default HomePage
