import type { User } from '@/declaration';
import type { UserState } from './typings';
export declare const initialState: {
    data: {
        username: string;
        password: string;
        index: number;
    };
    fetching: boolean;
    error: boolean;
};
declare const _default: {
    setUser: (state: UserState, payload?: User) => void;
};
export default _default;
