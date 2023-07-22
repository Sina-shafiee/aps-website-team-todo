'use client';
import Link from 'next/link';
import { useAppSelector } from '@/store';
import LogoImage from '@/assets/icons/logo.svg';

export const Logo = () => {
  const isDarkMode = useAppSelector((state) => state.theme.mode === 'dark');
  return (
    <Link href='/'>
      <LogoImage width='119' height='35' fill={isDarkMode ? '#ffffff' : '#111111'} />
    </Link>
  );
};
