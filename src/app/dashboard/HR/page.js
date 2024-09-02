import DashboardItems from '@/Components/Dashboard/DashboardItems/DashboardItems'
import ItemsContent from '@/Components/Dashboard/ItemsContent/ItemsContent'
import React from 'react'

export default function page() {
  return (
    <div className='flex w-100 flex-row justify-end gap-x-4'>
   
   <ItemsContent/>  
      <DashboardItems/>
   
    </div>
  )
}
