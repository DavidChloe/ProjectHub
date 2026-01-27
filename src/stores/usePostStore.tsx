import { create } from 'zustand'
import { supabase } from '../supabaseClient.ts'

interface Post {
    id: number;
    content: string;
    author: string;
    author_id: number;
    likes: number;
    datePost: Date;
}

interface PostState {
    posts: Post[];
    fetchPosts: () => Promise<void>;
    addPost: (content: string, authorId: number, authorPseudo: string) => Promise<void>;
    deletePost: (postId: number) => void;
    likePost: (postId: number, currentLikes: number) => Promise<void>;
}

export const usePostStore = create<PostState>((set) => ({
    posts: [],

    fetchPosts: async () => {
        const { data, error } = await supabase
            .from('Post')
            .select('*')
            .order('datePost', { ascending: false })

        if (error)
            console.error('Erreur fetch:', error)
        else {
            const mappedPosts = data.map((post: any) => ({
                ...post,
                author: post.User?.pseudo || 'Anonyme',
                author_id: post.author_id
            }))

            set({ posts: mappedPosts as Post[] })
        }
    },

    addPost: async (content: string, authorId: number, authorPseudo: string) => {
        const newPost = {
            content,
            authorId: authorId
        }
        const { data, error } = await supabase
            .from('Post')
            .insert([newPost])
            .select()

        if (error) console.error('Erreur ajout:', error)
        else if (data) {
            const newPostLocal: Post = {
                ...data[0],
                author_id: authorId
            }

            set((state) => ({ posts: [newPostLocal, ...state.posts] }))
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