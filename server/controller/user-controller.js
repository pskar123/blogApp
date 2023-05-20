
import User from '../model/user.js';

//to save in the backend
export const signupUser=async(request,response)=>{
   try{
     const user=request.body;
      const newUser=new User(user);
     await newUser.save();
     return response.status(200).json({msg:'signup successfull'})
   }catch(error){
      return response.status(500).json({msg:'Error while signup the user'})
   }
} 