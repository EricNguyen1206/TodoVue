/// <reference types="vite/client" />
declare module '*.vue'

import { ENUM_LEVEL, ENUM_SORT } from './constant'

export type TypeLevel = `${ENUM_LEVEL}`
export type TypeSort = `${ENUM_SORT}`

export interface Todo {
  id: number
  status: boolean
  user: string
  name: string
  level: TypeLevel
}

export interface User {
  username: string
  password: string
  index: number
}

export interface Option {
  label: string
  value: string
}
