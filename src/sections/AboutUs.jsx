import React from "react";
import Contact from "../components/Contact";
import MaxWidthContainer from "../components/mmw";
import Search from "../components/Search";

// Array containing doctor data
const doctors = [
  {
    name: "Dr. Ankita Singh",
    specialization: "DERMATOLOGIST",
    image: "img/doctor1.png",
    socialLinks: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    name: "Dr. Aditya Sharma",
    specialization: "ORTHOPEDIST",
    image: "img/doctor2.png",
    socialLinks: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    name: "Dr. Naina Talwar",
    specialization: "GYNECOLOGIST",
    image: "img/doctor3.png",
    socialLinks: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <div className="bg-hero-pattern-dark h-32 flex justify-center items-center">
        <h2 className="text-2xl md:text-6xl font-bold text-other-colour font-serif">
          About Us
        </h2>
      </div>

      {/* About Us Section */}
      <MaxWidthContainer>
        <section className="py-0 md:py-0 px-4 md:px-0 bg-white text-center">
          <div className="grid grid-cols-2 grid-rows-2 items-center justify-center">
            <div className="row-span-2">
              {/* Doctor Image */}
              <img
                src="img/avatar.png"
                alt="Doctor Illustration"
                className="h-full md:h-full z-10"
              />
            </div>
            <div>
              <p className="mt-6 text-base text-left md:text-2xl text-text-colour font-serif max-w-3xl mx-auto">
                MediBridge is a centralized platform that connects clinics with
                patients, streamlining the process of patient management and
                doctor appointments. By bridging the gap between healthcare
                providers and patients, it offers a seamless solution for
                booking appointments, enhancing communication, and improving
                healthcare access.
              </p>
            </div>
          </div>
        </section>

        {/* Doctor Name Cards Section */}
        <section className="py-8 md:py-16 px-4 md:px-8 bg-gray-100 text-center">
          <h3 className="text-2xl md:text-xl font-bold text-text-colour mb-1">
            TRUSTED CARE
          </h3>
          <h2 className="font-serif text-3xl mb-8 text-text-colour">
            Find Clinics Near You
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Mapping through doctors array */}
            {doctors.map((doctor, index) => (
              <div key={index}>
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full mx-auto"
                />
                <div className="bg-other-colour">
                  <h4 className="mt-0 text-lg font-semibold text-text-colour">{doctor.name}</h4>
                  <p className="text-text-colour font-bold">
                    {doctor.specialization}
                  </p>
                  <div className="flex justify-center space-x-4 mt-4">
                    <a
                      href={doctor.socialLinks.linkedin}
                      className="text-blue-600"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href={doctor.socialLinks.facebook}
                      className="text-blue-600"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a
                      href={doctor.socialLinks.instagram}
                      className="text-blue-600"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                  <button className="mt-4 py-2 px-6 w-full bg-main-colour text-white ">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </MaxWidthContainer>
      <Search />
      <Contact />
    </div>
  );
};

export default AboutUs;
