export const memberList = () => async (dispatch, getState) => {
    try {
      dispatch({ type: 'MEMBER_LIST_REQUEST' });
  
      const {
        userLogin: { memberInfo },
      } = getState();
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${memberInfo.token}`,
        },
      };
  
      const { data } = await axios.get(`/api/members/`, config);
  
      dispatch({
        type:'MEMBER_LIST_SUCCESS',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type:'MEMBER_LIST_REQUEST',
        payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      });
    }
  };
  
  export const memberUpdate = (member) => async (dispatch, getState) => {
    try {
      dispatch({
        type:'UPDATE_MEMBER_REQUEST',
      });
  
      const {
        adminLogin: { adminInfo },
      } = getState();
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${adminInfo.token}`,
        },
      };
  
      const { data } = await axios.put(`/api/member/${member._id}`, member, config);
  
      dispatch({
        type:'UPDATE_MEMBER_SUCCESS',
      });
  
      dispatch({
        type: 'MEMBER_DETAILS_SUCCESS',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: 'UPDATE_MEMBER_FAIL',
        payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      });
    }
  };
  
  export const memberDelete = (id) => async (dispatch, getState) => {
    try {
      dispatch({ type:'DELETE_MEMBER_REQUEST' });
  
      const {
        adminLogin: { adminInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      };
  
      const { data } = await axios.delete(`/api/member/${id}`, config);
  
      dispatch({
        type: 'DELETE_MEMBER_SUCCESS',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type:'DELETE_MEMBER_FAIL',
        payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      });
    }
  };
  
  export const bookUpdate = (book) => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'UPDATE_BOOK_REQUEST',
      });
  
      const {
        adminLogin: { adminInfo },
      } = getState();
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${adminInfo.token}`,
        },
      };
  
      const { data } = await axios.put(`/api/products/${book._id}`, book, config);
  
      dispatch({
        type: 'UPDATE_BOOK_SUCCESS',
      });
  
      dispatch({
        type: 'BOOK_DETAILS_SUCCESS',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: 'UPDATE_BOOK_FAIL',
        payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      });
    }
  };
  
  export const bookDelete = (id) => async (dispatch, getState) => {
    try {
      dispatch({ type: 'DELETE_BOOK_REQUEST' });
  
      const {
        adminLogin: { adminInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      };
  
      const { data } = await axios.delete(`/api/books/${id}`, config);
  
      dispatch({
        type: 'DELETE_BOOK_SUCCESS',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: 'DELETE_BOOK_FAIL',
        payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      });
    }
  };
  
  export const memberCreate = () => async (dispatch, getState) => {
    try {
      dispatch({ type: 'CREATE_MEMBER_REQUEST'});
  
      const {
        adminLogin: { adminInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      };
  
      const { data } = await axios.post(`/api/members/`, {}, config);
  
      dispatch({
        type: 'CREATE_MEMBER_SUCCESS',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: 'CREATE_MEMBER_FAIL',
        payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      });
    }
  };

  export const bookCreate = () => async (dispatch, getState) => {
    try {
      dispatch({ type: 'CREATE_BOOK_REQUEST'});
  
      const {
        adminLogin: { adminInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${adminInfo.token}`,
        },
      };
  
      const { data } = await axios.post(`/api/books/`, {}, config);
  
      dispatch({
        type: 'CREATE_BOOK_SUCCESS',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: 'CREATE_BOOK_FAIL',
        payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      });
    }
  };
  
  export const transactionList = () => async (dispatch, getState) => {
    try {
      dispatch({ type: 'TRANSACTION_LIST_REQUEST' });
  
      const {
        adminLogin: { adminInfo },
      } = getState();
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${memberInfo.token}`,
        },
      };
  
      const { data } = await axios.get(`/api/transaction/`, config);
  
      dispatch({
        type: 'TRANSACTION_LIST_SUCCESS',
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: 'TRANSACTION_LIST_FAIL',
        payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      });
    }
  };