import axios from 'axios';

import { API_NOTIFICATION_MESSAGES,SERVICE_URLS} from '../constants/config';
const API_URLS='http://localhost:8000';


const axiosInstance= axios.create({
    baseURL:API_URLS,
    timeout:10000,
    headers: {
        "content-type": "application/json"
    }
})


axiosInstance.interceptors.request.use(
    function(config){
        return config;
    },
    function(error){
        return Promise.reject(error);
    }
)

axiosInstance.interceptors?.response.use(
    function(response){
        //stop globel loader here
        return processResponse(response);
    },
    function(error){
         //stop global loader here
         return Promise.reject(processError(error));
    }
)

const processResponse=(response)=>{
    if(response?.status == 200){
       //  console.log(response);
        return {isSucess:true,
            data:response.data}
    }else{
        return{
            isFailure:true,
            status:response?.status,
            msg:response?.msg,
            code:response?.code
        }

    }
}
const processError=(error)=>{
    if(error?.response){
        //aapne request ki server response ki per other then 200 code
       console.log('ERROR IN RESPONSE:',error.toJSON());
       return {
        isError:true,
        msg:API_NOTIFICATION_MESSAGES.responseFailure,
        code:error.response.status
       }
    }else if(error.request){
        //request aapne bhaji per not response u get may be aapka front end backend ke sath connect nahi hui ya aur bhi kuch
        console.log('ERROR IN REQUEST:',error.toJSON());
        return {
            isError:true,
            msg:API_NOTIFICATION_MESSAGES.requestFailure,
            code:""
           }
    }else{
        //frontend bhasher
          console.log('ERROR IN NETWORK:',error.toJSON());
        return {
            isError:true,
            msg:API_NOTIFICATION_MESSAGES.networkError,
            code:""
           }
    }
}
//api request ready

const API={};
for(const[key,value] of Object.entries(API_URLS)){
    API[key]=(body,showUploadProgress,showDownloadProgress)=>
    axiosInstance({  
        method:value.method,
        url:value.url,
        data:body,
        responseType:value.responseType,
        onUploadProgress:function (progressEvent){
            if(showUploadProgress){
                let percentageCompleted=Math.round((progressEvent.loaded*100)/progressEvent.total)
                showUploadProgress(percentageCompleted);
            }
        },
        onDownloadProgress:function (progressEvent){
            if(showDownloadProgress){
                let percentageCompleted=Math.round((progressEvent.loaded*100)/progressEvent.total)
                showDownloadProgress(percentageCompleted);
            }
        }

         
    })
}
export {API};


