import axios from "axios";
import React,{createContext} from 'react';

export const StationContext = createContext();



class StationProvider {
    register = (title, lat, lng, passengers) => {
        return axios
        .post("http://10.0.2.2:3000/addStation",{
            title , 
            lat ,
            lng ,
            passengers
        })
        .then(res => {
            let stationInfo = res.data
            console.log(stationInfo);
        }).catch(e => {
            console.log('register error',e);
        });
    }

    getStation = (title) => {
        return axios
        .post("http://10.0.2.2:3000/findStation",{
            title
        }).then(res=> {
            let stationInfo = res.data
            return stationInfo
        }).catch(error=>{
            console.log('register error',error)
        })
    }

    deleteStation = (title) => {
        return axios
        .post("http://10.0.2.2:3000/deleteStation",{
            title
        }).then(res=> {
            let stationInfo = res.data
            return stationInfo
        }).catch(error=>{
            console.log('Delete error',error)
        })
    }

    getAllStation = () => {
        return axios
        .get("http://10.0.2.2:3000/Station").then(res=> {
            let stationInfo = res.data
            return stationInfo
        }).catch(error=>{
            console.log('register error',error)
        })
    }

    updateStation = (title,passengers) => {
        return axios
        .post("http://10.0.2.2:3000/updateStation",{
            title,passengers
        }).then(res=> {
            let stationInfo = res.data
            return stationInfo
        }).catch(error=>{
            console.log('register error',error)
        })
    }
}

export default new StationProvider();