import React, { useState } from "react";
import axios from "axios";

export default function DisplayImage() {
  const [data, setData] = useState({ ready: false });

  function getImage(response) {
    setData({
      ready: true,
      description: response.data.explanation,
      title: response.data.title,
    });
  }

  if (data.ready) {
    return (
      <div>
        <p>{data.title}</p>
      </div>
    );
  } else {
    const apiKey = "G99EwI382vfUipXDiZLbTkdYDsZW9hAKISRgbnbt";
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2022-01-15&concept_tags=True`;
    axios.get(apiUrl).then(getImage);
    return "loaded";
  }
}
