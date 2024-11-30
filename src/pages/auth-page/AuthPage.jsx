import React, { useState } from "react";
import { Informer } from "@consta/uikit/Informer";
import { useNavigate } from "react-router-dom";
import { saveToken } from "../../services/token";

const AuthPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onFormSubmit = async (evt) => {
    evt.preventDefault();

    // emilys
    // emilyspass

    const fetchUserToken = async (username, password) => {
      const loginResponse = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
          expiresInMins: 60
        })
      });

      if (!loginResponse.ok) {
        throw new Error("Failed to log in");
      }

      return (await loginResponse.json()).accessToken
    }

    try {
      saveToken(await fetchUserToken(username, password))
      navigate("/profile")
    } catch (error) {
      setError(error.message)
      return
    }
  };

  return (
    <form onSubmit={onFormSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
      <div style={{ marginBottom: "16px" }}>
        <label htmlFor="username" style={{ display: "block", marginBottom: "8px" }}>
          Enter your username:
        </label>
        <input
          id="username"
          type="username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
          style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label htmlFor="password" style={{ display: "block", marginBottom: "8px" }}>
          Enter your password:
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
        />
      </div>

      {error && (
        <div style={{ marginBottom: "16px" }}>
          <Informer status="alert" view="filled" title="Error" label={error} />
        </div>
      )}

      <button type="submit" style={{ padding: "8px 16px", cursor: "pointer" }}>
        Submit
      </button>
    </form>
  );
};

export default AuthPage;
