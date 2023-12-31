import {produce} from 'immer';

const INITIAL_STATE={
token:null,
signed:false,
loading:false,
//profile:null,
//user:null,
}

export default function auth(state=INITIAL_STATE,action){
    return produce(state,draft=>{
switch(action.type){
    case '@auth/SIGN_IN_REQUEST':{
        
        draft.loading=true;
    break;
    }
    case '@auth/SIGN_IN_SUCCESS':{
    
       draft.token=action.payload.token;
       draft.user=action.payload.user;
        draft.signed=true;
        draft.loading=false;
      


//console.tron.log(draft)
        
    break;

    }

    case '@auth/SIGN_OUT':{
        draft.token=null;
        draft.user=null;
        draft.signed=false;
        break;}

    case '@auth/SIGN_FALIURE':{
        
            draft.loading=false;
            break;}
            case '@auth/SIGN_OUTT':{
                draft.token=null;
                draft.user=null;
                draft.signed=false;
                break;}
                

                
              
    
    default:
        break;
}
})
}