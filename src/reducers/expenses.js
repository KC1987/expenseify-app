const expensesReducerDefaultState = [];
export default (state = expensesReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    default:
      return state;
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => {
        return action.id !== id;
      });
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...state,
            ...action.updates
          };
        } else {
          return expense;
        };
      });
  };
};