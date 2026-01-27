import { create } from 'zustand'
import { supabase } from '../supabaseClient.ts'

interface User {
    id: number;
    name: string;
    pseudo: string;
    profilPicture: string;
}

interface AuthState {
    user: User[];
    login: (pseudo: string, id: number) => void;
    logout: (user: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: [],
    login: (pseudo) => {
        const fakeId = "user_" + Date.now()
        set({ user: { id: 1, name: pseudo } })
    },
    logout: () => set({ user: null }),
}))

