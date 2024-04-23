import axios, {
  AxiosRequestHeaders,
  GenericAbortSignal,
  Method,
} from 'axios';
import store from '../store/store';
import Logger from '../utils/logger';
import {RootState} from '../store/rootReducer';

/**
 * handle api calls for all methods
 * @param method - HTTP method of the api (required)
 * @param path - path of api call. This will be prepended by baseUrl (required)
 * @param data - payload to be sent with URL (optional)
 * @param additionalHeaders - additional headers in api request (optional)
 * @returns - promise of the api response
 */
const axiosCallApi = async<T>(
  method: Method,
  path: string,
  data?: any,
  additionalHeaders?: any,
  abortSignal?: GenericAbortSignal
): Promise<T> => {
  let headerObj: AxiosRequestHeaders = {
    'Content-Type': 'application/json',
  } as AxiosRequestHeaders;
  headerObj = {
    ...headerObj,
    ...additionalHeaders,
  };
  try {
    const response = await axios.request({
      method,
      url: path,
      data,
      headers: headerObj,
      signal: abortSignal,
    });
    return response.data;
  } catch (err: any) {
    if (abortSignal?.aborted) {
      throw {
        message: 'User cancel request',
        ...err,
      };
    } else {
      throw err
    }
  }
}

/**
 * GET API
 * @param path - path of api call. This will be prepended by baseUrl (required)
 * @param data - payload to be send with URL (optional)
 * @param additionalHeaders - additional headers in api request (optional)
 * @returns - promise of the api response
 */
const get = <T>(
  path: string,
  data?: any,
  additionalHeaders?: any,
  abortSignal?: GenericAbortSignal
): Promise<T> => {
  return axiosCallApi(
    'GET',
    path,
    data,
    additionalHeaders,
    abortSignal
  );
}

/**
 * POST API
 * @param path - path of api call. This will be prepended by baseUrl (required)
 * @param data - payload to be sent with URL (optional)
 * @param additionalHeaders - additional headers in api request (optional)
 * @returns - promise of the api response
 */
const post = <T>(
  path: string,
  data?: any,
  additionalHeaders?: any
): Promise<T> => {
  return axiosCallApi('POST', path, data, additionalHeaders);
}

/**
 * PUT API
 * @param path - path of api call. This will be prepended by baseUrl (required)
 * @param data - payload to be sent with URL (optional)
 * @param additionalHeaders - additional headers in api request (optional)
 * @returns - promise of the api response
 */
const put = <T>(path: string, data?: any, additionalHeaders?: any): Promise<T> => {
  return axiosCallApi('PUT', path, data, additionalHeaders);
}

/**
 * DELETE API
 * @param path - path of api call. This will be prepended by baseUrl (required)
 * @param data - payload to be sent with URL (optional)
 * @param additionalHeaders - additional headers in api request (optional)
 * @returns - promise of the api response
 */
const deleteRequest = <T>(
  path: string,
  data?: any,
  additionalHeaders?: any
): Promise<T> => {
  return axiosCallApi('DELETE', path, data, additionalHeaders);
}

/**
 * convert object of query params to query string
 * @param params - object of the params (required)
 * @returns - query params string url
 */
const convertJsonToQueryParams = (params: any) =>
  Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');

const ApiHelper = {
  get,
  post,
  put,
  deleteRequest,
  convertJsonToQueryParams
}

export default ApiHelper;
