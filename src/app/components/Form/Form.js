import React, { useState, useEffect } from "react";
import { State, City } from "country-state-city";

const states = State.getStatesOfCountry("IN");

const Form = ({ isOpen, onClose }) => {
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [citySearch, setCitySearch] = useState("");

  useEffect(() => {
    if (selectedState) {
      const stateCode = states.find(
        (state) => state.name === selectedState
      )?.isoCode;
      if (stateCode) {
        setCities(
          City.getCitiesOfState("IN", stateCode).map((city) => city.name)
        );
      }
    } else {
      setCities([]);
    }
  }, [selectedState]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button
          className="absolute top-5 right-8 text-gray-600 text-2xl "
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold text-center mb-4">
          BOOK AN APPOINTMENT
        </h2>
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 border rounded"
          />
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-1/2 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Enter your mobile number"
              className="w-1/2 p-2 border rounded"
            />
          </div>
          <select
            className="w-full p-2 border rounded"
            onChange={(e) => setSelectedState(e.target.value)}
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
            placeholder="Search City"
            className="w-full p-2 border rounded"
            value={citySearch}
            onChange={(e) => setCitySearch(e.target.value)}
            list="city-options"
          />
          <datalist id="city-options">
            {cities
              .filter((city) =>
                city.toLowerCase().startsWith(citySearch.toLowerCase())
              )
              .slice(0, 5)
              .map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
          </datalist>
          <select className="w-full p-2 border rounded">
            <option>Are you a</option>
            <option>Home Owner</option>
            <option>Architect</option>
            <option>Builder</option>
            <option>Interior Designer</option>
          </select>
          <select className="w-full p-2 border rounded">
            <option>You are looking for</option>
            <option>New construction</option>
            <option>Renovation</option>
          </select>
          <div className="flex">
            <textarea
              placeholder="Let us know what you need"
              className="w-full h-32 p-2 border rounded resize-none" // Adjust height as needed (e.g., h-32 for 8rem height)
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
