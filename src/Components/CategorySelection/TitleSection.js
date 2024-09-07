import React from 'react'
import TopSectionText from '../UiComponents/TopSectionsTitle/TopSectionText'
import { Search } from '@mui/icons-material'

export default function TitleSection() {
  return (
    <>
        <div className="xl:hidden">
        <TopSectionText  maintext={'دنبال چی میگردی؟'} maincolor={'white'} linecolor={'white'}/>
        </div>
        <div className="w-3/12 hidden xl:!flex items-center justify-center">
     <span className="ml-2 ">
     <Search style={{fontSize:"35px",color:"white"}}/>
     </span>
 
        <h3 className="text-white text-2xl">دنبال چی میگردی؟</h3>
        </div>
    </>
  )
}
