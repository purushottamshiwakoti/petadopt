import { create } from "zustand";

interface AuthState {
  isRegister: boolean;
  handleRegister: () => void;
  handleLogin: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isRegister: false,
  handleRegister: () => set((state) => ({ isRegister: true })),
  handleLogin: () => set((state) => ({ isRegister: false })),
}));

export default useAuthStore;
