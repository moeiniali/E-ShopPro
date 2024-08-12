"use client"

import React from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const SearchCo = ({ placeholder }: { placeholder: string }) => {
 const searchParams = useSearchParams();
 const pathname = usePathname();
 const { replace } = useRouter();



 function handleSearch(term: string) {
  const params = new URLSearchParams(searchParams);
  if (term) {
   params.set('query', term);
  } else {
   params.delete('query')
  }
  replace(`${pathname}?${params.toString()}`);
 }

 return (

  <div className="relative flex flex-1 flex-shrink-0">

   <label htmlFor="search" className="sr-only">
    Search
   </label>

   <input
    defaultValue={searchParams.get('query')?.toString()}
    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
    placeholder={placeholder}
    onChange={(e) => {
     handleSearch(e.target.value);
    }}
   />


  </div>



 )
}

export default SearchCo