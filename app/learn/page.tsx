import { Card } from '@/component/UI/card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TODO',
  description: 'TODO',
};

export default function Page() {
  return (
    <div className="wrapper">
      <h1>This is the first title mate</h1>
      <p className="bg-red-300">Hello</p>
      <Card>eyooooo</Card>
    </div>
  );
}
