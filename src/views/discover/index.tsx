import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { HeaderWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <HeaderWrapper>
      <div className="content">
        <Link to="/discover/recommend">推荐</Link>
        <Link to="/discover/ranking">排行榜</Link>
        <Link to="/discover/songs">歌单</Link>
        <Link to="/discover/djradio">主播电台</Link>
        <Link to="/discover/artist">歌手</Link>
        <Link to="/discover/album">新碟上架</Link>
      </div>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </HeaderWrapper>
  )
}

export default memo(Discover)
