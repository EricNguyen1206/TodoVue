import { Model } from '@/modules/core/typings'
import { Todo } from '../entities'

export interface TodoState extends Model<Todo[]> {}
