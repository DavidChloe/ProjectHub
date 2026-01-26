import { useState } from 'react'
import { useAuthStore } from './stores/useAuthStore'
import { usePostStore } from './stores/usePostStore'

function PostCreator() {
    const [text, setText] = useState('')
    
    const user = useAuthStore((state) => state.user)
    const addPost = usePostStore((state) => state.addPost)

    const handleSubmit = () => {
        if (text.trim() && user) {
            addPost(text, user.name) 
            setText('')
        }
    }

    if (!user) return null

    return (
        <div style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px' }}>
            <h3>Bonjour {user.name} ?</h3>
            <textarea 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Écrivez votre post..."
            />
            <button onClick={handleSubmit}>Publier</button>
        </div>
    )
}