//Write your code here



//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};

// 1. Declare and Initialize an Attendee Object
const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};

// 2. Create a Function to Log Attendee Name
function logAttendeeName(attendee) {
  console.log(attendee.name);  // Logs the name of the attendee
}

// 3. Create a Function to Log Ticket Price
function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);  // Logs the ticket price of the attendee
}

// 4. Create a Function to Update Ticket Type
function updateTicketType(attendee, newTicketType) {
  attendee.ticketType = newTicketType;  // Updates the ticket type
  console.log(`Ticket type updated to: ${attendee.ticketType}`);
}

// 5. Create a Function to Update Ticket Price
function updateTicketPrice(attendee, newTicketPrice) {
  attendee.ticketPrice = newTicketPrice;  // Updates the ticket price
  console.log(`Ticket price updated to: $${attendee.ticketPrice}`);
}

// 6. Create a Function to Remove the Event Property
function removeEventProperty(attendee) {
  delete attendee.event;  // Removes the 'event' property from the object
  console.log("Event property removed");
}

// 7. Create a Function to Add a Checked-in Property
function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;  // Adds a 'checkedIn' property with a value of true
  console.log("Checked-in property added");
}

// Example Usage:

// Log Attendee Name
logAttendeeName(attendee);  // Output: Alice Smith

// Log Ticket Price
logTicketPrice(attendee);  // Output: 150.00

// Update Ticket Type
updateTicketType(attendee, "General");  // Output: Ticket type updated to: General

// Update Ticket Price
updateTicketPrice(attendee, 100.00);  // Output: Ticket price updated to: $100.00

// Remove Event Property
removeEventProperty(attendee);  // Output: Event property removed

// Add Checked-in Property
addCheckedInProperty(attendee);  // Output: Checked-in property added

// Check the modified attendee object
console.log(attendee);
