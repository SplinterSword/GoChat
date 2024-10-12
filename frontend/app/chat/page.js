import React from 'react'
import Interface from "@/components/Interface";
import { Suspense } from 'react';

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div>
      <Interface />
    </div>
    </Suspense>
  )
}

export default page

