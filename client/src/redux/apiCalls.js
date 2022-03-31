import { publicRequest } from '../requestMethods';
import { logginFailure, logginSuccess, logginStart } from './userRedux';

export const login = async (dispatch, user) => {
  dispatch(logginStart());
  try{
    const res = await publicRequest.post("./auth/login", user);
    dispatch(logginSuccess(res.data));
  } catch(error) {
    dispatch(logginFailure());
  }
};
