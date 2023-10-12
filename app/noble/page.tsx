"use client";
import { Component, useEffect, useState } from "react";

interface NobleProps {
  posts: any; // Question[];
}

const Noble = ({ posts }: NobleProps) => {
  const [data, setData] = useState([]); // Initialize data state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          // "https://api.github.com/users/nobleosinachi"
          "/api/questions"
        );
        const posts = await response.json();
        setData(posts);
      } catch (error) {
        // Handle any errors that may occur during the fetch
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Invoke the fetchData function immediately on component mount
  }, []); // Empty dependency array to run the effect only on mount

  return <h1>{JSON.stringify(data)}</h1>;
};

export default Noble;
