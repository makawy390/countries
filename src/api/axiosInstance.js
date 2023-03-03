
import axios from "axios";
import store from "../stores/store/store";
import actionLoader from "../stores/action/actionLoader";

 const axiosInstance = axios.create({
    baseURL : "https://restcountries.com/v2"
});

// interceptors 
axiosInstance.interceptors.request.use((req)=>{
    store.dispatch(actionLoader(true))
return req
},(err)=> Promise.reject(err))

axiosInstance.interceptors.response.use((res)=>{
    store.dispatch(actionLoader(false))
    return res;
},(err)=> Promise.reject(err))
export default axiosInstance;