import React from 'react';
import '../styles/QuoteForm.css';

const QuoteForm = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl" id="quotation">
      <h2 className="text-2xl font-bold mb-4 text-center">Request a Quote</h2>
      <form
        action="https://formspree.io/f/mzzejlgk"
        method="POST"
        className="space-y-4"
      >
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Service</label>
          <select
            name="service"
            required
            className="w-full p-2 border rounded"
          >
            <option value="">Select a service</option>
            <optgroup label="Consultations">
              <option value="Consultation">Consultation</option>
            </optgroup>
            <optgroup label="Solar Installation">
              <option value="Solar Installation">New Solar Installation (Off Grid and Backup)</option>
            </optgroup>
            <optgroup label="Maintenance">
              <option value="Solar System Maintenance">Solar System Maintenance</option>
              <option value="UPS Maintenance">UPS Maintenance</option>
            </optgroup>
            <optgroup label="Wiring and Fault Diagnosis">
              <option value="House Wiring">House Wiring</option>
              <option value="Electrical Fault Diagnosis">Electrical Fault Diagnosis</option>
            </optgroup>
            <optgroup label="Battery Services">
              <option value="Battery Testing and Recharging">Battery Testing and Recharging</option>
            </optgroup>
            <optgroup label="Motor Services">
              <option value="Single Phase Motor Starters">Single & Three Phase Motor Starters</option>
            </optgroup>
            <optgroup label="Cable Management">
              <option value="Tubing and Cable Ways">Tubing and Cable Ways</option>
            </optgroup>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Additional Details</label>
          <textarea
            name="message"
            rows="4"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Optional redirect after submission */}
        {/* <input type="hidden" name="_redirect" value="https://yourdomain.com/thank-you" /> */}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;
