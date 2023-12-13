// components/EditableRow.js

import React from 'react';

import PropTypes from 'prop-types';

// EditableRow component for rendering editable rows in the table
const EditableRow = ({ contact, onFormChange, onCancelClick }) => {
  // Check if contact is undefined to avoid rendering errors
  if (!contact) {
    // Render null or some placeholder content when contact is undefined
    return null
  }

  return (
    <tr>
      <td>
        <input
          type="text"
          name="fullName"
          value={contact.fullName}
          onChange={(e) => onFormChange(e, contact.id)}
          placeholder="Enter full name..."
        />
      </td>
      <td>
        <input
          type="text"
          name="address"
          value={contact.address}
          onChange={(e) => onFormChange(e, contact.id)}
          placeholder="Enter address..."
        />
      </td>
      <td>
        <input
          type="text"
          name="phoneNumber"
          value={contact.phoneNumber}
          onChange={(e) => onFormChange(e, contact.id)}
          placeholder="Enter phone number..."
        />
      </td>
      <td>
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={(e) => onFormChange(e, contact.id)}
          placeholder="Enter email..."
        />
      </td>
      <td>
        <button onClick={onCancelClick}>Cancel</button>
      </td>
    </tr>
  )
}

// Prop types for the EditableRow component
EditableRow.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  onFormChange: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
}

export default EditableRow
