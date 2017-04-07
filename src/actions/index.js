export function selectBook(book) {

  // selectBook is an ActionCreator, so it needs to
  // return an action, which has to be an object
  // with a type property.
  // The type describes the purpose of the action, and is mandatory.
  // Actions only sometimes have data payloads, these are optional.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
