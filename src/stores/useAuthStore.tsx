import { create } from 'zustand'

interface AuthState {
    user: { name: string } | null;
    login: (pseudo: string) => void;
    logout: () => void;
}

export const useAuthStore = create((set) => ({
    user: null, // État initial
    login: (pseudo) => set({ user: { name: pseudo } }),
    logout: () => set({ user: null }),
}))

