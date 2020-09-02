import React from 'react';
import axios from 'axios';

const Url = "http://litwinow.xyz/";

export default class ApiCalls extends React.Component {

}

async function login(username, password) {
    const res = await axios.post(Url + "login", {}, {
        auth: {
            username: username,
            password: password
        },
        headers: {
            'Accept': 'application/json'
        }
    });
    console.log(res.data);
    return res;
}

export {login};


