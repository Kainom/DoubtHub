import axios from "axios";



 export default axios.create({
     baseURL: "http://localhost:8000/doubt", 
     headers: {
        'Content-Type': 'application/json',
      },
     // Replace with your API endpoint
})