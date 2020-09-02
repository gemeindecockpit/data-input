import React from 'react';
import axios from 'axios';

const baseUrl = "http://litwinow.xyz/";

export default class ApiCalls extends React.Component {

    login = (username, password) => {
        return axios.post(baseUrl + "login", {}, {
            auth: {
                username: username,
                password: password
            },
            headers: {
                'Accept': 'application/json'
            }
        });
    }
}


