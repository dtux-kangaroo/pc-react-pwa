import {homeType} from './constant';
import { message } from 'antd';
import { API } from "@/api/index";

const homeData = (data) => ({
  type: homeType.GET_HOME_DATA,
  payload: data
})
export const getHomeData = (params) => async (dispatch, getState) => {
  try {
      API.getHomeData(params).then(response => {
        if (response.result) {
            dispatch(homeData(response.data));
        } else {
            //返回失败
        }
      });
  } catch (error) {
      console.log('error: ', error)
  }
}
