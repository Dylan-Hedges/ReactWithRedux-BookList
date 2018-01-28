//export allows us to make use of this function in other areas of our app
export function selectBook(book){
    return {
      type: 'BOOK_SELECTED',
      payload: book
    };
}