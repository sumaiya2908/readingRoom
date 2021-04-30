import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  memberListReducer,
  createMemberReducer,
  deleteMemberReducer,
  updateMemberReducer,
  createBookReducer,
  transactionListReducer,
  deleteBookReducer,
  updateBookReducer,
  bookListReducer,
} from "../src/reducers/adminReducer";
import {
  loginAdminReducer,
  updateAdminReducer,
} from "../src/reducers/loginReducer";

const reducer = combineReducers({
  memberList: memberListReducer,
  bookList: bookListReducer,
  createBook: createBookReducer,
  createMember: createMemberReducer,
  deleteBook: deleteBookReducer,
  updateMember: updateMemberReducer,
  updateBook: updateBookReducer,
  deleteMember: deleteMemberReducer,
  transactionList: transactionListReducer,

  loginAdmin: loginAdminReducer,
});

const adminInfoFromStorage = localStorage.getItem("adminInfo")
  ? JSON.parse(localStorage.getItem("adminInfo"))
  : null;

const initialState = {
  adminLogin: {
    adminInfo: adminInfoFromStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
