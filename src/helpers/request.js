import axios from "axios";

const baseURL = "https://fakestoreapi.com/";

// params passing means it works as PUT,DELETE and  POST methods

export default function Request({ URL, method, params }) {
    const headers = {
        "content-type": "application/json"
    }
    return params ?
        axios({ headers, url: `${baseURL}${URL}`, method: method, data: params })
        :
        axios({ headers, url: `${baseURL}${URL}`, method: method, data: {} })

}