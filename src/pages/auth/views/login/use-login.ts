import { UseFormReturn, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useUserStore } from '@shared/stores';
import { login } from '@api/auth';
import * as z from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email('INVALID_EMAIL'),
  password: z.string().min(1, 'REQUIRED'),
});

export type LoginForm = z.infer<typeof loginFormSchema>;

export const useLogin = (): {
  onSubmit: (data: LoginForm) => void;
  form: UseFormReturn<LoginForm>;
  isLoading: boolean;
} => {
  const { userLogin } = useUserStore();

  const form = useForm<LoginForm>({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = (data: LoginForm): void => {
    loginMutation.mutate(data);
  };

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => userLogin(data.access_token),
  });

  return { form, onSubmit, isLoading: loginMutation.isPending };
};
