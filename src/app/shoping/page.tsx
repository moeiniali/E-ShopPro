import { Flex } from 'antd'
import React from 'react'
import { SearchCo, ProductsSkeleton, CardsCo } from '@/ExAllCo'
import { Suspense } from 'react';

const page = ({ searchParams }: {
  searchParams?: {
    query?: string,
    page?: string,
  }
}) => {


  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;



  return (
    <Flex justify='center' align='flex-start' className='w-full h-screen bg-green-200 p-2'>

      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <h1 className={` text-2xl`}>Invoices</h1>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          <SearchCo placeholder="Search invoices..." />
          {/* <CreateInvoice /> */}
        </div>
        <Suspense key={query + currentPage} fallback={<ProductsSkeleton />}>
          <CardsCo
            icon='/images/shoes.svg'
            productColors='sdfsdf'
            productDesc='dsfsdf'
            productInventory='dfsdfsdf'
            productName='sdfsdfsdf'
            productOff='dsfsfsdf'
            productPrice='dddddddd'
            productSize='321'

          // query={query} 
          // currentPage={currentPage}
          />
        </Suspense>
        <div className="mt-5 flex w-full justify-center">
          {/* <Pagination totalPages={totalPages} /> */}
        </div>
      </div>



    </Flex>
  )
}

export default page