import { create } from 'zustand'
import { supabase } from '../supabaseClient.ts'

interface Post {
    id: number;
    content: string;
    authorName: string;
    authorId: number;
    likes: number;
    datePost: Date;
}

interface PostState {
    posts: Post[];
    fetchPosts: () => Promise<void>;
    addPost: (content: string, authorId: number, authorName: string) => Promise<void>;
    deletePost: (postId: number) => void;
    likePost: (postId: number, currentLikes: number) => Promise<void>;
}

export const usePostStore = create<PostState>((set) => ({
    posts: [],

    fetchPosts: async () => {
        const { data, error } = await supabase
            .from('Post')
            .select('*, User!Post_authorId_fkey(pseudo)')
            .order('datePost', { ascending: false })

        if (error)
            console.error('Erreur fetch:', error)
        else {
            const mappedPosts = data.map((post: any) => ({
                ...post,
                authorName: post.User?.pseudo || 'Anonyme',
                authorId: post.authorId
            }))

            set({ posts: mappedPosts as Post[] })
        }
    },

    addPost: async (content: string, authorId: number, authorName: string) => {
        const newPost = {
            content,
            authorId: authorId
        }
        const { data, error } = await supabase
            .from('Post')
            .insert([newPost])
            .select()

        if (error) 
            console.error('Erreur ajout:', error)
        else if (data) {
            const newPostLocal: Post = {
                ...data[0],
                authorId: authorId,
                authorName: authorName,
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