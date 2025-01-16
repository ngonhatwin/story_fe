import axios from 'axios'
export const GetAllGenre = async () => {
    const response = await axios.get('http://localhost:5250/api/genre');
    if(response.status === 200)
        {
            return response.data.data;
        }
        else {
        console.log('Something went wrong');
    }
}