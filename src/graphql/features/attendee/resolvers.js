import { v4 as uuidv4 } from 'uuid';
import { attendees, events, eventAttendees } from '../../../data/store.js';
export default {
  Mutation: {
    addAttendeeToEvent: (_, { eventId, name, email }) => {
      let attendee = attendees.find(a => a.name === name && a.email === email);
      if (!attendee) {
        attendee = { id: uuidv4(), name, email };
        attendees.push(attendee);
      }

      const alreadyJoined = eventAttendees.find(ea => ea.eventId === eventId && ea.attendeeId === attendee.id);
      if (!alreadyJoined) {
        eventAttendees.push({ eventId, attendeeId: attendee.id });
      }

      return attendee;
    },

    removeAttendeeFromEvent: (_, { eventId, attendeeId }) => {
      const index = eventAttendees.findIndex(ea => ea.eventId === eventId && ea.attendeeId === attendeeId);
      if (index === -1) return false;
      eventAttendees.splice(index, 1);
      return true;
    }
  },
  Attendee: {
    events: (attendee) => {
      const eventIds = eventAttendees.filter(ea => ea.attendeeId === attendee.id).map(ea => ea.eventId);
      return events.filter(e => eventIds.includes(e.id));
    }
  }
};