import React from 'react'
import { useRouter } from 'next/navigation';



type Props = {}

const Role = (props: Props) => {
 const router = useRouter();

 return (
  <div className='w-full h-screen bg-gray-400' onClick={() => router.push('/signup/role')}>

   role</div>
 )
}

export default Role