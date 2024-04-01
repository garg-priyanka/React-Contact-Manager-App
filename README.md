# Contact Management App

## Overview

This is a React practice application for managing contacts. It allows users to add, edit, and delete contact information. The application features a user-friendly interface with forms for adding and editing contact details.

## Usage

1. **Add a Contact:**

   - Enter the contact details in the input fields under the "Add a Contact" section.
   - Click the "Add" button to save the new contact.

2. **Edit a Contact:**

   - Click the "Edit" button next to the contact you want to modify.
   - Update the contact details in the editable form.
   - Click the "Save" button to apply the changes or "Cancel" to discard them.

3. **Delete a Contact:**
   - Click the "Delete" button next to the contact you want to remove.

## Components

- **ContactForm:** Handles the input form for adding and editing contacts.
- **EditableRow:** Renders an editable row with input fields for modifying contact details.
- **ReadOnlyRow:** Displays a read-only row showing contact information with "Edit" and "Delete" buttons.

## Folder Structure

- **components:** Contains reusable React components.
- **data:** Stores the mock data in a JSON file.
- **styles:** Includes CSS files for styling.

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.

## Technologies Used

- React
- nanoid for generating unique IDs
- CSS for styling
