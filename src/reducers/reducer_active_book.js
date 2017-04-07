export default function(state = null, action) {

  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }

  return state;
}


// The state argument is not the application state,
// only the state that this reducer is responsible for.

// State is initially set to null because reducers are not
// allowed to return 'undefined' (eg. when app starts)

// state += 1 // basic example of incrementation caused by an action

// avoid doing things like "state.title = book.title"
// instead, always return a fresh object as below

  // in default cases, the state is returned unchanged
