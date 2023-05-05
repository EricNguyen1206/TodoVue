import type { Todo } from '@/declaration'
import db from '@/utils/firebase'
import {
  addDoc,
  collection,
  doc,
  deleteDoc,
  getDocs,
  query,
  setDoc,
  where
} from 'firebase/firestore'

/**
 * get todo list data from firebase
 * @return {Promise<Todo[]>}
 */
export const getAllTodoData = async (username?: string): Promise<Todo[]> => {
  try {
    const q = query(collection(db, 'todos'))
    const snapshot = await getDocs(q)
    let result: any[] = []
    snapshot.forEach((doc) => {
      result.push(doc.data())
    })
    if (username) {
      return result.filter((item) => item.user === username)
    }
    return result
  } catch (e: any) {
    throw new Error(e)
  }
}

/**
 * add document todo into collection todos in firestore
 * @param {Todo} todo
 */
export const postNewTodo = async (todo: Todo) => {
  try {
    const docref = await addDoc(collection(db, 'todos'), todo)
    return docref
  } catch (e: any) {
    throw new Error(e)
  }
}

/**
 * find todo by id and update to firestore
 * @param {Todo} todo
 */
export const putTodo = async (todo: Todo) => {
  console.log('todo', todo)
  try {
    const todosRef = collection(db, 'todos')
    // Create a query against the collection.
    const q = query(todosRef, where('id', '==', todo.id), where('user', '==', todo.user))
    const snapshot = await getDocs(q)
    console.log('snapshot.docs[0]', snapshot.docs[0].data())
    await setDoc(doc(db, 'todos', snapshot.docs[0].id), todo)
  } catch (e: any) {
    throw new Error(e)
  }
}

/**
 * find todo by id and delete document in firestore
 * @param {number} id
 * @param {string} username
 */
export const deleteTodoById = async (id: number, username: string) => {
  try {
    const todosRef = collection(db, 'todos')
    // Create a query against the collection.
    const q = query(todosRef, where('id', '==', id), where('user', '==', username))
    const snapshot = await getDocs(q)
    await deleteDoc(doc(db, 'todos', snapshot.docs[0].id))
  } catch (e: any) {
    throw new Error(e)
  }
}
