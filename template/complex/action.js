
import {smallCamelType} from './constant';
import { message } from 'antd';
import { API } from "@/api/index";
import { browserHistory } from 'react-router';
const smallCamelData = (data) => ({
  type: smallCamelType.GET_TYPE_DATA,
  payload: data
})
export const getbigCamelData = (params) => async (dispatch, getState) => {
  try {
      API.getUserData(params).then(response => {
        if (response.result) {
            dispatch(smallCamelData(response.data));
        } else {
            //返回失败
        }
      });
  } catch (error) {
      console.log('error: ', error)
  }
}
