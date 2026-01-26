import { create } from 'zustand'

interface Post {
    id: number;
    content: string;
    author: string;
    likes: number;
}

interface PostState {
    posts: Post[];
    addPost: (content: string, authorName: string) => void;
    deletePost: (postId: number) => void;
    likePost: (postId: number) => void;
}

export const usePostStore = create<PostState>((set) => ({
    posts: [],

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