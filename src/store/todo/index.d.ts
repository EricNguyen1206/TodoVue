declare const store: {
    state: {
        data: never[];
        fetching: boolean;
        error: boolean;
    };
    mutations: {
        setTodoList: (state: import("./typings").TodoState, payload: import("../../declaration").Todo[]) => void;
        addTodo: (state: import("./typings").TodoState, payload: import("../../declaration").Todo) => void;
        toggleTodoCompletion: (state: import("./typings").TodoState, id: number) => void;
        updateTodoById: (state: import("./typings").TodoState, payload: import("../../declaration").Todo) => void;
        deleteTodoById: (state: import("./typings").TodoState, id: number) => void;
    };
    actions: {
        readTodoDataAction(context: import("../typings").AppContext<import("./typings").TodoState>): Promise<void>;
        createTodoAction(context: import("../typings").AppContext<import("./typings").TodoState>, { payload }: import("../typings").AppAction<import("./typings").PayloadTypeAddTodo>): Promise<void>;
        updateTodoAction({ commit }: any, { payload }: import("../typings").AppAction<import("../../declaration").Todo>): void;
        deleteTodoAction(context: import("../typings").AppContext<import("./typings").TodoState>, { payload }: import("../typings").AppAction<number>): void;
    };
    getters: {
        completedTodos: (state: import("./typings").TodoState) => import("../../declaration").Todo[];
        incompleteTodos: (state: import("./typings").TodoState) => import("../../declaration").Todo[];
        todoById: (state: import("./typings").TodoState) => (id: number) => import("../../declaration").Todo | undefined;
    };
};
export default store;
