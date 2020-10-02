DROP TABLE IF EXISTS states;

CREATE TABLE states (
  id GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  state TEXT, 
  name TEXT,
  election_info TEXT, 
  registration_url TEXT,
  voting_location TEXT, 
  ballot_info TEXT
);