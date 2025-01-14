import axios from "axios"

export const HandleRegister = async (Name, Email, Password) => {
    const response = await axios.post('http://localhost:5250/api/users', {
        Name,
        Email,
        Password,
    });
    if (response) {
        return response.data; // Return data if successful
    } else {
        console.log(`Message: ${response.data}`);
    }
}