import type { Todo } from '@/declaration'
import type { Model } from '../typings'

export interface TodoState extends Model<Todo[]> {}

export type PayloadTypeAddTodo = {
  name: string
  level: TypeLevel
}
