'use client';


import React from 'react'
import { useRouter, useParams } from 'next/navigation';


type Props = {}

const Otp = (props: Props) => {
 const router = useRouter();



 return (
  <div className='w-full h-screen bg-gray-400' onClick={() => router.push('/signup/role')}>

   Otp
  </div>
 )
}

export default Otp