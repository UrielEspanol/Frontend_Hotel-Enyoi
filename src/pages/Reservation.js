import React, { useState } from 'react';
import axios from 'axios';

export default function Reservation() {
  const [hotelId, setHotelId] = useState('');
  const [userId, setUserId] = useState('');
  const [date, setDate] = useState('');

  const handleReservation = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      alert("No tienes acceso, por favor inicia sesión.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/reservations",
        { hotelId, userId, date },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Reserva realizada con éxito");
    } catch (error) {
      console.error("Error al hacer la reserva", error);
      alert("Hubo un problema al hacer la reserva");
    }
  };

  return (
    <div>
      <h1>Reservation Page</h1>
      <form onSubmit={handleReservation}>
        <input type="text" placeholder="Hotel ID" onChange={(e) => setHotelId(e.target.value)} />
        <input type="text" placeholder="User ID" onChange={(e) => setUserId(e.target.value)} />
        <input type="date" onChange={(e) => setDate(e.target.value)} />
        <button type="submit">Reservar</button>
      </form>
    </div>
  );
}
