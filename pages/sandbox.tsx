import { CodeSandbox } from '@/component/CodeSandbox';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { vizName } = router.query;

  if (typeof vizName !== 'string') {
    return null;
  }

  return (
    <div className="fixed h-screen inset-0 flex justify-center items-center">
      <div className="absolute inset-0 w-full h-full bg-white/80" />
      <div className="relative w-11/12 h-full py-4">
        <CodeSandbox vizName={vizName} height={'100%'} />
      </div>
    </div>
  );
}
