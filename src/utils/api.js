/* eslint-disable no-unused-vars */
import api from "../services/axios";
export const fetchToken = async (email, password) => {
  try {
    const json = JSON.stringify(email, password);
    console.log(json);
    const response = await api.post("/auth/login", json);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error("Failed to authenticate" + error);
  }
};

export const getUser = async (userId, token) => {
  try {
    const response = await api.get(`/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to get user: " + error);
  }
};

export const updateUser = async (userId, token, updatedData) => {
  try {
    const response = await api.put(`/user/${userId}`, updatedData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to update user: " + error.message);
  }
};

export const createUser = async (username, email, password) => {
  try {
    const json = JSON.stringify(username, email, password);
    console.log(json);
    const response = await api.post("/user/create", json);
    return response.data;
  } catch (error) {
    throw new Error("Failed to create user");
  }
};

export const allQuestions = async (userId,token) => {
  try {
    const response = await api.get(`/question/all/${userId} `, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch questions" + error);
  }
};

export const getQuestionById = async (questionId, token) => {
  try {
    const response = await api.get(`/question/single/${questionId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch question" + error);
  }
};

export const createQuestion = async (question,token) => {
  // const {user} = useSelector(state => state.auth.token);
  //   {
  //     "answered": false,
  //    "title": "The king",
  //    "description": "Chanell your inner witch",
  //    "user": {
  //      "userId": 1
  //    }
  //     "tags": ["dsjk","cjskl"] // opcional
  //  }

  try {
    const json = JSON.stringify(question);
    console.log(json);
    const response = await api.post("/question/", json, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.status;
  } catch (error) {
    return error;
  }
};

export const updateQuestion = async (question,token) => {
  // {
  // "questionId": 9,
  // "title": "Thea",
  // "description": "I yes have"
  // }
  try {
    const json = JSON.stringify(question);
    console.log(json);
    const response = await api.put(`/question/`, json, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteQuestion = async (questionId,token) => {
  try {
    const response = await api.delete(`/question/${questionId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete question");
  }
};

export const getAnswers = async (questionId,token) => {
  try {
    const response = await api.get(`/answers/${questionId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch answers" + error);
  }
};

export const createAnswer = async (answer,token) => {
  // {
  //   text:"Hello World3",
  //   question:{
  //     questionId:11
  //   },
  //      user: {
  //      userId: 1
  //    }
  //  }
  try {
    const json = JSON.stringify(answer);
    console.log(json);
    const response = await api.post(`/answers/`, json, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to create answer");
  }
};

export const updateAnswer = async (answer,token) => {
  // {
  //   answerId: 10,
  //   text:"Hello World4",
  // }
  try {
    const json = JSON.stringify(answer);
    console.log(json);
    const response = await api.put(`/answers/`, json, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to update answer");
  }
};

export const deleteAnswer = async (answerId,token) => {
  try {
    const response = await api.delete(`/answers/${answerId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete answer");
  }
};

export const addTag = async (tag,token) => {
  // {
  //   tagName:"Pokemon",
  //   questionId: 9
  // }
  try {
    const response = await api.put(`/question/tag`, tag, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to add tag");
  }
};

export const getAllTags = async (userId, token) => {
  // {
  //   "answered": false,
  //     "title": "The king",
  //       "description": "Chanell your inner witch",
  //         "tags": [
  //           {
  //             "tagName": "Ork",
  //             "id": 13
  //           }
  //         ],
  //           "user": {
  //     "userId": 2
  //   }
  // }
  try {
    const response = await api.get(`/tag/all/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch all questions" + error);
  }
};

export const createTag = async (userId, tagName,token) => {
  // {
  //   tagName:"React",
  //   userId: 1
  // }
  try {
    const send = {
      tagName: tagName,
      user: {
        userId: userId,
      },
    };
    const json = JSON.stringify(send);
    console.log(json);
    const response = await api.post(`/tag/`, json, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to create tag");
  }
};
