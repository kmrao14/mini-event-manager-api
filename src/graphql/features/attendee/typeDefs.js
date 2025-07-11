import { gql } from 'apollo-server';

export default gql`
  type Attendee {
    id: ID!
    name: String!
    email: String
    events: [Event!]!
  }

  extend type Mutation {
    addAttendeeToEvent(eventId: ID!, name: String!, email: String): Attendee
    removeAttendeeFromEvent(eventId: ID!, attendeeId: ID!): Boolean
  }
`;