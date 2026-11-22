import type { ReactNode } from 'react'
import arrowRight from '../assets/arrow-right-sm.svg'
import './Button.css'

type Props = {
  variant?: 'primary' | 'secondary'
  href?: string
  arrow?: boolean
  iconLeft?: ReactNode
  onClick?: () => void
  className?: string
  children: ReactNode
}

export function Button({ variant = 'primary', href, arrow, iconLeft, onClick, className: extra, children }: Props) {
  const content = (
    <>
      {iconLeft}
      <span>{children}</span>
      {arrow && <img className="btn__icon" src={arrowRight} width={22} height={22} alt="" />}
    </>
  )
  const className = `btn btn--${variant}${extra ? ` ${extra}` : ''}`
  if (href) {
    return (
      <a className={className} href={href} onClick={onClick}>
        {content}
      </a>
    )
  }
  return (
    <button type="button" className={className} onClick={onClick}>
      {content}
    </button>
  )
}
