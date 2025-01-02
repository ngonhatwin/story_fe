import axios from 'axios'
export const GetAStory = async (id) => {
    const response = await axios.post('http://localhost:5250/api/story',{
        id,
    });
    if(response.status === 200)
        {
            console.log(`Message: ${response.data.message}`);
            return response.data.data;
        }
        else {
        console.log('Something went wrong');
    }
}