import {PostCreator} from './components/PostCreator.js'
import Timeline from './pages/Timeline'
import { useAuthStore } from './stores/useAuthStore'
import {Card} from './Card'

function Header() {
  const user = useAuthStore((s) => s.user)
  const login = useAuthStore((s) => s.login)
  const logout = useAuthStore((s) => s.logout)

  if (user) {
    return (
      <div style={{padding: 20, borderBottom: '1px solid #ccc'}}>
        <h2>Bienvenue, {user.name} !</h2>
        <button onClick={logout}>Se déconnecter</button>
      </div>
    )
  }
  
  return (
    <div style={{padding: 20, borderBottom: '1px solid #ccc'}}>
      <h2>Personne n'est connecté</h2>
      <button onClick={() => login()}>Se connecter</button>
    </div>
  )
}
function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Header />
        <PostCreator />
        <Timeline />
    </div>
  );
}

export default App
