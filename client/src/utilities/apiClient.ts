import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

export default axios.create({
  baseURL,
  headers: {
    "x-auth-token": `${localStorage.getItem("authToken")}`,
    "x-active-story-id": `${localStorage.getItem("activeStoryId")}`,
  },
});
