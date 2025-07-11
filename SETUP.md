# GraphQL API (Node.js + Apollo Server)

## GraphQL API Server Setup (Apollo Server + In-Memory Storage)

GraphQL API server built with Apollo Server and Node.js. It uses in-memory storage.

## Requirements

- Node.js 18+ (recommended 20.17.0)
- npm or yarn

## Installation

```bash
git clone <your-repo-url>
cd mini-event-manager-api
npm install
```

## Project Structure (Feature-Based)

```bash
src/
├── graphql/
│   ├── features/       
│   └── event/          # Merges and exports typeDefs + resolvers
│   └── attendee/       # Attendee typeDefs + resolvers
│   ├── index.js          
│        
├── data/
│   └── store.js          # In-memory data store
├── config/
│   └── env.js            # Environment config (e.g., PORT)
└── index.js              # Main Apollo Server entry
```

## Run the API Server
```bash
npm run dev
```

## GraphQL Playground
```bash
http://localhost:4000/graphql
```


## Sample Queries
```bash
query GetEvents {
  events {
    id
    title
    date
    attendeeCount
  }
}
```

```bash
mutation CreateEvent {
  createEvent(title: "Hackathon", date: "2025-08-01") {
    id
    title
  }
}
```