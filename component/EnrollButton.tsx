'use client';

import { useContext } from 'react';
import { buttonVariants } from '@/component/UI/button';
// import AuthContext from '@/app/context/AuthContext';
import Link from 'next/link';

type EnrollButtonProps = {
  text: string;
};

export const EnrollButton = ({ text }: EnrollButtonProps) => {
  //const { user } = useContext(AuthContext);
  const user = undefined;

  if (user && user.hasPaid) {
    return (
      <span className="text-xs text-transparent bg-clip-text bg-gradient-to-br from-set1-teal to-set1-red font-bricolage">
        You have full access
      </span>
    );
  }

  return (
    <Link
      className={
        buttonVariants({ variant: 'important' }) + ' ' + 'no-decoration'
      }
      href="/#pricing"
    >
      <span className="font-bold">{text}</span>
    </Link>
  );
};
