import axios from "axios";
export const getAllStories = async () => {
  const response = await axios.get("http://localhost:5250/api/story");
  if (response.status === 200) {
    return response.data.data;
  } else {
    console.log("Something went wrong");
  }
};
