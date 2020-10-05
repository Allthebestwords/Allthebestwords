const pool = require('../utils/pool');

module.exports = class State {
  id;
  state;
  regUrl;
  checkRegUrl;
  abReqUrl;
  votingInfo;

  constructor(row) {
    this.id = row.id;
    this.state = row.state;
    this.regUrl = row.reg_url;
    this.checkRegUrl = row.check_reg_url;
    this.abReqUrl = row.ab_req_url;
    this.votingInfo = row.voting_info;
  }
  static async insert(state) {
    const { rows } = await pool.query(`
    INSERT INTO states 
    (state, reg_url, check_reg_url, ab_req_url, voting_info) 
    VALUES($1, $2, $3, $4, $5) RETURNING *`, 
    [state.state, state.regUrl, state.checkRegUrl, state.abReqUrl, state.onlineRegDeadline, state.mailRegDeadline, state.inPersonRegDeadline, state.abReqDeadline, state.abRetMailDeadline, state.abInPersonDeadline, state.earlyVotingStart, state.postmark]);

    return new State(rows[0]);
  }

  
};


