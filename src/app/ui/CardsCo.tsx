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
      <Flex justify='start' align='start' className="bg-white max-w-[500px] h-72 overflow-hidden  rounded-3xl shadow-lg  ">
        <Col className='max-w-7/12 overflow-hidden '>
          <Image
            src={icon || ''}
            alt='icon'
            width={288}
            height={290}
            className='h-fit cursor-pointer hover:scale-105 duration-700 '
          />
        </Col>

        <Col className='max-w-5/12 h-full flex items-start flex-col justify-between  px-4 py-6 '>
          <Flex gap={8} vertical>
            <p className='font-medium text-sm text-[#474747] whitespace-pre-wrap'>{productName}</p>
            <p className='font-medium text-sm text-[#474747] whitespace-pre-wrap'>{productDesc}</p>
          </Flex>

          <Flex vertical gap={12}>
            <Flex gap={8} align='center' >
              <p className='font-medium text-sm text-[#474747] whitespace-pre-wrap'>{productColors}</p>
              <Flex gap={4} align='center' justify='center' content='center' className='w-[84px] h-8 rounded-full bg-[#a5b8c649] '>
                <span className="w-5 h-5 rounded-full bg-white cursor-pointer"></span>
                <span className="w-5 h-5 rounded-full bg-black cursor-pointer"></span>
                <span className="w-5 h-5 rounded-full bg-blue-900 cursor-pointer"></span>
              </Flex>
            </Flex>
            {/* </Flex> */}
            {/* <Flex gap={8} vertical> */}
            <p className='font-medium text-sm text-[#474747] whitespace-pre-wrap'>{productSize}</p>
            <Flex gap={8} align='center' >
              <p className='w-24 h-6 bg-[#FF9345] flex items-center justify-center rounded-full font-medium text-sm
               text-[#fff] whitespace-pre-wrap'>{productInventory}</p>
              <p className='font-medium text-sm text-[#02660C80] whitespace-pre-wrap'>{productOff}</p>
            </Flex>

          </Flex>

          {/* test commit  */}
          <div className='w-full flex justify-between items-center '>
            <p className='font-medium text-sm text-[#474747] whitespace-pre-wrap'>{productPrice}</p>
            <Flex gap={8}>
              <Image
                src="/images/Icon.svg"
                alt='icon'
                width={32}
                height={27}
                className='h-fit cursor-pointer hover:scale-95 duration-700'
              />
              <Image
                src="/images/buy-button.svg"
                alt='icon'
                width={32}
                height={27}
                className='h-fit cursor-pointer hover:scale-95 duration-700'
              />
            </Flex>
          </div>

        </Col>
      </Flex>

    </>
  )
}

export default CardsCo