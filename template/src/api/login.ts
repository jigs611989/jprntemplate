import ApiHelper from './helper';
import Paths from './constants';

export interface LoginResponse {
  access_token?: string;
  refresh_token?: string;
  userId?: string;
}

const loginAPI = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  return ApiHelper.post<LoginResponse>(Paths.login, {
    email,
    password
  });
};

export default loginAPI;
