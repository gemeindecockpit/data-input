import React from 'react';
import axios from 'axios';

const baseUrl = "https://www.litwinow.xyz/";
//const baseUrl = "http://localhost:8080/";

export default class ApiCalls extends React.Component {
    testApiCall = axios.create(
        {
            method: 'post',
            baseURL: baseUrl,
            data: {
                "name":"admin",
                "pass":"password"
            },
            headers: {
                "Content-Type": "multipart/form-data"
            },
            withCredentials: true
        }
    );

    newlogin = () => {
        var formData = new FormData();
        formData.append("name", "admin");
        formData.append("pass", "password");
        this.testApiCall.request(
            formData
                );
    }
    login = (username, password) => {
        console.log(this.testApiCall);
        var formData = new FormData();
        formData.append("name", username);
        formData.append("pass", password);
        return axios.post(baseUrl + "login", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            withCredentials: true
        });
    }

    logout = () => {
        return axios.post((baseUrl + "logout"), null, {
            withCredentials: true
        });
    }

    postKpisByOrgId = (orgId, jsonValues) => {
        return axios.post(baseUrl + "data/organisation/" + orgId, jsonValues, {
            headers: {
                "Content-Type": "text/plain"
            },
            withCredentials: true
        });
    }

    getConfig = () => {
        return axios.get(baseUrl + "config", {
            withCredentials: true
        });
    }

    getOrganisations = () => {
        return axios.get(baseUrl + "config/organisation", {
            withCredentials: true
        });
    }

    getOrganisationById = (id) => {
        return axios.get(baseUrl + "config/organisation/" + id, {
            withCredentials : true
        });
    }

    getOrgValuesByIdAndDate = (id, year, month, day) => {
        return axios.get(baseUrl + "data/organisation/"
            + id + "/"
            + year + "/"
            + month + "/"
            + day, {
            withCredentials: true
        });
    }

    getData = () => {
        return axios.get(baseUrl + "data", {})
            .catch(error => {
                console.log(error);
        });
    }
}



