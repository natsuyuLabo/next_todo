import React, { useCallback, useState, useEffect } from 'react'
import TodoItem from './TodoItem'
import AddIcon from './IconButton/AddIcon'

import type { Todo } from '../App'
import { HStack, k, Box } from '@kuma-ui/core'
import CheckBox from './CheckBox'

type TodoListProps = {
  todos: Todo[]
  onToggle: (id: string) => void
  handleSetData: (v: Todo[]) => void
  handleUpdateTodoText: (id: string, newText: string) => void
  handleDeleteTodo: (id: string) => void
  handleAddNewList: () => void
  createAddTreeNumber: () => void
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggle,
  handleSetData,
  handleUpdateTodoText,
  handleDeleteTodo,
  handleAddNewList,
  createAddTreeNumber
}) => {
  const [isAllCheck, setIsAllCheck] = useState(() => {
    const allCheckData = localStorage.getItem('isAllChecked')
    return allCheckData ? JSON.parse(allCheckData) : false
  })

  const handleToggleAllDone = useCallback(() => {
    const emptyTextExists = todos.some(todo => todo.text === '')
    const res = confirm(`本当にすべて✔チェック${isAllCheck ? 'を解除' : ''}しますか？`)
    if (res) {
      if (emptyTextExists) {
        const updatedTodos = todos.map(todo => {
          if (todo.text === '') {
            return todo
          }
          !isAllCheck && createAddTreeNumber()
          return { ...todo, isCompleted: !isAllCheck }
        })
        handleSetData(updatedTodos)
      } else {
        const updatedTodos = todos.map(todo => {
          !isAllCheck && createAddTreeNumber()
          return { ...todo, isCompleted: !isAllCheck }
        })
        handleSetData(updatedTodos)
      }
      setIsAllCheck(!isAllCheck)
    }
  }, [createAddTreeNumber, handleSetData, isAllCheck, todos])

  useEffect(() => {
    localStorage.setItem('isAllChecked', JSON.stringify(isAllCheck))
  }, [isAllCheck])

  return (
    <Box maxWidth={768} m={'0 auto'} p={16} height='auto' width={'100%'}>
      <HStack justify={'space-between'} width={'100%'} px={8}>
        <k.label display={'flex'} alignItems={'center'} gap={16} htmlFor='all_done' color={'#222'}>
          <CheckBox onChange={handleToggleAllDone} checked={isAllCheck} id='all_done' />
          All Done
        </k.label>
        <AddIcon size='36px' color='#A66C6C' onClick={handleAddNewList} />
      </HStack>
      <Box overflow={'auto'}>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isCompleted={todo.isCompleted}
            onToggle={onToggle}
            onChangeText={handleUpdateTodoText}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </Box>
    </Box>
  )
}

export default TodoList
