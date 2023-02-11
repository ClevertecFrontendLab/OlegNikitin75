import { create } from 'zustand';

export const useMobileMenuStore = create((set) => ({
  mobileMenu: null,

  openMobileMenu: () => set(() => ({ mobileMenu: true })),
  closeMobileMenu: () => set(() => ({ mobileMenu: false })),
  toggleMobileMenu: () => set((state) => ({ mobileMenu: !state.mobileMenu })),
}));
