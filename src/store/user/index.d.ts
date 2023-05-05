declare const store: {
    state: {
        data: {
            username: string;
            password: string;
            index: number;
        };
        fetching: boolean;
        error: boolean;
    };
    mutations: {
        setUser: (state: import("./typings").UserState, payload?: import("../../declaration").User | undefined) => void;
    };
    actions: {
        loginAction({ commit }: import("../typings").AppContext<import("./typings").UserState>, { payload }: import("../typings").AppAction<{
            username: string;
            password: string;
        }>): Promise<void>;
        registerAction(_: import("../typings").AppContext<import("./typings").UserState>, { payload }: import("../typings").AppAction<{
            username: string;
            password: string;
        }>): Promise<void>;
        incrementIndexAction(context: import("../typings").AppContext<import("./typings").UserState>): Promise<void>;
    };
    getters: {
        username: (state: import("./typings").UserState) => string;
        password: (state: import("./typings").UserState) => string;
        index: (state: import("./typings").UserState) => number;
    };
};
export default store;
