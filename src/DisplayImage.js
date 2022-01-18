import React, { useState } from "react";
import axios from "axios";
import LikeDislike from "./LikeDislike";

import PropagateLoader from "react-spinners/PropagateLoader";

export default function DisplayImage() {
  const [data, setData] = useState({ ready: false });

  function getImage(response) {
    console.log(response.data);
    setData({
      ready: true,
      description: response.data.explanation,
      title: response.data.title,
      image: response.data.hdurl,
      date: response.data.date,
    });
  }

  if (data.ready) {
    return (
      <div className="content">
        <a
          href="https://apod.nasa.gov/apod/image/2201/OrionCross_LucyH_7441.jpg"
          target="_blank"
        >
          {" "}
          <img src={data.image} alt={data.title} className="image" />
        </a>
        <div className="text">
          <div className="displayInLine">
            <h3 className="date">{data.date}</h3>

            <LikeDislike />
          </div>
          <h2 className="title">{data.title}</h2>
          <p className="description">{data.description}</p>
        </div>
      </div>
    );
  } else {
    const apiKey = "G99EwI382vfUipXDiZLbTkdYDsZW9hAKISRgbnbt";
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    axios.get(apiUrl).then(getImage);
    return (
      <div>
        <PropagateLoader size={20} color={"#1576D1"} className="loader" />
      </div>
    );
  }
}
