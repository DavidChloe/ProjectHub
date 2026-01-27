import { create } from 'zustand'
import { supabase } from '../supabaseClient'

interface User {
    id: number;
    name: string;
    pseudo: string;
    profilcture: string;
}

interface AuthState {
    user: User | null;
    login: (pseudo: string) => Promise<void>;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,

    login: async (pseudoInput: string) => {
        try {
            const { data: userExiste, error: fetchError } = await supabase
                .from('User')
                .select('*')
                .eq('pseudo', pseudoInput)
                .single()

            if (fetchError && fetchError.code !== 'PGRST116') {
                console.error("Erreur lors de la recherche:", fetchError);
            }
            if (userExiste) {
                console.log("Utilisateur trouvé :", userExiste)
                set({ user: userExiste as User })
            } else {
                console.log("Création d'un nouvel utilisateur")

                const newUser = {
                    pseudo: pseudoInput,
                    name: pseudoInput
                }

                const { data: createdUser, error: createError } = await supabase
                    .from('User')
                    .insert([newUser])
                    .select()
                    .single()

                if (createError) throw createError

                if (createdUser) {
                    set({ user: createdUser as User })
                }
            }
        } catch (error) {
            console.error("Erreur lors du login :", error)
        }
    },

    logout: () => set({ user: null }),
}))

