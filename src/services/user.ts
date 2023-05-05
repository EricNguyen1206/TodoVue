import { doc, setDoc, getDoc } from 'firebase/firestore'

import db from '@/utils/firebase'
import type { User } from '@/declaration'

/**
 *
 * @param {string} username
 * @return {Promise<User>} user account in db
 */
export const getUserData = async (username: string): Promise<User> => {
  try {
    const docRef = doc(db, 'users', username)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return {
        username: docSnap.id,
        password: docSnap.data().password,
        index: docSnap.data().index
      }
    } else {
      throw new Error('401')
    }
  } catch (e: any) {
    throw new Error(e)
  }
}

/**
 * check user if exit then throw conflict data error
 * else add new user document to db
 * @param {string} username
 * @param {string} password
 */
export const postNewUser = async (username: string, password: string) => {
  try {
    const docRef = doc(db, 'users', username)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      throw new Error('409')
    } else {
      await setDoc(doc(db, 'users', username), {
        password,
        index: 0
      })
    }
  } catch (e: any) {
    throw new Error(e)
  }
}

/**
 * check user if exit then update user data
 * else add throw
 * @param {User} user
 */
export const updateUser = async (user: User) => {
  try {
    await setDoc(doc(db, 'users', user.username), {
      password: user.password,
      index: user.index
    })
  } catch (e: any) {
    throw new Error(e)
  }
}
