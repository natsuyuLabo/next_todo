import React from 'react'
import styled from 'styled-components'

type CheckBoxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onClick'> & {
  disabled?: boolean
  /**
   * @deprecated このタイプは非推奨であるため、onClick は使用しないでください。
   */
  onClick?: never
}

const CheckBox: React.FC<CheckBoxProps> = ({ ...inputProps }: CheckBoxProps) => {
  return (
    <StyledCheckBoxContainer disabled={inputProps.disabled}>
      <StyledCheckBox type='checkbox' {...inputProps} />
    </StyledCheckBoxContainer>
  )
}

export default CheckBox

const StyledCheckBox = styled.input`
  position: relative;
  appearance: none;
  outline: none;
  width: 20px;
  height: 20px;
  border: none;
  cursor: pointer;
  text-align: center;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 20px;
    height: 20px;
    background: #fff;
    border: solid 1px #a66c6c;
    border-color: '#a66c6c';
    border-radius: 3px;
  }

  &:checked::before {
    background-color: #a66c6c;
  }

  &::after {
    display: block;
    content: '';
    position: absolute;
    left: 6px;
    top: 2px;
    width: 8px;
    height: 12px;
    border-right: 1.5px solid #fff;
    border-bottom: 1.5px solid #fff;
    transform: rotate(45deg);
    opacity: 0;
  }

  &:checked::after {
    opacity: 1;
  }

  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }
  &:disabled::before {
    border-color: #898989;
  }
  &:disabled:checked::before {
    background-color: #898989;
  }
`

const StyledCheckBoxContainer = styled.label<{ disabled?: boolean }>`
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  transition: opacity 0.3s;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  &:hover {
    background: rgba(166, 108, 108, 0.2);
  }

  &:active {
    background: rgba(166, 108, 108, 0.4);
  }
`
