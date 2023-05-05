import type { User } from '@/declaration';
/**
 *
 * @param {string} username
 * @return {Promise<User>} user account in db
 */
export declare const getUserData: (username: string) => Promise<User>;
/**
 * check user if exit then throw conflict data error
 * else add new user document to db
 * @param {string} username
 * @param {string} password
 */
export declare const postNewUser: (username: string, password: string) => Promise<void>;
/**
 * check user if exit then update user data
 * else add throw
 * @param {User} user
 */
export declare const updateUser: (user: User) => Promise<void>;
