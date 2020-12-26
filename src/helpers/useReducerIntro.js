export const UseReducerIntro = () => {
  const initialState = [
    {
      id: 1,
      nombre: "comer",
      done: true,
    },
  ];

  const todosReducer = (state = initialState, action) => {
    switch (action?.type) {
      case "agregar":
        return [...state, action.payload];
      default:
        return state;
    }
  };

  let todos = todosReducer();

  console.log(todos);

  const newTarea = {
    id: 2,
    nombre: "limpiar",
    done: false,
  };

  const agregarTodoTarea = {
    type: "agregar",
    payload: newTarea,
  };

  todos = todosReducer(todos, agregarTodoTarea);
  console.log(todos);
};
