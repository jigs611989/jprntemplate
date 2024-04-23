import Paths from './constants';
import ApiHelper from './helper';

export interface SignupResponse {
  status: {
    status: number; // 302,
    msg: string; // "Email Id already exists"
  };
  data: {
    userId: string;
    email: string;
    firstName: string;
    lastName: string;
  };
}

export interface SignupPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneCode: string;
  phoneNumber: string;
}

const registerUser = async (
  payload: SignupPayload
): Promise<SignupResponse> => {
  return ApiHelper.post<SignupResponse>(Paths.register, payload);
};

const Signup = {
  registerUser,
};

export default Signup;
