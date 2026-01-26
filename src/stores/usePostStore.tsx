import { create } from 'zustand'
import { supabase } from '../supabaseClient'

interface Post {
    id: number;
    content: string;
    author: string;
    likes: number;
}

interface PostState {
    posts: Post[];
    fetchPosts: () => Promise<void>;
    addPost: (content: string, authorName: string) => void;
    deletePost: (postId: number) => void;
    likePost: (postId: number) => void;
}

export const usePostStore = create<PostState>((set) => ({
    posts: [],

    fetchPosts: async () => {
        const { data, error } = await supabase
            .from('posts')
            .select('*')
            .order('id', { ascending: false }) // Les plus récents en haut

        if (error) console.error('Erreur fetch:', error)
        else set({ posts: data as Post[] || [] })
    },

    addPost: async (content, authorName) => {
        const newPost = {
            content,
            author_name: authorName,
            likes: 0
        }
        const { data, error } = await supabase
            .from('posts')
            .insert([newPost])
            .select()

        if (error) console.error('Erreur ajout:', error)
        else {
            // On met à jour l'état local avec le post renvoyé par la BDD (qui contient l'ID)
            set((state) => ({ posts: [data[0] as Post, ...state.posts] }))
        }
    },

    deletePost: async (postId) => {
        const { error } = await supabase
            .from('posts')
            .delete()
            .eq('id', postId)

        if (error) console.error('Erreur suppression:', error)
        else {
            set((state) => ({
                posts: state.posts.filter((post) => post.id !== postId)
            }))
        }
    },
    likePost: async (postId, currentLikes) => {
        const { error } = await supabase
            .from('posts')
            .update({ likes: currentLikes + 1 })
            .eq('id', postId)

        if (error) console.error('Erreur like:', error)
        else {
            set((state) => ({
                posts: state.posts.map((post) =>
                    post.id === postId
                        ? { ...post, likes: post.likes + 1 }
                        : post
                )
            }))
        }
    },
}))