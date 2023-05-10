import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import etcRequest from '@/service'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const [banners, setBanners] = useState<any[]>([])

  useEffect(() => {
    etcRequest
      .get({
        url: '/banner'
      })
      .then((res) => {
        console.log(res)
        setBanners(res.banners)
      })
  }, [])

  return (
    <div>
      {banners.map((item, index) => {
        return <div key={index}>{item.imageUrl}</div>
      })}
    </div>
  )
}

export default memo(Recommend)
