import React, { useState, useEffect } from "react";
import { Card } from "@consta/uikit/Card";
import { Text } from "@consta/uikit/Text";
import { Button } from "@consta/uikit/Button";
import { getToken, dropToken } from "../../services/token";
import { Navigate, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = getToken();

    if (!userToken) {
      navigate("/login");
      return;
    }

    const fetchUserInfo = async () => {
      try {
        const response = await fetch("https://dummyjson.com/auth/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user info");
        }

        const userInfo = await response.json();
        setUser(userInfo);
      } catch (err) {
        setError(err.message || "An error occurred while fetching user info");
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [navigate]);

  const handleLogout = () => {
    dropToken();
    navigate("/");
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return (
      <Card verticalSpace="xl" horizontalSpace="xl" style={{ maxWidth: "600px", margin: "0 auto" }}>
        <Text size="xl" weight="bold" style={{ color: "red" }}>
          {error}
        </Text>
        <Button label="Back to Login" onClick={() => navigate("/auth")} />
      </Card>
    );
  }

  return (
    <Card verticalSpace="xl" horizontalSpace="xl" style={{ maxWidth: "600px", margin: "0 auto" }}>
      <div style={{ textAlign: "center" }}>
        {user?.image && (
          <img
            src={user.image}
            alt="User Profile"
            style={{ width: "150px", height: "150px", borderRadius: "50%", marginBottom: "16px" }}
          />
        )}
        <Text size="xl" weight="bold">
          {user?.firstName} {user?.lastName}
        </Text>
        <Text view="secondary">{user?.email}</Text>
        <Text view="secondary" style={{ marginTop: "8px" }}>
          Username: {user?.username}
        </Text>
        <Text view="secondary">Phone: {user?.phone}</Text>
        <Text view="secondary">Age: {user?.age}</Text>
        <Button
          label="Logout"
          onClick={handleLogout}
          style={{ marginTop: "16px", cursor: "pointer" }}
        />
      </div>
    </Card>
  );
};

export default ProfilePage;
