const pool = require('../utils/pool');

module.exports = class State {
  id;
  state;
  regUrl;
  checkRegUrl;
  abReqUrl;
  onlineRegDeadline;
  mailRegDeadline;
  inPersonRegDeadline;
  abReqDeadline;
  abRetMailDeadline;
  abInPersonDeadline;
  earlyVotingStart;
  postmark;

  constructor(row) {
    this.id = row.id;
    this.state = row.state;
    this.regUrl = row.reg_url;
    this.checkRegUrl = row.check_reg_url;
    this.abReqUrl = row.ab_req_url;
    this.onlineRegDeadline = row.online_reg_deadline;
    this.mailRegDeadline = row.mail_reg_deadline;
    this.inPersonRegDeadline = row.in_person_reg_deadline;
    this.abReqDeadline = row.ab_req_deadline;
    this.abRetMailDeadline = row.ab_ret_mail_deadline;
    this.abInPersonDeadline = row.ab_in_person_deadline;
    this.earlyVotingStart = row.early_voting_start;
    this.postmark = row.postmark;
  }
  static async insert(state) {
    const { rows } = await pool.query(`
    INSERT INTO states 
    (state, reg_url, check_reg_url, ab_req_url, online_reg_deadline, mail_reg_deadline, in_person_reg_deadline, ab_req_deadline, ab_ret_mail_deadline, ab_in_person_deadline, early_voting_start, postmark) 
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`, 
    [state.state, state.regUrl, state.checkRegUrl, state.abReqUrl, state.onlineRegDeadline, state.mailRegDeadline, state.inPersonRegDeadline, state.abReqDeadline, state.abRetMailDeadline, state.abInPersonDeadline, state.earlyVotingStart, state.postmark]);

    return new State(rows[0]);
  }

  
};


