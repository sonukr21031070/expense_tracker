// src/services/auth.js

import { BACKEND_URL } from "../utils/api";

export async function signup(userData) {
  const response = await fetch(`${BACKEND_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.message || "Signup failed");
  }

  return data;
}
