export function Updateprofilerequest(data){
    console.log('actions')
    console.log(data)

    return{
type:'@user/UPDATE_PROFILE_REQUEST',
payload:{data},

}

}

export function Updateprofilesuccess(profile){
   console.log('profile das actions')
   console.log(profile)
    return{
type:'@user/UPDATE_PROFILE_SUCCESS',
payload:{profile},
}
}

export function Updateprofilefaliure(){
   
    return{
type:'@user/UPDATE_PROFILE_FALIURE',
}
}

