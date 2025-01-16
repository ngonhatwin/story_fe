import axios from "axios";
export const GetStoryByGenre = async (pageNumber, pageSize, id) => {
  const response = await axios.post("http://localhost:5250/api/story/get-all-by-genre",{
    id,
    pageNumber,
    pageSize
  });
  if (response.status === 200) {
    console.log(`Message: ${response.data.message}`);
    return response.data.data;
  } else {
    console.log("Something went wrong");
  }
};
