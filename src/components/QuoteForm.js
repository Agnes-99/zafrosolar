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
                  <option value="Mecer 3KW - Installation">Mecer 3KW</option>
                  <option value="Mecer 5KW - Installation">Mecer 5KW</option>
                  <option value="Mecer 5KW - Installation">Mecer 8KW</option>
                  <option value="Mecer 5KW - Installation">Deye 5KW</option>
                  <option value="Mecer 5KW - Installation">Deye 8KW</option>
                  <option value="Mecer 5KW - Installation">Sunsynk 5KW</option>
                  <option value="Mecer 5KW - Installation">Sunsynk 8KW</option>
                  <option value="Other - Maintenance">Other (Specify Below)</option>
                </optgroup>

                <optgroup label="Maintenance">
                <option value="Electrical Fault Diagnosis">Electrical Fault Diagnosis</option>
                <option value="Solar System Maintenance">Solar System Maintenance</option>

                </optgroup>

              </Field>
              <ErrorMessage name="service" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Conditional field for 'Other' under Maintenance */}
            {values.service === 'Other - Maintenance' && (
              <div className="mt-4">
                <label className="block text-sm font-medium">Specify Solar System</label>
                <Field
                  name="otherService"
                  placeholder="e.g., SunSynk 8KW"
                  className="w-full p-2 border rounded"
                />
              </div>
            )}

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
