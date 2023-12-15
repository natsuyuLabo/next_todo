import React from 'react'
import IconContainer from './IconContainer'

type SendIconProps = {
  size?: string
  color?: string
  onClick?: () => void
}

const SendIcon: React.FC<SendIconProps> = ({ size = '36px', color = '#A66C6C', onClick }) => {
  return (
    <IconContainer color={color} onClick={onClick}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={size}
        height={size}
        viewBox='0 0 36 36'
        fill='none'
        style={{ cursor: 'pointer' }} // Add a pointer cursor for better user experience
      >
        <path
          d='M8.064 9.48201C7.754 8.53251 8.743 7.68051 9.6365 8.12701L27.3785 16.995C28.2075 17.41 28.2075 18.593 27.3785 19.0075L9.6365 27.876C8.743 28.3225 7.754 27.47 8.064 26.521L10.8425 18.001L8.064 9.48201ZM11.954 18.6265L9.345 26.624L26.5955 18.0015L9.345 9.37851L11.9535 17.3765H20.375C20.5408 17.3765 20.6997 17.4424 20.8169 17.5596C20.9342 17.6768 21 17.8357 21 18.0015C21 18.1673 20.9342 18.3262 20.8169 18.4434C20.6997 18.5607 20.5408 18.6265 20.375 18.6265H11.9535H11.954Z'
          fill={color}
        />
      </svg>
    </IconContainer>
  )
}

export default SendIcon
