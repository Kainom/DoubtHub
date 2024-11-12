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

export const allQuestions = async (userId) => {
  try {
    const response = await api.get(`/question/all/${userId} `);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch questions" + error);
  }
};

export const getQuestionById = async (questionId) => {
  try {
    const response = await api.get(`/question/single/${questionId}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch question" + error);
  }
}

export const createQuestion = async (question) => {
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
    const response = await api.post("/question/", json);
    return response.status;
  } catch (error) {
    return error;
  }
};

export const updateQuestion = async (question) => {
  // {
  // "questionId": 9,
  // "title": "Thea",
  // "description": "I yes have"
  // }
  try {
    const json = JSON.stringify(question);
    console.log(json);
    const response = await api.put(`/question/`, json);
    return response.data;
  } catch (error) {
    throw new Error("Failed to update question");
  }
};

export const deleteQuestion = async (questionId) => {
  try {
    const response = await api.delete(`/question/${questionId}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete question");
  }
};

export const getAnswers = async (questionId) => {
  try {
    const response = await api.get(`/answers/${questionId}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch answers" + error);
  }
};

export const createAnswer = async (answer) => {
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
    const response = await api.post(`/answers/`, json);
    return response.data;
  } catch (error) {
    throw new Error("Failed to create answer");
  }
};

export const updateAnswer = async (answer) => {
  // {
  //   answerId: 10,
  //   text:"Hello World4",
  // }
  try {
    const json = JSON.stringify(answer);
    console.log(json);
    const response = await api.put(`/answers/`, json);
    return response.data;
  } catch (error) {
    throw new Error("Failed to update answer");
  }
}

export const deleteAnswer = async (answerId) => {
  try {
    const response = await api.delete(`/answers/${answerId}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete answer");
  }
}

export const addTag = async (tag) => {
  // {
  //   tagName:"Pokemon",
  //   questionId: 9
  // }
  try {
    const response = await api.post(`/question/tag`, { tag });
    return response.data;
  } catch (error) {
    throw new Error("Failed to add tag");
  }
};

export const getAllTags = async (userId) => {
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
    const response = await api.get(`/tag/all/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch all questions" + error);
  }
}