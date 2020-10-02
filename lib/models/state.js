const pool = require('../utils/pool');

module.exports = class State {
  id;
  state;
  name;
  electionInfo;
  registrationUrl;
  votingLocation;
  ballotInfo;

  constructor(row) {
    this.id = row.id;
    this.state = row.state;
    this.name = row.name;
    this.electionInfo = row.election_info;
    this.registrationUrl = row.registration_url;
    this.votingLocation = row.voting_location;
    this.ballotInfo = row.ballot_info;
  }
  static async insert(state) {
    const { rows } = await pool.query('INSERT INTO states (state, name, election_info, registration_url, voting_location, ballot_info) VALUES($1, $2, $3, $4, $5, $6) RETURNING *', [state.state, state.name, state.electionInfo, state.registrationUrl, state.votingLocation, state.ballotInfo]);

    return new State(rows[0]);
  }

  
};


