// pages/404.js
import React from 'react';
import Link from 'next/link';
import { Flex } from 'antd';
type Props = {}

const NotFound = (props: Props) => {
 return (
  <Flex vertical className='w-full h-screen ' justify='center' align="center">
   <h1>404 - Page Not Found</h1>
   <Link href="/">
    Go back home
   </Link>
  </Flex>
 );
}

export default NotFound