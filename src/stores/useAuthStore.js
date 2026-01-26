import { create } from 'zustand'

export const useAuthStore = create((set) => ({
    user: null, // État initial
    login: (pseudo) =>
        set({ user: { name: pseudo } }),
    logout: () =>
        set({ user: null }),
}))

