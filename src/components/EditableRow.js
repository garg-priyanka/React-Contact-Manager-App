// components/EditableRow.js

import React from 'react';

import PropTypes from 'prop-types';

const EditableRow = ({ contact, editableRowData, onFormChange, onCancelClick, onSaveClick }) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="fullName"
          value={editableRowData.fullName}
          onChange={(e) => onFormChange(e, contact.id)}
          placeholder="Enter full name..."
        />
      </td>
      <td>
        <input
          type="text"
          name="address"
          value={editableRowData.address}
          onChange={(e) => onFormChange(e, contact.id)}
          placeholder="Enter address..."
        />
      </td>
      <td>
        <input
          type="text"
          name="phoneNumber"
          value={editableRowData.phoneNumber}
          onChange={(e) => onFormChange(e, contact.id)}
          placeholder="Enter phone number..."
        />
      </td>
      <td>
        <input
          type="email"
          name="email"
          value={editableRowData.email}
          onChange={(e) => onFormChange(e, contact.id)}
          placeholder="Enter email..."
        />
      </td>
      <td>
        <button onClick={onCancelClick}>Cancel</button>
        <button onClick={onSaveClick}>Save</button>
      </td>
    </tr>
  );
};

EditableRow.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  editableRowData: PropTypes.shape({
    fullName: PropTypes.string,
    address: PropTypes.string,
    phoneNumber: PropTypes.string,
    email: PropTypes.string,
  }),
  onFormChange: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
};

export default EditableRow;
