import axios from 'axios'
export const GetAllChapter = async (id) => {
    const response = await axios.post('http://localhost:5250/api/chapter',{
        id,
    });
    if(response.status === 200)
    {
        return response.data.data;
    }
    else {
    console.log('Something went wrong');
  }
}
