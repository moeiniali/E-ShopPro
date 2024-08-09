import React from 'react'
import Image from 'next/image';
import { Card, Col, Row, Flex } from 'antd';

type Props = {}

const OrgCards = (props: Props) => {
 return (
  <>

   <Card className="max-w-[518px] max-h-[328px] shrink-0  bg-red-200">
    <Flex>
     <Image
      alt="image"
      width={286}
      height={328}
      src="/next.svg"
     />
     <Col>
      <p className="text-md">NextUI</p>
      <p className="text-small text-default-500">nextui.org</p>
      <p>Make beautiful websites regardless of your design experience.</p>
     </Col>
     <div className="flex flex-col">
     </div>

    </Flex >
   </Card>

  </>
 )
}

export default OrgCards