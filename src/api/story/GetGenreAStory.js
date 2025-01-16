import axios from 'axios'
export const GetGenreAStory = async (id) => {
    const response = await axios.post('http://localhost:5250/api/genre',{
        id
    });
    if(response.status === 200)
    {
        return response.data.data;
    }
    else {
    console.log('Something went wrong');
  }
}

