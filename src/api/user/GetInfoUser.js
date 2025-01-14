import axios from "axios";
export const GetInfoUser = async (UserId) => {
  const response = await axios.post(
    "http://localhost:5250/api/users/get-information",
    {
      UserId,
    }
  );
  if (response.status === 200) {
    console.log(`Message: ${response.data.message}`);
    return response.data;
  } else {
    console.log("Something went wrong");
  }
};
