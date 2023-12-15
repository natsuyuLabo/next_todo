import React from 'react'
import IconContainer from './IconContainer'

type AddIconProps = {
  size?: string
  color?: string
  onClick?: () => void
}

const AddIcon: React.FC<AddIconProps> = ({ size = '36px', color = '#A66C6C', onClick }) => {
  return (
    <IconContainer color={color} onClick={onClick}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={size}
        height={size}
        viewBox='0 0 36 36'
        fill='none'
        onClick={onClick}
        style={{ cursor: 'pointer' }} // Add a pointer cursor for better user experience
      >
        <rect width='36' height='36' rx='18' fill={color} />
        <path
          d='M18.6 9.29999C18.6 9.0613 18.5052 8.83238 18.3364 8.6636C18.1676 8.49481 17.9387 8.39999 17.7 8.39999C17.4613 8.39999 17.2324 8.49481 17.0636 8.6636C16.8948 8.83238 16.8 9.0613 16.8 9.29999V16.8H9.29999C9.0613 16.8 8.83238 16.8948 8.6636 17.0636C8.49481 17.2324 8.39999 17.4613 8.39999 17.7C8.39999 17.9387 8.49481 18.1676 8.6636 18.3364C8.83238 18.5052 9.0613 18.6 9.29999 18.6H16.8V26.1C16.8 26.3387 16.8948 26.5676 17.0636 26.7364C17.2324 26.9052 17.4613 27 17.7 27C17.9387 27 18.1676 26.9052 18.3364 26.7364C18.5052 26.5676 18.6 26.3387 18.6 26.1V18.6H26.1C26.3387 18.6 26.5676 18.5052 26.7364 18.3364C26.9052 18.1676 27 17.9387 27 17.7C27 17.4613 26.9052 17.2324 26.7364 17.0636C26.5676 16.8948 26.3387 16.8 26.1 16.8H18.6V9.29999Z'
          fill='white'
        />
      </svg>
    </IconContainer>
  )
}

export default AddIcon
