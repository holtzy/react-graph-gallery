import { Card } from '@/component/UI/card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TODO',
  description: 'TODO',
};

export default function Page() {
  return (
    <div>
      <p className="bg-red-300">Hello</p>
      <Card>eyooooo</Card>
    </div>
  );
}
