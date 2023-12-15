import React, { ReactNode, ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

type EditIconContainerProps = {
  children: ReactNode
  color?: string
  onClick?: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>

const IconContainer: React.FC<EditIconContainerProps> = ({ children, color = '#A66C6C', onClick, ...buttonProps }) => {
  return (
    <IconContainerBox color={color} onClick={onClick} disabled={buttonProps.disabled} tabIndex={1} {...buttonProps}>
      {children}
    </IconContainerBox>
  )
}

export default IconContainer

const IconContainerBox = styled.button<{ color: string; disabled?: boolean }>`
  color: ${props => props.color};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: opacity 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: solid 1px #eceae6;

  &:focus {
    border: solid 1px #9a2e2e;
  }

  &:hover {
    background: #a66c6c33;
  }

  &:active {
    background: #a66c6c66;
  }
`
