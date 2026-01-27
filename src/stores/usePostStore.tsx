import { create } from 'zustand'
import { supabase } from '../supabaseClient.ts'

interface Post {
    id: number;
    content: string;
    author: string;
    author_id: number;
    likes: number;
}

interface PostState {
    posts: Post[];
    fetchPosts: () => Promise<void>;
    addPost: (content: string, authorId: number) => void;
    deletePost: (postId: number) => void;
    likePost: (postId: number, currentLikes: number) => Promise<void>;
}

export const usePostStore = create<PostState>((set) => ({
    posts: [],

    fetchPosts: async () => {
        const { data, error } = await supabase
            .from('Post')
            .select('*')
            .order('id', { ascending: false })

        if (error) console.error('Erreur fetch:', error)
        else set({ posts: data as Post[] || [] })
    },

    addPost: async (content: string, authorId: number) => {
        const newPost = {
            content,
            authorId: authorId,
            likes: 0
        }
        const { data, error } = await supabase
            .from('Post')
            .insert([newPost])
            .select()

        if (error) console.error('Erreur ajout:', error)
        else if (data) {
            set((state) => ({ posts: [data[0] as Post, ...state.posts] }))
        }
    },

    deletePost: async (postId: number) => {
        const { error } = await supabase
            .from('Post')
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
            .from('Post')
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