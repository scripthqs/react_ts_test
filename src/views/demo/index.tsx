import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  name?: string
  age?: number
  height?: number
}

const Discover: FC<IProps> = (props) => {
  return (
    <div>
      <div>name: {props.name}</div>
    </div>
  )
}

Discover.defaultProps = {
  name: 'liuwenlong'
}

Discover.displayName = 'liuwenlong '

export default memo(Discover)
