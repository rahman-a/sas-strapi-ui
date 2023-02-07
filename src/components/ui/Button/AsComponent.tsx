import Link from 'next/link'
import React, { FunctionComponent, useEffect } from 'react'
import { ButtonType } from '@customTypes/Button'

type props = ButtonType

const AsComponent: FunctionComponent<props> = (props) => {
  useEffect(() => {
    console.log('props-button', props)
  }, [props])
  if (props.as === 'a') {
    return (
      <Link href={props.href!} {...props}>
        {props.children}
      </Link>
    )
  }
  return <button {...props}>{props.children}</button>
}

export default AsComponent
