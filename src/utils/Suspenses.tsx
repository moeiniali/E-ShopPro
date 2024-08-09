import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';



interface suspenseTypes {
  Element?: string
}

const Suspenses: React.FC<suspenseTypes> = ({ Element }) => {

  const handlerSuspense = (Element: string) => {
    switch (Element) {
      case 'phonNumber':
        return (<>
          <div className='w-full h-full flex flex-col justify-start text-right gap-6 mt-4 '>
            <Skeleton count={1} borderRadius={4} style={{ width: '50%', height: '20px', }} />
            <Skeleton count={1} borderRadius={4} style={{ width: '60%', height: '16px', }} />
            <Skeleton count={1} borderRadius={4} style={{ width: '100%', height: '32px', }} />
          </div>
        </>)

      case 'otp':
        return (<>
          <div className='w-full h-full flex flex-col justify-start text-right gap-6 mt-4 '>
            <Skeleton count={3} borderRadius={8} style={{ height: '32px', margin: '0 0 16px 0' }} />
          </div>
        </>)



      default:
        break;
    }
  }


  return (<>
    {handlerSuspense(Element || '')}
  </>


  )
}

export default Suspenses;




