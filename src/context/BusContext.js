import axios from "axios";
import React,{createContext} from 'react';

export const BusContext = createContext();


class BusProvider {
    register = (id, route) => {
        return axios
        .post("http://10.0.2.2:3000/addBus",{
            id , 
            route
        })
        .then(res => {
            let busInfo = res.data
            console.log(busInfo);
        }).catch(e => {
            console.log('register error',e);
        });
    }

    getAllBus = () => {
        return axios
        .get("http://10.0.2.2:3000/bus").then(res=> {
            let busInfo = res.data
            return busInfo
        }).catch(error=>{
            console.log('allBusError',error)
        })
    }
}

export default new BusProvider();