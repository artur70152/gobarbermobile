

export function signinRequest(email,password){

    return {
type:'@auth/SIGN_IN_REQUEST',
payload:{email,password}
    }
}
export function signinSuccess(token,user){
   console.log('actions singinsuccess')
   console.log(token)
   console.log(user)
    return{
type:'@auth/SIGN_IN_SUCCESS',
payload:{token,user}
}

}
export function signUpRequest(name,email,password){
return{

type:'@auth/SIGN_UP_REQUEST',
payload:{name,email,password},

}}
export function signOut(){
    return{
    type:'@auth/SIGN_OUT',
    }}


export function signFailure(){
    return{
        type:'@auth/SIGN_FAILURE',
   
    }
}
