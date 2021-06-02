import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./styles.scss";

const CropData = () => {
  const [crop, setData] = useState([]);
  const { name } = useParams();

  const getcrop = useRef(() => {});

  getcrop.current = async () => {
    const { data } = await axios.get(
      `https://agriculture-arc.herokuapp.com/crops/${name}`
    );

    setData(data);
    console.log(data);
  };

  useEffect(() => {
    getcrop.current();
  }, []);

  return (
    <div>
      <h1>Showing Information of {name}</h1>
      <table>
        <thead>
          <tr>
            <th>State</th>
            <th>Price</th>
            <th>Duration</th>
            <th>Soil</th>
          </tr>
        </thead>
        <tbody>
          {crop.map((c) => (
            <tr key={c._id}>
              <td>{c.state}</td>
              <td>{c.price}</td>
              <td>{c.duration}</td>
              <td>{c.soil}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CropData;
