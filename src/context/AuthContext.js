import axios from "axios";
import React,{createContext} from 'react';

export const AuthContext = createContext();


class AuthProvider {
    register = (username, password) => {
        return axios
        .post("http://10.0.2.2:3000/addUser",{
            username , 
            password
        })
        .then(res => {
            let userInfo = res.data
            console.log(userInfo);
        }).catch(e => {
            console.log('register error',e);
        });
    }

    login = (username,password) => {
        return axios
        .post("http://10.0.2.2:3000/findUser",{
            username,password
        }).then(res=> {
            let userInfo = res.data
            return userInfo
        }).catch(error=>{
            console.log('register error',error)
        })
    }
}

export default new AuthProvider();