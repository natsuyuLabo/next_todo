import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import EditIcon from './IconButton/EditIcon'
import DeleteIcon from './IconButton/DeleteIcon'
import SendIcon from './IconButton/SendIcon'
import CheckBox from './CheckBox'

type TodoItemProps = {
  id: string
  text: string
  isCompleted: boolean
  onToggle: (id: string) => void
  onChangeText: (id: string, text: string) => void
  handleDeleteTodo: (id: string) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, isCompleted, onToggle, onChangeText, handleDeleteTodo }) => {
  const [editing, setEditing] = useState(false)
  const [editedText, setEditedText] = useState(text)
  const [focusId, setFocusId] = useState<string>('')

  const handleToggleEdit = useCallback(() => {
    if (!isCompleted && !editing) {
      setEditing(true)
    }
  }, [editing, isCompleted])

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(event.target.value)
  }, [])

  const handleSetData = useCallback(() => {
    setEditing(false)
    onChangeText(id, editedText)
  }, [editedText, id, onChangeText])

  const handleDelete = useCallback(() => {
    handleDeleteTodo(id)
  }, [handleDeleteTodo, id])

  const handleInputKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'Enter' && id === focusId) {
        setEditing(false)
        onChangeText(id, editedText)
      }
      if (event.key === 'Escape') {
        setEditing(false)
        setEditedText(text)
      }
    },
    [editedText, focusId, id, onChangeText, text]
  )

  const handleOnFocus = useCallback((event: React.FocusEvent) => {
    setFocusId(event.currentTarget.id)
  }, [])

  return (
    <TodoItemContainer>
      {editing ? (
        <>
          <CheckBox checked={isCompleted} disabled />
          <StyledInput
            type='text'
            id={id}
            value={editedText}
            onChange={handleInputChange}
            onBlur={handleSetData}
            onKeyDown={handleInputKeyDown}
            onFocus={handleOnFocus}
            autoFocus
          />
          <SendIcon onClick={handleSetData} />
          <DeleteIcon disabled />
        </>
      ) : (
        <>
          <CheckBox checked={isCompleted} onChange={() => onToggle(id)} disabled={text === ''} />

          {text ? (
            <TodoText
              style={{ color: `${isCompleted ? '#7a7a7a' : '#222'}` }}
              id={id}
              tabIndex={1}
              onFocus={handleOnFocus}>
              {text}
            </TodoText>
          ) : (
            <EmptyBox />
          )}
          {!isCompleted && !editing && <EditIcon color='#A66C6C' onClick={handleToggleEdit} />}
          <DeleteIcon onClick={handleDelete} />
        </>
      )}
    </TodoItemContainer>
  )
}

export default TodoItem

const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px;
  transition: background-color 0.4s;
  min-height: 73px;
`

const EmptyBox = styled.div`
  flex: 1;
  height: 57px;
  margin-left: 8px;
  margin-right: 8px;
`

const TodoText = styled.p`
  flex: 1;
  display: inline-block;
  height: auto;
  padding: 16px 14px;
  margin-left: 8px;
  margin-right: 8px;
  line-height: 23px;
  transition: opacity 0.1s;
  border-bottom: 2px solid #eceae6;
  &:hover {
    background-color: rgba(166, 108, 108, 0.2);
  }
  &:focus {
    border-bottom: none;
    outline: 1px solid #a66c6c;
  }
`

const StyledInput = styled.input`
  flex: 1;
  display: inline-block;
  height: auto;
  margin-left: 8px;
  padding: 16px 14px;
  line-height: 23px;
  border-bottom: 2px solid #a66c6c;
  background-color: #a66c6c33;
`
