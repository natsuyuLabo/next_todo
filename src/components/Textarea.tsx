import React, { ChangeEvent, useRef, useEffect, TextareaHTMLAttributes } from 'react'
import styled from 'styled-components'

/**
 * TextareaComponent
 *
 * input type=textでは敵わないときに使用する想定
 *
 */

interface StyledTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  autoHeight: boolean
}

const StyledTextarea = styled.textarea<StyledTextareaProps>`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  resize: none;
  overflow-y: hidden;
  background-color: transparent;
  height: ${props => (props.autoHeight ? 'auto' : '100%')};
`

interface TextareaProps extends StyledTextareaProps {
  value: string
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

const Textarea: React.FC<TextareaProps> = ({ value, onChange, autoHeight, ...rest }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current && autoHeight) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [value, autoHeight])

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event)
    if (textareaRef.current && autoHeight) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }

  return <StyledTextarea ref={textareaRef} value={value} onChange={handleChange} autoHeight={autoHeight} {...rest} />
}

export default Textarea
