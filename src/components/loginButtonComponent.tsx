import { useAuthStore } from '../stores/useAuthStore'

export function LoginButton() {
    const login = useAuthStore((state) => state.login)
    return (
        <button onClick={() => login("Thomas")
        }>
            Se connecter
        </button>
    )
}