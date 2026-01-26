import { useAuthStore } from './stores/useAuthStore'
function Profile() {
    const user = useAuthStore((state) => state.user)
    if (!user) {
        return <p>Personne n'est connecté.</p>
    }
    return (
        <div>
            <h1>Bienvenue {user.name} !</h1>
        </div>
    )
}