import { User } from '@shared/models/entities';
import { Routes } from '@/shared/enums';
import { router } from '@core/router';
import { create } from 'zustand';

export interface IUserStore {
  userLogin: (token: string | null) => void;
  userLogout: () => void;

  setUser: (data: User | null) => void;
  user: User | null;
}

export const useUserStore = create<IUserStore>((set) => ({
  userLogin: (token): void => {
    if (!!token) localStorage.setItem('token', token);
    router.navigate(Routes.HOME);
  },
  userLogout: (): void => {
    localStorage.removeItem('token');
    router.navigate(Routes.LOGIN);
  },

  setUser: (user): void => set(() => ({ user })),
  user: null,
}));
