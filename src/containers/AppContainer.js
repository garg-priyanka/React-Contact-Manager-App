// containers/AppContainer.js

import React, {
  Fragment,
  useState,
} from 'react';

import { nanoid } from 'nanoid';

import Table from '../components/common/Table';
import ContactForm from '../components/ContactForm';
import EditableRow from '../components/EditableRow';
import ReadOnlyRow from '../components/ReadOnlyRow';
import data from '../data/mock-data.json';

// Main AppContainer component for managing state and rendering components
const AppContainer = () => {
  // State hooks for managing contacts and form data
  const [contacts, setContacts] = useState(data)
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  })
  const [editContactId, setEditContactId] = useState(null)

  // Handle Contactform input change
  const handleFormChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  // Handle input form change for EditableRow
  const handleEditableRowFormChange = (event, contactId) => {
    const { name, value } = event.target;
    if (contactId === editContactId) {
      setEditableRowData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  // Handle form submission (Add/Edit)
  const handleFormSubmit = (event) => {
    console.log("here", editContactId)
    event.preventDefault()

    if (editContactId !== null) {
      const updatedContacts = contacts.map((contact) =>
        contact.id === editContactId ? { ...contact, ...editableRowData } : contact
      )
      setContacts(updatedContacts)
      
    } else {
      const newContact = { id: nanoid(), ...formData }
      setContacts((prevContacts) => [...prevContacts, newContact])
    }

    setFormData({
      fullName: "",
      address: "",
      phoneNumber: "",
      email: "",
    })
    setEditContactId(null)
  }

  // this state is specifically for EditableRow data
  const [editableRowData, setEditableRowData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  })

  // Handle edit button click
  const handleEditClick = (contact) => {
    // Set editableRowData to a copy of the clicked contact
    setEditableRowData({ ...contact })
    setEditContactId(contact.id)
  }

  // Handle cancel button click
  const handleCancelClick = () => {
    setEditContactId(null)
    setFormData({
      fullName: "",
      address: "",
      phoneNumber: "",
      email: "",
    })
  }

  // Handle delete button click
  const handleDeleteClick = (contactId) => {
    const updatedContacts = contacts.filter(
      (contact) => contact.id !== contactId
    )
    setContacts(updatedContacts)
  }

  // Headers for the Table component
  const tableHeaders = Object.keys(formData)

  // Return JSX for rendering the AppContainer component
  return (
    <div className="app-container">
      <ContactForm
        formData={formData}
        onFormChange={handleFormChange}
        onFormSubmit={handleFormSubmit}
      />

      {/* Use Table component for rendering the contact data */}
      <Table headers={tableHeaders} rows={contacts} />

      <table>
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th key={header}>{header}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Fragment key={contact.id}>
              {editContactId === contact.id && (
                // conditionally render either ReadOnlyRow or EditableRow
                <>
                  <EditableRow
                    contact={contact}
                    editableRowData={editableRowData}
                    onFormChange={handleEditableRowFormChange}
                    onCancelClick={handleCancelClick}
                    onSaveClick={handleFormSubmit}
                  />
                </>
              )}
              {editContactId !== contact.id && (
                <ReadOnlyRow
                  contact={contact}
                  onEditClick={() => handleEditClick(contact)}
                  onDeleteClick={handleDeleteClick}
                />
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AppContainer
