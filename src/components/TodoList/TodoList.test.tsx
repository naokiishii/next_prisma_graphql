import { screen, waitFor } from '@testing-library/react'
import { expect, test, vi } from 'vitest'

import { customRender } from '@/libs/test'

import { TodoList } from './TodoList'

test('render loading text correctly', () => {
  customRender(<TodoList />)
  screen.debug(screen.getByText('loading...')) // console.log
  expect(screen.getByText('loading...')).toBeInTheDocument()
})

test('render todoList correctly', async () => {
  customRender(<TodoList />)
  expect(await screen.findByText('Todo List')).toBeInTheDocument()
})

test('add todo item correctly', async () => {
  const { user } = customRender(<TodoList />)
  const textbox = await screen.findByRole('textbox')
  await user.type(textbox, 'testAddTodo')
  await user.click(screen.getByRole('button', { name: 'Add' }))
  expect(await screen.findByText('👀 testAddTodo')).toBeInTheDocument()
})

test('update todo item correctly', async () => {
  const { user } = customRender(<TodoList />)
  await user.click((await screen.findAllByRole('checkbox'))[0])
  await waitFor(
    () => void expect(screen.getAllByRole('checkbox')[0]).toBeChecked()
  )
})

test('delete todo item correctly', async () => {
  const { user } = customRender(<TodoList />)
  const windowConfirmSpy = vi.spyOn(window, 'confirm')
  windowConfirmSpy.mockImplementation(() => true)
  await waitFor(
    () => void expect(screen.getAllByRole('listitem').length).toBe(2)
  )
  await user.click((await screen.findAllByRole('button', { name: '🗑️' }))[0])
  await waitFor(
    () => void expect(screen.getAllByRole('listitem').length).toBe(1)
  )
  windowConfirmSpy.mockRestore()
})
