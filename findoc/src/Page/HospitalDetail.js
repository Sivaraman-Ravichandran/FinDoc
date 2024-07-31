import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DoctorCard from "../Component/DoctorCard";
import "./HospitalDetail.css";
const hospitalsData = [
  {
    id: 1,
    name: "PSG Hospitals",
    about:
      "PSG Hospitals is dedicated to delivering comprehensive healthcare services to patients, prioritizing proficiency, professionalism, and ethical conduct. The hospital ensures effective care and treatment for individuals while striving to maintain affordability. In addition to providing healthcare, PSG Hospitals also fosters medical education and research, emphasizing its commitment to advancing knowledge in the field. The institution is driven by a constant pursuit of quality improvement, recognizing the importance of continuously enhancing its services to better serve the needs of its patients.",
    phone: "+917969126494",
    address: "Peelamedu, Coimbatore",
    services: [
      "Obstetrics Problems",
      "Cardiologist Consultation",
      "Diseases In Pregnancy",
      "Ophthalmic Surgical Consultation",
      "Pediatric ENT Consultation",
    ],
    image: "https://graph.org/file/1cf2a543d67ff270eef04.jpg",
    doctors: [
      {
        name: "Dr. Sharmila",
        specialty: "Cardiologist",
        location: "Coimbatore",
        status: "Online",
        image: "https://graph.org/file/40e4a1407d30d3e51295a.jpg",
      },
      {
        name: "Dr. Pavithran",
        specialty: "Neurologist",
        location: "Madurai",
        status: "Away",
        image: "https://graph.org/file/ebb12e7699b6f4d846d30.jpg",
      },
    ],
    news: "Latest hospital news here.",
    events: "Upcoming hospital events here.",
    contact: "Contact information here.",
  },
  {
    id: 2,
    name: "KG Hospital",
    address: "456 Elm St, Townsville",
    services: ["Pediatrics", "Orthopedics", "Dermatology"],
    image: "https://graph.org/file/7a5580a9567eb5e5d8322.jpg",
    doctors: [
      {
        name: "Dr. Sharmila",
        specialty: "Cardiologist",
        location: "Coimbatore",
        status: "Online",
        image: "/path/to/doctor1.jpg",
      },
      {
        name: "Dr. Pavithran",
        specialty: "Neurologist",
        location: "Madurai",
        status: "Away",
        image: "/path/to/doctor2.jpg",
      },
    ],
    news: "Latest hospital news here.",
    events: "Upcoming hospital events here.",
    contact: "Contact information here.",
  },
  {
    id: 3,
    name: "PSG Hospital",
    address: "123 Main St, Cityville",
    services: ["Emergency", "Cardiology", "Neurology"],
    image: "/path/to/hospital1.jpg",
    doctors: [
      {
        name: "Dr. Sharmila",
        specialty: "Cardiologist",
        location: "Coimbatore",
        status: "Online",
        image: "/path/to/doctor1.jpg",
      },
      {
        name: "Dr. Pavithran",
        specialty: "Neurologist",
        location: "Madurai",
        status: "Away",
        image: "/path/to/doctor2.jpg",
      },
    ],
    news: "Latest hospital news here.",
    events: "Upcoming hospital events here.",
    contact: "Contact information here.",
  },
  {
    id: 4,
    name: "KG Hospital",
    address: "456 Elm St, Townsville",
    services: ["Pediatrics", "Orthopedics", "Dermatology"],
    image: "../assets/kg.jpg",
    doctors: [
      {
        name: "Dr. Sharmila",
        specialty: "Cardiologist",
        location: "Coimbatore",
        status: "Online",
        image: "/path/to/doctor1.jpg",
      },
      {
        name: "Dr. Pavithran",
        specialty: "Neurologist",
        location: "Madurai",
        status: "Away",
        image: "/path/to/doctor2.jpg",
      },
    ],
    news: "Latest hospital news here.",
    events: "Upcoming hospital events here.",
    contact: "Contact information here.",
  },
  {
    id: 5,
    name: "PSG Hospital",
    address: "123 Main St, Cityville",
    services: ["Emergency", "Cardiology", "Neurology"],
    image: "/path/to/hospital1.jpg",
    doctors: [
      {
        name: "Dr. Sharmila",
        specialty: "Cardiologist",
        location: "Coimbatore",
        status: "Online",
        image: "/path/to/doctor1.jpg",
      },
      {
        name: "Dr. Pavithran",
        specialty: "Neurologist",
        location: "Madurai",
        status: "Away",
        image: "/path/to/doctor2.jpg",
      },
    ],
    news: "Latest hospital news here.",
    events: "Upcoming hospital events here.",
    contact: "Contact information here.",
  },
  {
    id: 6,
    name: "KG Hospital",
    address: "456 Elm St, Townsville",
    services: ["Pediatrics", "Orthopedics", "Dermatology"],
    image: "../assets/kg.jpg",
    doctors: [
      {
        name: "Dr. Sharmila",
        specialty: "Cardiologist",
        location: "Coimbatore",
        status: "Online",
        image: "/path/to/doctor1.jpg",
      },
      {
        name: "Dr. Pavithran",
        specialty: "Neurologist",
        location: "Madurai",
        status: "Away",
        image: "/path/to/doctor2.jpg",
      },
    ],
    news: "Latest hospital news here.",
    events: "Upcoming hospital events here.",
    contact: "Contact information here.",
  },
  // Add more hospitals as needed
];

const HospitalDetail = () => {
  const { id } = useParams();
  const hospital = hospitalsData.find(
    (hospital) => hospital.id === parseInt(id)
  );
  const [searchTerm] = useState("");
  if (!hospital) {
    return <div>Hospital not found</div>;
  }

  const filteredDoctors = hospital.doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="hospital-detail-container">
      <div className="hospital-about">
        <img
          src={hospital.image}
          alt={hospital.name}
          className="hospital-image"
        />
        <div className="hospital-name-overlay">
          <p style={{ fontSize: "1.8em" }}>{hospital.name}</p>
          <div className="location">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="currentColor"
              class="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            <p>{hospital.address}</p>
          </div>
        </div>
      </div>
      <div className="phone">
        <h1>{hospital.name}</h1>
        <a class="phone-link" href="tel:+916383262389">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-telephone-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
            />
          </svg>
          <p>+917969126494</p>
        </a>
      </div>
      <div className="about">
        <h1>About</h1>
        <p>{hospital.about}</p>
      </div>
      <div>
        <h1 style={{ textAlign: "center" }}>Doctors</h1>

        <div className="doctor-cards-container">
          {filteredDoctors.map((doctor, index) => (
            <DoctorCard key={index} {...doctor} />
          ))}
        </div>
      </div>
      <div className="services">
        <h2>Services</h2>
        <ul>
          {hospital.services.map((service, index) => (
            <li key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-check-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
              {service}
            </li>
          ))}
        </ul>
      </div>

      <h2>News</h2>
      <p>{hospital.news}</p>
      <h2>Events</h2>
      <p>{hospital.events}</p>
      <h2>Contact Information</h2>
      <p>{hospital.contact}</p>
    </div>
  );
};

export default HospitalDetail;
