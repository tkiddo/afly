import React from 'react'
import { Button } from 'antd'
import type { AfButtonProps } from './types'

const AfButton = (props: AfButtonProps) => {
  return <Button {...props}>{props.children}</Button>
}

export default AfButton
