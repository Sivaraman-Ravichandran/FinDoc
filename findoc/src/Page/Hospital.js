import React, { useState } from "react";
import HospitalCard from "../Component/HospitalCard";
import "./Hospital.css";

const hospitalsData = [
  {
    id: 1,
    name: "PSG Hospital",
    address: "123 Main St, Cityville",
    services: ["Emergency", "Cardiology", "Neurology"],
  },
  {
    id: 2,
    name: "KG Hospital",
    address: "456 Elm St, Townsville",
    services: ["Pediatrics", "Orthopedics", "Dermatology"],
  },
  {
    id: 3,
    name: "KMCH Hospital",
    address: "123 Main St, Cityville",
    services: ["Emergency", "Cardiology", "Neurology"],
  },
  {
    id: 4,
    name: "Stanley Hospital",
    address: "456 Elm St, Townsville",
    services: ["Pediatrics", "Orthopedics", "Dermatology"],
  },
  // Add more hospitals as needed
];

const Hospital = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredHospitals = hospitalsData.filter(
    (hospital) =>
      hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hospital.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="hospital-container">
      <h1>Hospitals</h1>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search hospitals..."
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>
      <div className="hospital-cards-container">
        {filteredHospitals.map((hospital) => (
          <HospitalCard key={hospital.id} {...hospital} />
        ))}
      </div>
    </div>
  );
};

export default Hospital;