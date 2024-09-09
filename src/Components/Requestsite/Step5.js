import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';
import { SitePhone } from '../UiComponents/Contact/Contact';

export default function Step5({ step, setStep }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="p-6 rounded-lg text-center">
        <CheckCircleIcon className="text-green-500" style={{ fontSize: 60 }} />
        <h1 className="text-2xl font-bold mt-4 text-gray-800">درخواست شما ثبت شد</h1>
        <p className="text-gray-600 mt-2">به زودی با شما تماس خواهیم گرفت</p>
        <div className="text-gray-500 mt-4">شماره تماس ما: <SitePhone/></div>
        
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => window.location.href = '/'} 
          className="mt-6"
        >
          بازگشت به سایت
        </Button>
      </div>
    </div>
  );
}
