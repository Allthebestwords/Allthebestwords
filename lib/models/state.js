const pool = require('../utils/pool');

module.exports = class State {
  id;
  state;
  regUrl;
  checkRegUrl;
  abReqUrl;
  votingInfo;
  abbrv;
  
  constructor(row) {
    this.id = row.id;
    this.state = row.state;
    this.regUrl = row.reg_url;
    this.checkRegUrl = row.check_reg_url;
    this.abReqUrl = row.ab_req_url;
    this.votingInfo = row.voting_info;
    this.abbrv = row.abbrv;
  }
  static async insert(state) {
    const { rows } = await pool.query(`
    INSERT INTO states 
    (state, reg_url, check_reg_url, ab_req_url, voting_info, abbrv) 
    VALUES($1, $2, $3, $4, $5, $6) RETURNING *`, 
    [state.state, state.regUrl, state.checkRegUrl, state.abReqUrl, state.votingInfo, state.abbrv]);

    return new State(rows[0]);
  }

  static async findByAbbrv(abbrv) {
    const { rows } = await pool.query(`
    SELECT * FROM states WHERE abbrv=$1`,
    [abbrv]);
    if(!rows[0]) return null;
    return new State(rows[0]);
  }

  
};


