

import { Repositories } from 'gitlab';
import { Users } from './api/Users';
import Axios, { AxiosInstance } from 'axios';

export default class GitLabAPI {
    private axios: AxiosInstance;

    // endpoints
    private repositories!: Repositories;
    
    private users!: Users;

    public constructor(apiUrl: string, accessToken: string) {
        this.axios = Axios.create({
            baseURL: apiUrl,
            headers: {
                "Authorization": "Bearer " + accessToken,
                "Accept" : "application/json",
                "Content-Type": "application/json"
            }
        })
    }
   
    /**
     * Getting Users API
     * @returns Users API
     */
    public getUsersApi(): Users {
        if(!this.users) {
            this.users = new Users(this.axios);
        }

        return this.users;
    }
}