import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "x-auth-token": `${localStorage.getItem("authToken")}`,
    "x-active-story-id": `${localStorage.getItem("activeStoryId")}`,
  },
});
