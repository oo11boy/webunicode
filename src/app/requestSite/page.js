// app/requestSite/page.js
import { redirect } from 'next/navigation';
import React from 'react';

export const metadata = {
  robots: {
    index: false, 
    follow: false, 
  },
};

export default function Page() {
  redirect('../requestSite/create');
  return <div>page create</div>;
}