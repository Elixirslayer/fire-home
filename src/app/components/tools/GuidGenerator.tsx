import { copyToClipboard } from '@/app/Utils/CopyToClipboard';
import React, { useState } from 'react'
import { MdOutlineContentCopy } from 'react-icons/md';

export default function GuidGenerator() {
  const [guid, setGuid] = useState<string>(crypto.randomUUID());

  return (
    <div className='w-full flex text-white font-semibold'>
      <button onClick={()=> setGuid(crypto.randomUUID())} className='flex justify-center items-center bg-neutral-700 p-2 px-4 rounded-xl hover:bg-neutral-600'>Generate</button>
      <button onClick={()=> copyToClipboard(guid)} className='flex items-center gap-x-2 mx-8'>{guid} <MdOutlineContentCopy /></button>
    </div>
  )
}
