import axios from "axios";

export const fetcher = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api/",
  headers: {
    "Content-Type": "application/json",
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA4MiIsIkhldEhhblN0cmluZyI6IjMwLzEwLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc2MTc4MjQwMDAwMCIsIm5iZiI6MTczNDMwNzIwMCwiZXhwIjoxNzYxOTU1MjAwfQ.mY5hShSv13byp427-ivl-4vJu3tJh8XOiJt6vkXxJ80",
  },
});

export default fetcher;
