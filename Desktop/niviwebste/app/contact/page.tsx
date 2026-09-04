'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/#contact');
  }, [router]);

  return (
    <div className="w-full min-h-screen bg-[#000000] flex items-center justify-center font-mono text-xs text-[#777777] tracking-widest uppercase">
      REDIRECTING TO CONTACT SECTION...
    </div>
  );
}
