import { useAuthStore } from '../stores/useAuthStore'

export function LoginButton() {
    const login = useAuthStore((state) => state.login)
    return (
        <button onClick={() => login}>Se connecter
        </button>
    )
}