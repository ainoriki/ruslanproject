import { create } from "zustand";
import { persist } from "zustand/middleware";

 const useAuthStore = create(
        persist((set, get) => ({
            token:null,
            isAuthenticated: false,
            login: token => set({token, isAuthenticated: true}),
        }),
        {name: 'auth', getStorage: () => localStorage}
        )
    );

export const useCartStore = create(
    persist(
        (set) => ({
            cartItems: [],
            addItemsToCart:(item) => 
                set((state) => ({cartItems: [...state.cartItems, item]})),
        }),
        {
            name:'cart-storage',
        }
    )
)
export default useAuthStore
