import React, { FunctionComponent } from 'react'
import Link from 'next/link'

interface AsComponentsProps {
  className?: string
  href?: string
  children: React.ReactNode
  as?: 'div' | 'a'
}

const AsComponents: FunctionComponent<AsComponentsProps> = ({
  children,
  as,
  className,
  href,
}) => {
  if (as === 'a') {
    return (
      <Link href={href || ''} className={className}>
        {children}
      </Link>
    )
  }
  return <div className={className}>{children}</div>
}

export default AsComponents
