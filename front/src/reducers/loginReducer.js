export const loginAdminReducer = (state = {}, action) => {
    switch (action.type) {
      case 'ADMIN_LOGIN_REQUEST':
        return {
          loading: true,
        };
      case 'ADMIN_LOGIN_SUCCESS':
        return {
          loading: false,
          userInfo: action.payload,
        };
      case 'ADMIN_LOGIN_FAIL':
        return {
          loading: false,
          error: action.payload,
        };
      case 'ADMIN_LOGOUT':
        return {};
      default:
        return state;
    }
  };

export  const updateAdminReducer = (state = {}, action) => {
    switch (action.type) {
      case 'ADMIN_UPDATE_REQUEST':
        return {
          loading: true,
        };
      case 'ADMIN_UPDATE_SUCCESS':
        return {
          loading: false,
          success: true,
          userInfo: action.payload,
        };
      case 'ADMIN_UPDATE_FAIL':
        return {
          loading: false,
          error: action.payload,
        };
      case 'ADMIN_UPDATE_RESET':
        return {};
      default:
        return state;
    }
  };