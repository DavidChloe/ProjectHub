import { useAuthStore } from '../stores/useAuthStore'

function LoginButton() {
    // 1. On récupère la FONCTION 'login' depuis le store
    const login = useAuthStore((state) => state.login)
    return (
        // 2. On l'exécute au clic en lui donnant une valeur ("Thomas")
        <button onClick= {() => login("Thomas")
}>
    Se connecter
        </button>
    )
}b