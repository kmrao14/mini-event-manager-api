import { v4 as uuidv4 } from 'uuid';
import { events, attendees, eventAttendees } from '../../../data/store.js';
export default {
  Query: {
    events: () => events,
    event: (_, { id }) => events.find(e => e.id === id)
  },
  Mutation: {
    createEvent: (_, { title, date }) => {
      const newEvent = { id: uuidv4(), title, date };
      events.push(newEvent);
      return newEvent;
    }
  },
  Event: {
    attendees: (event) => {
      const attendeeIds = eventAttendees.filter(ea => ea.eventId === event.id).map(ea => ea.attendeeId);
      return attendees.filter(a => attendeeIds.includes(a.id));
    },
    attendeeCount: (event) => {
      return eventAttendees.filter(ea => ea.eventId === event.id).length;
    }
  }
};