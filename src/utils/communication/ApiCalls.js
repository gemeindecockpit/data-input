import React from 'react';
import axios from 'axios';

const baseUrl = "http://litwinow.xyz/";

export default class ApiCalls extends React.Component {

    login = (username, password) => {
        return axios.post(baseUrl + "login", {
            name: "admin",
            pass: "password"
        }, {
            headers: {
                'Accept': 'application/json',
            }
        });
    }

    logout = () => {
        return axios.post(baseUrl + "logout", {}, {
            headers: {
                'Accept': 'application/json'
            }
        }).catch(error => {
            console.log(error);
        });
    }

    getConfig = () => {
        return axios.get(baseUrl + "config", {})
            .catch(error => {
                console.log(error);
        });
    }

    getData = () => {
        return axios.get(baseUrl + "data", {})
            .catch(error => {
                console.log(error);
        });
    }
}



