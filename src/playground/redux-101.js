import {createStore} from 'redux';

//REDUCERS
//Reducers are pure functions
//Never change state or action

const countReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      }
      case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state;
  }
};

//STORE
const store = createStore(countReducer);

//ACTION FUNCTIONS
const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy: incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy: decrementBy
});

const setCount = ({count}) => ({
  type: 'SET',
  count: count
});

const resetCount = () => ({
  type: 'RESET'
});


//SUB
const sub = store.subscribe(() => {
  console.log(store.getState());
});

//ACTIONS
store.dispatch(incrementCount({incrementBy: 5}));


store.dispatch(resetCount());

// sub();

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 11}));


store.dispatch(setCount({count: 100}));