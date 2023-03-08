import axios from "axios";

async function validateLogin(data) {
    await axios.post('http://localhost:3001/user/login', data).then((response) => {
        if (response.status === 200) return true;
        else return false;
    }).catch(error => console.log(error));
}

function registerUser() {

}

export default function FetchData(type, data) {

    switch (type) {
        case 'login':
            return validateLogin(data);

        case 'register':
            return registerUser(data);

        default:
            break;
    }
}