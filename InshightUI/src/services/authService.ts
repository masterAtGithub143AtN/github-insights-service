// services/authService.ts

export async function loginRequest(email: string, password: string) {
  const response = await fetch("https://api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }
  return data;
}


// services/authService.ts

export async function signupRequest(
  name: string,
  email: string,
  password: string
) {
  const response = await fetch("https://api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Signup failed");
  }

  return data;
}