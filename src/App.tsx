import React, { useEffect, useState, useCallback } from 'react'
import TodoList from './components/TodoList'
import logo from './assets/logo.png'
import { Box, Text } from '@kuma-ui/core'
import { SwitchTreeComponents } from './components/TreeIcon/index'

export type Todo = {
  id: string
  text: string
  isCompleted: boolean
}

type TodosState = Todo[]

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodosState>(() => {
    const storedData = localStorage.getItem('todos')
    return storedData
      ? JSON.parse(storedData)
      : [
          { id: '1', text: 'Shift + N: 新しいリストの追加 ', isCompleted: false },
          { id: '2', text: 'command + delete: 最新のリストを削除します', isCompleted: false },
          { id: '3', text: '(編集中)esc: 入力キャンセル', isCompleted: false },
          { id: '4', text: '(編集中)command + Enter: 入力保存', isCompleted: false }
        ]
  })

  const [treeCount, setTreeCount] = useState<number[]>(() => {
    const treeCountData = localStorage.getItem('treeCount')
    return treeCountData ? JSON.parse(treeCountData) : []
  })

  const createAddTreeNumber = useCallback(() => {
    const addNumber = Math.floor(Math.random() * 9) + 1

    if (treeCount.length > 0) {
      const lastNumber = treeCount[treeCount.length - 1]
      if (addNumber === lastNumber) {
        return
      }
    }

    setTreeCount(prevTreeCount => [...prevTreeCount, addNumber])
  }, [treeCount])

  const handleResetTreeCount = useCallback(() => {
    setTreeCount([])
  }, [])

  const handleToggle = useCallback(
    (id: string) => {
      const newData = todos.map(v => {
        if (id === v.id) {
          if (!v.isCompleted) {
            createAddTreeNumber()
          }
          return { id: v.id, text: v.text, isCompleted: !v.isCompleted }
        }
        return v
      })
      setTodos(newData)
    },
    [todos, createAddTreeNumber]
  )
  const handleSetData = useCallback((v: TodosState) => {
    setTodos(v)
  }, [])

  const handleUpdateTodoText = useCallback((id: string, newText: string) => {
    if (newText.trim() !== '') {
      setTodos(prevTodos => prevTodos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo)))
    }
  }, [])

  const handleDeleteTodo = useCallback((id: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }, [])

  const handleAddNewList = useCallback(() => {
    const newListTodo: Todo = {
      id: Math.random().toString(),
      text: '',
      isCompleted: false
    }
    handleSetData([...todos, newListTodo])
  }, [handleSetData, todos])

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.shiftKey && event.key === 'N') {
        handleAddNewList()
      }
      if (event.metaKey && event.key === 'Backspace') {
        if (todos.length > 0) {
          const updatedTodos = [...todos]
          updatedTodos.pop()
          handleSetData(updatedTodos)
        }
      }
    },
    [handleAddNewList, handleSetData, todos]
  )
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown, todos])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    localStorage.setItem('treeCount', JSON.stringify(treeCount))
  }, [todos, treeCount])

  return (
    <Box bg={'#ECEAE6'} width='100%' height='100vh' overflow='scroll'>
      <Box textAlign={'center'}>
        <h1>
          <img src={logo} alt='logo' width='188' height='60' onClick={handleResetTreeCount} />
        </h1>
      </Box>
      <TodoList
        todos={todos}
        onToggle={handleToggle}
        handleSetData={handleSetData}
        handleUpdateTodoText={handleUpdateTodoText}
        handleDeleteTodo={handleDeleteTodo}
        handleAddNewList={handleAddNewList}
        createAddTreeNumber={createAddTreeNumber}
      />
      <Box display={'flex'} flexWrap={'wrap-reverse'} alignContent={'flex-end'}>
        {treeCount.map((n, i) => (
          <SwitchTreeComponents key={i} numbering={n} />
        ))}
      </Box>
      {treeCount.length > 0 && <Box bgColor={'#593D23'} width={'100%'} height={5} mt={'-5px'} />}
      <Box width={'100%'}>
        <Text as='p' fontWeight={200} color='#593D23' textAlign={'end'} fontSize={12}>
          © 2023 Yu Fujitsuna
        </Text>
      </Box>
    </Box>
  )
}

export default App
