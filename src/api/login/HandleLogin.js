import axios from "axios"

export const HandleLogin = async (email, password) => {
    const response = await axios.post('http://localhost:5216/api/auth/login', {
        email,
        password,
    });
    if (response) {
        console.log(`Message: ${response.data.data.message}`);
        return response.data; // Return data if successful
    } else {
        console.log(`Message: ${response.data.data.message}`);
    }
}