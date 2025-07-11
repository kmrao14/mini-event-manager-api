import { v4 as uuidv4 } from 'uuid';

export const events = [
  { id: uuidv4(), title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', date: '2025-08-01' },
  { id: uuidv4(), title: 'Aliquam scelerisque ipsum nec velit mattis', date: '2025-09-10' }
];

export const attendees = [
  { id: uuidv4(), name: 'Alice', email: 'alice@example.com' },
  { id: uuidv4(), name: 'Bob', email: 'bob@example.com' }
];

export const eventAttendees = [
  { eventId: events[0].id, attendeeId: attendees[0].id },
  { eventId: events[0].id, attendeeId: attendees[1].id },
  { eventId: events[1].id, attendeeId: attendees[0].id }
];