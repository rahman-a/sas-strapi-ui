type Variants =
  | 'dark-primary'
  | 'dark-white'
  | 'white'
  | 'primary-outlined'
  | 'secondary-outlined'
  | 'gray-outlined'
  | 'text'

export interface ButtonType {
  variant?: Variants
  className?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
  children?: React.ReactNode
  style?: React.CSSProperties
  disabled?: boolean
  icon?: 'arrow' | 'thick-arrow' | boolean
  rounded?: boolean
  as?: 'a' | 'button'
  href?: string
  dataAttributes?: Record<string, string | boolean>
}
