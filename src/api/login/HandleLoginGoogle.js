import axios from "axios";
export const HandleGoogleLogin = async (idToken) => {
    const response = await axios.post('http://localhost:5216/api/auth/login/google-login',
        { idToken },
        {
            headers: {
                'Content-Type': 'application/json', 
            },
        }
    );
    if (response) {
        return response
    } else {
        console.log(`Message: ${response.data.data.message}`);
    }
}