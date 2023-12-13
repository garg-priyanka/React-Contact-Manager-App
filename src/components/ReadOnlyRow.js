// components/ReadOnlyRow.js

import React from 'react';

import PropTypes from 'prop-types';

const ReadOnlyRow = ({ contact, onEditClick, onDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button onClick={() => onEditClick(contact)}>Edit</button>
        <button onClick={() => onDeleteClick(contact.id)}>Delete</button>
      </td>
    </tr>
  )
}

ReadOnlyRow.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
}

export default ReadOnlyRow
