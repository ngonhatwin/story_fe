import axios from "axios";
export const GetInfoUser = async (id) => {
  const response = await axios.post(
    "http://localhost:5250/api/user/get-information",
    {
      id,
    }
  );
  if (response.status === 200) {
    console.log(`Message: ${response.data.message}`);
    return response.data.data;
  } else {
    console.log("Something went wrong");
  }
};
