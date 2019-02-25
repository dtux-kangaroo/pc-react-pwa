import {registerType} from './constant';
import { message } from 'antd';
import { API } from "@/api/index";

const registerData = (data) => ({
  type: registerType.GET_REGISTER_DATA,
  payload: data
})
export const submitRegisterData = (params) => async (dispatch, getState) => {
  try {
      API.getHomeData(params).then(response => {
        if (response.result) {
            dispatch(registerData(response.data));
        } else {
            //返回失败
        }
      });
  } catch (error) {
      console.log('error: ', error)
  }
}

