import { useEffect } from 'react'
import { Heart, TrashIcon  } from 'lucide-react';
import { usePostStore } from '../stores/usePostStore'

export function Timeline() {
    const posts = usePostStore((state) => state.posts)
    const fetchPosts = usePostStore((state) => state.fetchPosts)
    const likePost = usePostStore((state) => state.likePost)
    const deletePost = usePostStore((state) => state.deletePost)

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div>
            {posts.length === 0 ? <p>Chargement, aucun post pour le moment ...</p> : null}

            {posts.map((post) => (
                <div key={post.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
                    <h4>@{post.author}</h4>
                    <p>{post.content}</p>

                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button onClick={() => likePost(post.id, post.likes)}>
                            <Heart /> {post.likes}
                        </button>
                        
                        <button onClick={() => deletePost(post.id)}>
                            <TrashIcon /> Supprimer
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}