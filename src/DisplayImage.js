import React, { useState } from "react";
import axios from "axios";

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
      <div>
        <h3>{data.date}</h3>
        <img src={data.image} width="300" alt={data.title} />
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
    );
  } else {
    const apiKey = "G99EwI382vfUipXDiZLbTkdYDsZW9hAKISRgbnbt";
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    axios.get(apiUrl).then(getImage);
    return "loaded";
  }
}
