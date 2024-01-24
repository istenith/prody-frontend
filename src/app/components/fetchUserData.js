import axios from "axios";


const fetchUserData = async (setUserData) => {
  try {
    const storedToken = localStorage.getItem('myJwtToken');
    const response = await axios.get('https://api.prody.istenith.com/api/auth/user/', {
      headers: {
        Authorization: `${storedToken}`,
      },
    });
    // console.log("response.data.user",response.data.user)
    // console.log("response.data.user2",response.data.user.registered_events)

    setUserData(response.data.user);
  } catch (error) {
    console.log("error hogya macho: ", error)
    return false
    // console.error(`Error fetching user data: ${error.message}`);
  }
};

export default fetchUserData