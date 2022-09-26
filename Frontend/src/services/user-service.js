import { myAxios } from "./helper";

export const signUp = (user) => {
  return myAxios
    .post("/register",user)
    .then((response) => response.data);
};

export const loginUser=(loginDetail)=>{
  return myAxios.post('/login',loginDetail).then((response)=>response.data)
}