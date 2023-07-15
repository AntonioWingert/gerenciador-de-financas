'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import Swal from 'sweetalert2';

import CustomButton from '../CustomButton';
import CustomInput from '../CustomInput';

import * as S from './styles';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(8, 'Minimo 8 caracteres'),
});

type Inputs = z.infer<typeof schema>;

export default function Form() {
  const { get, set } = useLocalStorage();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = ({ email }) => {
    const user = get({ key: email });
    if (user === null) {
      Swal.fire({
        icon: 'success',
        title: 'Novo usuario criado com sucesso',
        timer: 2000,
        showCloseButton: false,
        showConfirmButton: false,
      });
      set({ key: email, value: '' });
      return router.push('/dashboard');
    }
    Swal.fire({
      icon: 'success',
      title: 'Login realizado com sucesso',
      timer: 2000,
      showCloseButton: false,
      showConfirmButton: false,
    });
    router.push('/dashboard');
  };

  return (
    <S.Container onSubmit={handleSubmit(onSubmit)}>
      <CustomInput
        placeholder="Digite seu email"
        label="Email"
        {...register('email', { required: true })}
        texterror={errors.email?.message}
      />
      <CustomInput
        placeholder="Digite sua senha"
        label="Senha"
        type="password"
        {...register('password', { required: true })}
        texterror={errors.password?.message}
      />
      <CustomButton $variable="primary" type="submit">
        Entrar
      </CustomButton>
    </S.Container>
  );
}
