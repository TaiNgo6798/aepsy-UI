import { ProviderData } from '@/types';
import {create} from 'zustand';
import { persist } from 'zustand/middleware';
interface State {
  wishlist: ProviderData[];
  addToWishlist: (provider: ProviderData) => void;
  removeFromWishlist: (id?: string) => void;
  clearWishlist: () => void;
  isContainedInWishlist: (id?: string) => boolean
}

// Create Zustand store with persistence using localStorage
export const useAepsyStore = create<State>()(
  persist(
    (set, get) => ({
      wishlist: [],
      
      // Add a provider to the wishlist if not already present
      addToWishlist: (provider: ProviderData) => {
        const { wishlist } = get();
        if (!wishlist.some((item) => item.id === provider.id)) {
          set({ wishlist: [...wishlist, provider] });
        }
      },

      // Remove a provider from the wishlist by ID
      removeFromWishlist: (id?: string) => {
        set((state) => ({
          wishlist: state.wishlist.filter((provider) => provider.id !== id),
        }));
      },

      // Clear the entire wishlist
      clearWishlist: () => set({ wishlist: [] }),

      isContainedInWishlist: (id?: string) => {
        const { wishlist } = get();
        return wishlist.some((provider) => provider.id === id);
      }
    }),
    {
      name: 'wishlist-storage', // name of the item in localStorage
    }
  )
);
