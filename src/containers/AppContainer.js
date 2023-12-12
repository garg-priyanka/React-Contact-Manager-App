// containers/AppContainer.js
import React, { useState } from 'react';

import ContactForm from '../components/ContactForm';

// Main AppContainer component for managing state and rendering components
const AppContainer = () => {
  // State hooks for managing contacts and form data
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  })

  // Handle form input change
  const handleFormChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  // Handle form submission (Add/Edit)
  const handleFormSubmit = (event) => {
    event.preventDefault()
    setFormData({
      fullName: "",
      address: "",
      phoneNumber: "",
      email: "",
    })
  }

  // Return JSX for rendering the AppContainer component
  return (
    <div className="app-container">
      <ContactForm
        formData={formData}
        onFormChange={handleFormChange}
        onFormSubmit={handleFormSubmit}
      />
    </div>
  )
}

export default AppContainer
