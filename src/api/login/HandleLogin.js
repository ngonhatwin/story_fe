import axios from "axios"
//return.data: export ra là json gốc của trình duyệt
//Muốn return ra data trong be: return.data.data
export const HandleLogin = async (email, password) => {
    const response = await axios.post('http://localhost:5250/api/login', {
        email,
        password,
    });
    if (response) {
        return response.data; 
    } else {
        console.log(`Message: ${response.data}`);
    }
}