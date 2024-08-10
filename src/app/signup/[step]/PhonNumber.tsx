'use client';


import React from 'react'
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import { Input, Form, Button } from 'antd';
//types---------------------------------------------------------
import { Toaster } from 'react-hot-toast';
import type { FormProps } from 'antd';




type Props = {}

type FieldType = {
 phonNumber?: string
 num?: string
 code?: number | undefined
}


const PhonNumber = (props: Props) => {
 const router = useRouter();





 const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  let phonNumber = values?.phonNumber;
  if (phonNumber) {
   localStorage.setItem('phonNumber', phonNumber);
   router.push(`/signup/otp-${phonNumber}`)

  }
 }










 return (



  <div className={`w-full h-screen flex flex-col justify-start text-right gap-6 mt-4 `}>
   <Toaster />

   <p className='text-sm font-normal text-[#080707] '>
    لطفا شماره تلفن خود را وارد کنید
   </p>

   <span className='text-xs font-normal text-[#080707] ' >
    مالکیت سیم کارت باید به نام شما ثبت شده باشد*
   </span>

   <Form
    layout='horizontal'
    autoComplete="off"
    name='form'
    onFinish={onFinish}>

    <Form.Item<FieldType>
     name="phonNumber"
     rules={[
      { required: true, message: 'لطفاً شماره تلفن خود را وارد نمایید' },
      { pattern: RegExp("((0?9)|(\\+?989))((14)|(13)|(12)|(19)|(18)|(17)|(15)|(16)|(11)|(10)|(90)|(91)|(92)|(93)|(94)|(95)|(96)|(32)|(30)|(33)|(35)|(36)|(37)|(38)|(39)|(00)|(01)|(02)|(03)|(04)|(05)|(41)|(20)|(21)|(22)|(23)|(31)|(34)|(9910)|(9911)|(9913)|(9914)|(9999)|(999)|(990)|(9810)|(9811)|(9812)|(9813)|(9814)|(9815)|(9816)|(9817)|(998))\\W?\\d{3}\\W?\\d{4}", 'g'), message: 'شماره همراه وارد شده صحیح نمیباشد.' }
     ]}>

     <Input inputMode='numeric' placeholder='09...' maxLength={11} dir='ltr' />

    </Form.Item>

    <Form.Item style={{ position: 'absolute', top: '450px' }}>
     <Button type='default' htmlType='submit' style={{ border: 'none', width: 'auto', height: 'auto', padding: '0', borderRadius: '50%' }} >
      submit

     </Button>
    </Form.Item>
   </Form>

  </div>



 )
}

export default PhonNumber