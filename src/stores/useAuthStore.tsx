import { create } from 'zustand'

interface useAuthStore {
    user: { name: string } | null;
    login: (pseudo: string) => void;
    logout: () => void;
}

export const useAuthStore = create<useAuthStore>((set) => ({
    user: null, 
    login: (pseudo) => set({ user: { name: pseudo } }),
    logout: () => set({ user: null }),
}))

