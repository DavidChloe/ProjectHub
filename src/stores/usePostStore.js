import { create } from 'zustand'
import { useAuthStore } from './authStore'

export const usePostStore = create((set) => ({
    posts: [],
    user: ({ useAuthStore: { name: pseudo } }),

    addPost: (content, authorName) => set((state) => ({
        posts: [{
            id: Date.now(),
            content: content,
            author: authorName,
            likes: 0
        },
        ...state.posts
        ]
    })),

    deletePost: (postId) => set((state) => ({
        posts: state.posts.filter((post) => post.id !== postId)
    })),

    likePost: (postId) => set((state) => ({
        posts: state.posts.map((post) =>
            post.id === postId
                ? { ...post, likes: post.likes + 1 }
                : post
        )
    })),
}))