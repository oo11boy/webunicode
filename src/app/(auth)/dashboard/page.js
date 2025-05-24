import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import AdminPannelContainer from '@/Components/auth/Dashboard/AdminPannelContainer';

export default async function Page() {
  const cookieStore = cookies();
  const isLoggedIn = cookieStore.get('isLoggedIn')?.value;
  const token = cookieStore.get('token')?.value;

  // اعتبارسنجی توکن
  if (!isLoggedIn || !token) {
    redirect('/login');
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.error('توکن نامعتبر است:', error);
    redirect('/login');
  }

  return (
    <>
      <AdminPannelContainer />
    </>
  );
}