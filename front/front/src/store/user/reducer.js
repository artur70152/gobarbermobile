import {produce} from 'immer';

const INITIAL_STATE={
profile:null,

}

export default function user(state=INITIAL_STATE,action){
   
    return produce(state,draft=>{
    switch(action.type){
    case '@auth/SIGN_IN_SUCCESS':{
        console.log('success')
        draft.profile=action.payload.user;
        console.log('success')
        break;
    } 
    case'@user/UPDATE_PROFILE_SUCCESS':{
        console.log('action do reducer')
        console.log(action)
        draft.profile=action.payload.profile;
        console.log('draft do reducer')
        console.log(draft)
        break;
    }
    case '@auth/SIGN_OUT':{
        draft.profile=null;
        
        break;}
   
}
      })}
