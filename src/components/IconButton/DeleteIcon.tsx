import React from 'react'
import IconContainer from './IconContainer'

type DeleteIconProps = {
  size?: string
  color?: string
  onClick?: () => void
  disabled?: boolean
}

const DeleteIcon: React.FC<DeleteIconProps> = ({ size = '36px', color = '#A66C6C', onClick, disabled }) => {
  if (disabled) {
    color = '#898989'
  }
  return (
    <IconContainer color={color} onClick={onClick} disabled={disabled}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={size}
        height={size}
        viewBox='0 0 36 36'
        fill='none'
        style={{ cursor: 'pointer' }} // Add a pointer cursor for better user experience
      >
        <path
          d='M25.5 15.7112L23.8333 28H12.1667L10.5 15.7112M8 12.639H28M13.7667 12.1935V9.5361C13.7667 9.1287 13.9423 8.73799 14.2548 8.44991C14.5674 8.16184 14.9913 8 15.4333 8H20.4333C20.8754 8 21.2993 8.16184 21.6118 8.44991C21.9244 8.73799 22.1 9.1287 22.1 9.5361V12.6083'
          stroke={color}
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </IconContainer>
  )
}

export default DeleteIcon
