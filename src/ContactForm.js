// components/ContactForm.js

import React from 'react';

import PropTypes from 'prop-types';

const ContactForm = ({ formData, onFormChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        name="fullName"
        required
        placeholder="Enter a name..."
        onChange={onFormChange}
        value={formData.fullName}
      />
      <input
        type="text"
        name="address"
        required
        placeholder="Enter an address..."
        onChange={onFormChange}
        value={formData.address}
      />
      <input
        type="text"
        name="phoneNumber"
        required
        placeholder="Enter a phone number..."
        onChange={onFormChange}
        value={formData.phoneNumber}
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Enter an email..."
        onChange={onFormChange}
        value={formData.email}
      />
      <button type="submit">Add</button>
    </form>
  )
}

ContactForm.propTypes = {
  formData: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  onFormChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
}

export default ContactForm
