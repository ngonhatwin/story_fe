import axios from 'axios'
export const SearchStory = async (Name) => {
    const response = await axios.post('http://localhost:5250/api/story/search',{
        Name,
    });
    if(response.status === 200)
    {
        return response.data.data;
    }
    else {
    console.log('Something went wrong');
  }
}
