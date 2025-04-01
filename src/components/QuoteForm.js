import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/QuoteForm.css';

const QuoteForm = () => {
  const QuoteSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    service: Yup.string().required('Please select a service'),
    message: Yup.string().required('Please provide additional details'),
  });

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl" id="quotation">
      <h2 className="text-2xl font-bold mb-4 text-center">Request a Quote</h2>
      <Formik
        initialValues={{ name: '', email: '', phone: '', service: '', message: '', otherService: '' }}
        validationSchema={QuoteSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            await axios.post('http://localhost:5000/api/request-quote', values);
            toast.success('Quote request submitted successfully!');
            resetForm();
          } catch (error) {
            toast.error('Failed to submit quote request.');
          }
        }}
      >
        {({ values }) => (
          <Form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <Field name="name" className="w-full p-2 border rounded" />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <Field name="email" type="email" className="w-full p-2 border rounded" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium">Phone</label>
              <Field name="phone" className="w-full p-2 border rounded" />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium">Service</label>
              <Field as="select" name="service" className="w-full p-2 border rounded">
              <optgroup label="Select a service">
              </optgroup>

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

              </Field>
              <ErrorMessage name="service" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium">Additional Details</label>
              <Field as="textarea" name="message" className="w-full p-2 border rounded" rows="4" />
              <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700" id="quoteform-button">
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default QuoteForm;
