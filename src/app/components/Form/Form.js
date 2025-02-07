import { useState, useEffect } from "react";
import { State, City } from "country-state-city";
import Logo from "../../assets/Logo/blackLogo.png";
import Image from "next/image";

const states = State.getStatesOfCountry("IN");

const Form = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    state: "",
    city: "",
    userType: "",
    lookingFor: "",
    message: "",
  });

  const [cities, setCities] = useState([]);
  const [citySearch, setCitySearch] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // New state

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling when the form is open
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling when the form is closed
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on component unmount
    };
  }, [isOpen]);

  useEffect(() => {
    if (formData.state) {
      const stateCode = states.find(
        (state) => state.name === formData.state
      )?.isoCode;
      if (stateCode) {
        setCities(
          City.getCitiesOfState("IN", stateCode).map((city) => city.name)
        );
      }
    } else {
      setCities([]);
    }
  }, [formData.state]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setIsSubmitted(true); // Show success message
      } else {
        alert(result.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button
          className="absolute top-2 right-4 text-gray-600 text-3xl"
          onClick={onClose}
        >
          &times;
        </button>

        {isSubmitted ? (
          <div className="flex flex-col justify-center items-center">
            <Image src={Logo} className="w-36 " alt="Logo" loading="lazy" />
            <h2 className="text-xl font-semibold text-center text-black-600  p-10">
              Thank you, your form is submitted!
            </h2>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-semibold text-center mb-4">
              BOOK AN APPOINTMENT
            </h2>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full p-2 border rounded"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <div className="flex space-x-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-1/2 p-2 border rounded"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Phone"
                  className="w-1/2 p-2 border rounded"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <select
                name="state"
                className="w-full p-2 border rounded"
                onChange={handleChange}
                value={formData.state}
                required
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state.isoCode} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="city"
                placeholder="Search City"
                className="w-full p-2 border rounded"
                value={citySearch}
                onChange={(e) => {
                  setCitySearch(e.target.value);
                  setFormData({ ...formData, city: e.target.value });
                }}
                list="city-options"
                required
              />
              <datalist id="city-options">
                {cities
                  .filter((city) =>
                    city.toLowerCase().startsWith(citySearch.toLowerCase())
                  )
                  .slice(0, 10)
                  .map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
              </datalist>
              <select
                name="userType"
                className="w-full p-2 border rounded"
                onChange={handleChange}
                value={formData.userType}
                required
              >
                <option value="">Are you a</option>
                <option>Home Owner</option>
                <option>Architect</option>
                <option>Builder</option>
                <option>Interior Designer</option>
              </select>
              <select
                name="lookingFor"
                className="w-full p-2 border rounded"
                onChange={handleChange}
                value={formData.lookingFor}
                required
              >
                <option value="">You are looking for</option>
                <option>New construction</option>
                <option>Renovation</option>
              </select>
              <textarea
                name="message"
                placeholder="Let us know what you need"
                className="w-full h-32 p-2 border rounded resize-none"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="w-full bg-black text-white p-2 rounded"
              >
                SUBMIT
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Form;
