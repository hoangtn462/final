'use client';
import { DataTable } from '@/components/DataTable';
import { Header } from '@/components/Header';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <DataTable />
    </div>
  );
}
