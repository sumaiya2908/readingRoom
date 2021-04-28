export const memberListReducer = (state = {loading : true, members = []}, action) => {
    switch(action.type){
        case 'MEMBER_LIST_REQUEST':
            return{
                loading: true,
            }
        case 'MEMBER_LIST_SUCCESS':
            return{
                loading: false,
                members: action.payload
            }
        case 'MEMBER_LIST_FAIL':
            return{
                loading: false,
                error: action.payload
            }
    }
}

export const bookListReducer = (state = { books: [] }, action) => {
    switch (action.type) {
      case 'BOOK_LIST_REQUEST':
        return {
          loading: true,
          books: [],
        };
      case 'BOOK_LIST_SUCCESS':
        return {
          loading: false,
          books: action.payload.products,
          selectedPage: action.payload.selectedPage,
          totalPages: action.payload.totalPages,
        };
      case 'BOOK_LIST_FAIL':
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  export const createMemberReducer = (state = {}, action) => {
    switch (action.type) {
      case 'CREATE_MEMBER_REQUEST':
        return {
          loading: true,
        };
      case 'CREATE_MEMBER_REQUEST':
        return {
          loading: false,
          success: true,
          member: action.payload,
        };
      case 'CREATE_MEMBER_REQUEST':
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };

  export const createBookReducer = (state = {}, action) => {
    switch (action.type) {
      case 'CREATE_BOOK_REQUEST':
        return {
          loading: true,
        };
      case 'CREATE_BOOK_REQUEST':
        return {
          loading: false,
          success: true,
          book: action.payload,
        };
      case 'CREATE_BOOK_REQUEST':
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };

export const updateMemberReducer = (state=  {user: {} }, action) => {
    switch(action.type){
        case 'UPDATE_MEMBER_REQUEST':
            return{
                loading: true
            }
        case 'UPDATE_MEMBER_SUCCESS':
            return{
                loading: false,
                success: true
            }
            case 'UPDATE_MEMBER_FAIL':
            return{
                loading: false,
                error: action.payload
            }
        
    }
}

export const updateBookReducer = (state=  {book: {} }, action) => {
    switch(action.type){
        case 'UPDATE_BOOK_REQUEST':
            return{
                loading: true
            }
        case 'UPDATE_BOOK_SUCCESS':
            return{
                loading: false,
                success: true
            }
            case 'UPDATE_BOOK_FAIL':
            return{
                loading: false,
                error: action.payload
            }
        
    }
}

export const deleteMemberReducer  = (state=  { }, action) => {
    switch(action.type){
        case 'DELETE_MEMBER_REQUEST':
            return{
                loading: true
            }
        case 'DELETE_MEMBER_SUCCESS':
            return{
                loading: false,
                success: true
            }
            case 'DELETE_MEMBER_FAIL':
            return{
                loading: false,
                error: action.payload
            }
        
    }
}

export const deleteBookReducer = (state=  {}, action) => {
    switch(action.type){
        case 'DELETE_BOOK_REQUEST':
            return{
                loading: true
            }
        case 'DELETE_BOOK_SUCCESS':
            return{
                loading: false,
                success: true
            }
            case 'DELETE_BOOK_FAIL':
            return{
                loading: false,
                error: action.payload
            }
        
    }
}

export const transactionListReducer = (state = {transactions: []},action) => {
    switch(action.type){
        case 'TRANSACTION_LIST_REQUEST':
            return  {
                loading: true
            }
        case 'TRANSACTION_LIST_SUCCESS':
            return  {
                loading: false,
                transactions: action.payload
                
            }
        case 'TRANSACTION_LIST_FAIL':
            return  {
                loading: false,
                error: action.payload
            }
    }
}