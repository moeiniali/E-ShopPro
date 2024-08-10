"use client";

import React, { useEffect, useState } from 'react';
import PhonNumber from './PhonNumber';
import Otp from './Otp'
import Role from './Role';


type Params = {
  step: string
}

const page = ({ params }: { params: Params }) => {

  const phon = localStorage.getItem('phonNumber');

  console.log(phon);
  console.log(params.step);


  const renderContent = () => {
    switch (params.step) {
      case `phonNumber`:
        return (<PhonNumber />)
      case `otp-${phon}`:
        return (<Otp />)
      case `role`:
        return (<Role />)
      default:
        return <div>404</div>
    }

  }

  return (
    <>
      {renderContent()}
    </>
  )
}

export default page;