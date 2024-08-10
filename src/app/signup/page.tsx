import React from 'react'


const page = ({ params }: { params: { slug: string } }) => {
 return (
  <div>
   step : {params.slug}
  </div>
 )
}

export default page