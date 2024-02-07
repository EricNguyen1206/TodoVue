import { TypeLevel } from '@/modules/core/typings'

export interface Todo {
  id: number
  status: boolean
  user: string
  name: string
  level: TypeLevel
}
