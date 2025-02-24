import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get("http://localhost:5000/hotels");
        setHotels(response.data);
      } catch (error) {
        console.error("Error al obtener hoteles", error);
      }
    };
    fetchHotels();
  }, []);

  return (
    <div className="home-container">
      <h2>Lista de Hoteles</h2>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>{hotel.name} - {hotel.location}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
