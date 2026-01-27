import { useState } from 'react'
import { PostCreator } from '../components/PostCreator.tsx'
import { Timeline } from './Timeline.tsx'
import { useAuthStore } from '../stores/useAuthStore.tsx'

function Header() {
  const [pseudoInput, setPseudoInput] = useState("")
  const user = useAuthStore((s) => s.user)
  const login = useAuthStore((s) => s.login)
  const logout = useAuthStore((s) => s.logout)

  const handleLogin = () => {
    if (pseudoInput.trim().length > 0) {
      login(pseudoInput)
    }
  }

  if (user) {
    if (user.name) {
      return (
        <div style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
          <h2>Bienvenue, {user.name} </h2>
          <button onClick={logout}>Se déconnecter</button>
        </div>
      )
    } else {
      return (
        <div style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
          <h2>Vous est actuellement anonyme</h2>
          <button onClick={logout}>Se déconnecter</button>
        </div>
      )
    }
  }

  return (
    <div style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
      <h2>Personne n'est connecté</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        {/* 3. Le champ de texte est relié à notre variable pseudoInput */}
        <input
          type="text"
          placeholder="Entrez votre pseudo..."
          value={pseudoInput}
          onChange={(e) => setPseudoInput(e.target.value)}
          style={{ padding: '8px' }}
        />
        <button onClick={handleLogin} style={{ padding: '8px 16px' }}>
          Se connecter
        </button>
      </div>
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
