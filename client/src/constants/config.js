//api notification msg
 

export const API_NOTIFICATION_MESSAGES={
    loading: {
        tittle:'Loading...',
        message:'data is begin loaded ,please wait'
    },
    sucsess:{
        tittle:'success',
        message:'Data successfully loaded'
    },
    responseFailure:{
        tittle:'Error',
        message:'An error occured while fetching rsponse from the server ,please try again'
    },
    requestFailure:{
        tittle:'Error',
        message:'An error occored while paesing request data'
    },
    networkError:{
        tittel:'Error',
        message:'unable to connect with the server. please check internet connectivity and try again later'
    }
 }

 //API SERVICE CALL
// SAMPLE REQUEST
//need service call :{url:'/',method:'post/get/put/delete' params:true/fallse,query:true/false}
 export const SERVICE_URLS={
   userSignup:{url:'/signup',method:'POST'}
 }
 