import  Tokennav from '/components/token/tokennav';
import {useState, useEffect} from 'react'
import  Balance from '/components/token/balance';

export default function Example() {



  return (
    <>
    <Tokennav href={"/user/SdyB5lXR6VSIiZGgTIQhCpvi07r1"} />  
    <Balance />
  </>
  )
}
