import axios from "axios"

export const HandleLogin = async (email, password) => {
    const response = await axios.post('http://localhost:5250/api/login', {
        email,
        password,
    });
    if (response) {
        return response.data; // Return data if successful
    } else {
        console.log(`Message: ${response.data}`);
    }
}