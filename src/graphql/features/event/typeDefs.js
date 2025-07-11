import { gql } from 'apollo-server';

export default gql`
  type Event {
    id: ID!
    title: String!
    date: String!
    attendees: [Attendee!]!
    attendeeCount: Int!
  }

  extend type Query {
    events: [Event!]!
    event(id: ID!): Event
  }

  extend type Mutation {
    createEvent(title: String!, date: String!): Event
  }
`;