import api from "../services/axios";
export const fetchToken =  async (email, password) => {
  try {
    const json = JSON.stringify( email, password );
    console.log(json)
    const response = await api.post("/auth/login", json);
    return response.data.token;
  } catch (error) {
    throw new Error("Failed to authenticate" + error);
  }
 
};

export const createUser  = async (username,email,password) => {
  try {
    const json = JSON.stringify( username, email, password );
    console.log(json)
    const response = await api.post("/user/create", json);
    return response.data;
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    throw new Error("Failed to create user");
  }

}
