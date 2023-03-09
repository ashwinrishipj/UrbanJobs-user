import axios from "axios";

export default async function validateLogin(data) {
    let loginResponse;
    await axios.post('http://localhost:3001/user/login', data).then((response) => {
        loginResponse = response.data;
    }).catch(error => console.log(error));

    return loginResponse;
}

function registerUser() {

}