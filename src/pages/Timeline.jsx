import { usePostStore } from './stores/usePostStore'

function Timeline() {
    const posts = usePostStore((state) => state.posts)
    const likePost = usePostStore((state) => state.likePost)
    const deletePost = usePostStore((state) => state.deletePost)

    return (
        <div>
            {posts.length === 0 ? <p>Aucun post pour le moment ...</p> : null}

            {posts.map((post) => (
                <div key={post.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
                    
                    {/* Auteur et contenu */}
                    <h4>@{post.author}</h4>
                    <p>{post.content}</p>

                    {/* Boutons d'actions */}
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button onClick={() => likePost(post.id)}>
                            like {post.likes}
                        </button>
                        
                        <button onClick={() => deletePost(post.id)}>
                            Supprimer
                        </button>
                    </div>

                </div>
            ))}
        </div>
    )
}