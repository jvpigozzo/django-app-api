import React, { useEffect, useState } from "react";
import fetchData from "../services/FetchData";

const Dashboard = () => {
  console.log("Dashboard rendered");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const endpoint = '/user/me/';
        const data = await fetchData(endpoint);
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {userData && (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
