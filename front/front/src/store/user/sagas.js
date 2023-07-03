import { takeLatest, call, put, all } from 'redux-saga/effects'
import api from '../../services/api';

import { Updateprofilesuccess } from './actions';

export function* UpdateProfile( payload ){
console.log('aaa')
const {name,email, ...rest}=payload.data;

const profile = {
    name,
    email,
    ...(rest.oldPassword ? rest : {}),
  };


console.log(payload)



const response= yield call(api.put, 'users', profile)
console.log('aaa')

yield put(Updateprofilesuccess(response.data)) 
console.log('aaa')
}
 
export default all([
//takeLatest('@user/UPDATE_PROFILE_REQUEST',UpdateProfile)


])