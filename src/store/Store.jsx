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

export const useCartStore = create((set, get) => ({
        cartItems:[],
        
        addItemsToCart: (item) => {
            set({cartItems: [...get().cartItems, {...item, quantity: 1}]});
        }
    }));
export default useAuthStore
