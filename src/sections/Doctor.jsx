import React from 'react';

const doctors = [
  {
    id: 1,
    name: "Dr. Anita Pandey",
    specialty: "Cardiologist",
    rating: 4.5,
    image: "/img/doc1.jpeg",
  },
  {
    id: 2,
    name: "Dr. Abir Mishra",
    specialty: "Neurologist",
    rating: 4.7,
    image: "/img/doc2.jpeg",
  },

  {
    id: 3,
    name: "Dr. Hamid Ansari",
    specialty: "Dermatologist",
    rating: 4.7,
    image: "/img/doc3.jpeg",
  },

  {
    id: 4,
    name: "Dr. Hoe Chin Min",
    specialty: "Oncologist",
    rating: 4.7,
    image: "/img/doc4.jpeg",
  },
  {
    id: 5,
    name: "Dr. Smita Singh",
    specialty: "Gynecologist",
    rating: 4.7,
    image: "/img/doc5.jpeg",
  },
  {
    id: 6,
    name: "Dr. Jane Smith",
    specialty: "Endocrinologist",
    rating: 4.7,
    image: "/img/doc6.jpeg",
  },
  // Add more doctors as needed
];

const Doctor = () => {
  return (
    <div className="min-h-screen bg-blue-50 py-10">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-700">Doctors & Clinics</h1>
          <p className="mt-2 text-gray-600">Choose the best doctor for you</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img className="w-full h-56 object-cover" src={doctor.image} alt={doctor.name} />
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-gray-800">{doctor.name}</h2>
                <p className="text-gray-600">{doctor.specialty}</p>
                <p className="mt-2 text-yellow-500">
                  {Array.from({ length: 5 }, (_, index) => (
                    <span key={index} className={index < Math.round(doctor.rating) ? 'fas fa-star' : 'far fa-star'} />
                  ))}
                </p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctor;