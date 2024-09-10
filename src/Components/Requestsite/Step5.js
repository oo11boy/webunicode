import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';
import { SitePhone } from '../UiComponents/Contact/Contact';

export default function Step5({ step, setStep }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="p-6 rounded-lg text-center">
        <CheckCircleIcon className="text-[#1f9d7e]" style={{ fontSize: 60 }} />
        <h1 className="text-2xl font-bold mt-4 text-[#9844F1]">درخواست شما ثبت شد</h1>
        <p className="text-[#9844F1] mt-2">به زودی با شما تماس خواهیم گرفت</p>
        <div className="text-[#1f9d7e] mt-4">شماره تماس ما: <SitePhone/></div>
        
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => window.location.href = '/'} 
          className="mt-6 !bg-[#1f9d7e]" 
        >
          بازگشت به سایت
        </Button>
      </div>
    </div>
  );
}
