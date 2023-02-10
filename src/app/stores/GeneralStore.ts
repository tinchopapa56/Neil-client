import { makeAutoObservable, reaction } from "mobx"
import API_agent from "../api/agent";
import { ServerError } from "../models/Interfaces";


export default class UserStore {
    error: ServerError | null = null;
    token: string | null = localStorage.getItem("token");
    authorized: boolean = false;

    constructor(){ 
        makeAutoObservable(this)
        //reaction(
        //    () => this.token,
        //    token => {
        //        if(token){
        //            localStorage.setItem("token", token)
        //        } else {
        //            localStorage.removeItem("token")
        //        }
        //    }
        //)
     }

    setServerError = (err: ServerError) => {
        this.error = err;
    } 
    setAuthorized = (value: boolean) => {
        this.authorized = value
    }
    setToken  = (token: string | null) => {
        if(token) localStorage.setItem("token", token);
        this.token = token;
    }
}