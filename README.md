# UCS Mini Service Desk

This is a simple ticket management system developed using **React** and **Material UI**.  
Users can create tickets, view existing tickets, update ticket status, and add notes.

All ticket data is stored in the **browser LocalStorage**, so no database is required.

---

## Setup Instructions

1. Clone the repository
2. Go to the project folder
3. Install required dependencies - use npm install
4. Run the application - npm run dev | or if using Create React App - npm start
5. Open the browser and go to - http://localhost:5173 ( (or the port shown in the terminal)

----------------------------------------------------------------------------------

## How to Use the System

### 1. Create a Ticket
- Go to **Add New Ticket**
- Fill the form with ticket details
- Click **Submit**
- The ticket will be saved in LocalStorage

### 2. View Tickets
- Click **View All Tickets**
- All created tickets will be displayed

### 3. Search and Filter
You can:
- Search tickets by **title**
- Filter by **status**
- Filter by **priority**

### 4. View Ticket Details
- Click on a ticket card
- You can see full ticket information

### 5. Update Ticket Status
- Select a new status
- Click **Save Status**

### 6. Add Notes
- Write a note in the input field
- Click **Add**
- The note will appear in the notes list

### 7. Clear Local Storage
This will remove all saved tickets from the browser.

---

## Technologies Used

- React
- React Router
- Material UI
- JavaScript
- LocalStorage

---------------------------------------------------------------------------------
