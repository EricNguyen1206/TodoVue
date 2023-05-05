import type { AppAction, AppContext } from '../typings';
import type { UserState } from './typings';
declare const _default: {
    /**
     * commit addTodo mutation to update store after 1s
     */
    loginAction({ commit }: AppContext<UserState>, { payload }: AppAction<{
        username: string;
        password: string;
    }>): Promise<void>;
    /**
     * create new account in database and redirect to login on success
     * or-else error notify to register again
     * {string} username
     * {string} password
     */
    registerAction(_: AppContext<UserState>, { payload }: AppAction<{
        username: string;
        password: string;
    }>): Promise<void>;
    /**
     * create new account in database and redirect to login on success
     * or-else error notify to register again
     * {string} username
     * {string} password
     */
    incrementIndexAction(context: AppContext<UserState>): Promise<void>;
};
export default _default;
