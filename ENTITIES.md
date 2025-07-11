### 1. User

- `id`: string (UUID, primary key)
- `name`: string
- `email`: string (unique, indexed)
- `created_at`: date (current time stamp)
- `updated_at`: date (current time stamp)

---

### 2. Event

- `id`: string (UUID, primary key)
- `title`: string
- `description`: string (optional)
- `date`: date
- `location`: string
- `created_by`: string (references User.id)
- `created_at`: date (current time stamp)
- `updated_at`: date (current time stamp)

---

### 3. Attendee

- `id`: string (UUID, primary key)
- `name`: string
- `email`: string (indexed)
- `created_at`: date (current time stamp)

---

### 4. EventAttendee (Join Table for RSVP)

- `id`: string (UUID, primary key)
- `event_id`: string (references Event.id)
- `attendee_id`: string (references Attendee.id)
- `rsvp_status`: string (enum: "going", "not_going", "maybe", default: "maybe")
- `rsvp_date`: date

---

### 5. Tag

- `id`: string (UUID, primary key)
- `label`: string (e.g., "Public", "Internal")
- `created_at`: date

---

### 6. EventTag (Join Table)

- `id`: string (UUID, primary key)
- `event_id`: string (references Event.id)
- `tag_id`: string (references Tag.id)

---

## Performance Considerations

- Indexes on:
  - `User.email`
  - `Attendee.email`
  - `Event.date`, `Event.created_by`
  - `EventAttendee.event_id`, `EventAttendee.attendee_id`
  - `EventTag.event_id`, `EventTag.tag_id`
- All UUIDs are primary keys for consistency and scalability.
- Join tables (EventAttendee, EventTag) ensure many-to-many relationships are normalized.

---