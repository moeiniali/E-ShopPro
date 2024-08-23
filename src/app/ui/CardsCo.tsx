import React from 'react'
import { Flex, Col, Row } from 'antd'
import Image from 'next/image'

interface CardsCoTypes {
  productName?: string,
  productDesc?: string,
  productColors?: string,
  productSize?: string,
  productOff?: string,
  productInventory?: string,
  productPrice?: string,
  icon?: string | undefined,
}

const CardsCo = ({ productName, productDesc, productColors, productSize, productOff
  , productInventory, productPrice, icon
}: CardsCoTypes) => {
  return (
    <>
      <Flex className="bg-white max-w-[500px] max-h-72 overflow-hidden m-2 rounded-3xl shadow-lg">
        <Col className='max-w-7/12' >
          <Image
            src={icon || ''}
            alt='icon'
            width={288}
            height={290}
            className='h-fit'
          />
        </Col>

        <Col className='max-w-5/12 flex items-start flex-col  '>
          <p className='font-medium text-sm text-[#474747] whitespace-pre-wrap'>{productName}</p>
          <p className='font-medium text-sm text-[#474747] whitespace-pre-wrap'>{productDesc}</p>
          <p className='font-medium text-sm text-[#fff] whitespace-pre-wrap'>{productColors}</p>
          <p className='font-medium text-sm text-[#474747] whitespace-pre-wrap'>{productSize}</p>
          <Row>
            <p className='font-medium text-sm text-[#02660C80] whitespace-pre-wrap'>{productOff}</p>
            <p className='font-medium text-sm text-[] whitespace-pre-wrap'>{productInventory}</p>
          </Row>
          <Row>
            <p className='font-medium text-sm text-[#474747] whitespace-pre-wrap'>{productPrice}</p>
            {/* shop icon */}
            <Image
              src="/images/Icon.svg"
              alt='icon'
              width={32}
              height={27}
              className='h-fit'
            />
            {/* favorite icon */}
            <Image
              src="/images/buy-button.svg"
              alt='icon'
              width={32}
              height={27}
              className='h-fit'
            />
          </Row>

        </Col>
      </Flex>

    </>
  )
}

export default CardsCo