const fs = require('fs');
const pool = require('../lib/utils/pool');
const State = require('../lib/models/state');

describe('State Model', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });
  it('should insert a new state into the database', async() => {
    const createdState = await State.insert({
      state: 'Puerto Rico',
      regUrl: 'https://sos.oregon.gov/voting/Pages/registration.aspx?lang=en',
      checkRegUrl: 'https://secure.sos.state.or.us/orestar/vr/showVoterSearch.do',
      abReqUrl: 'https://sos.oregon.gov/voting/pages/voteinor.aspx',
      votingInfo: `Online: Oct. 13 By mail: Postmarked by Oct. 13 In person: Oct. 13 Absentee ballot deadlines Return by mail: Received by Nov. 3 by 8:00 p.m.
        Return in person: Nov. 3 by 8:00 p.m. Additional information Oregon's early voting is by mail. Ballot drop box sites are open 18-20 days before Election Day, 
        depending on your area. Oct 28 is the last day ballots can be mailed. After this date, ballots must be put into a drop box`,
      abbrv: 'PR'
    });

    const { rows } = await pool.query('SELECT * FROM states WHERE id=$1', [createdState.id]);

    expect(rows[0]).toEqual({
      id:createdState.id,
      state: createdState.state,
      reg_url: createdState.regUrl,
      check_reg_url: createdState.checkRegUrl,
      ab_req_url: createdState.abReqUrl,
      voting_info: createdState.votingInfo,
      abbrv: createdState.abbrv
    });
  });

  it('finds a state by abbrv', async() => {
    const puertoRico = await State.insert({
      state: 'Puerto Rico',
      regUrl: 'https://sos.oregon.gov/voting/Pages/registration.aspx?lang=en',
      checkRegUrl: 'https://secure.sos.state.or.us/orestar/vr/showVoterSearch.do',
      abReqUrl: 'https://sos.oregon.gov/voting/pages/voteinor.aspx',
      votingInfo: `Online: Oct. 13 By mail: Postmarked by Oct. 13 In person: Oct. 13 Absentee ballot deadlines Return by mail: Received by Nov. 3 by 8:00 p.m.
          Return in person: Nov. 3 by 8:00 p.m. Additional information Oregon's early voting is by mail. Ballot drop box sites are open 18-20 days before Election Day, 
          depending on your area. Oct 28 is the last day ballots can be mailed. After this date, ballots must be put into a drop box`,
      abbrv: 'PR'
    });
    const foundState = await State.findByAbbrv(puertoRico.abbrv);

    expect(foundState).toEqual({
      id: puertoRico.id,
      state: 'Puerto Rico',
      regUrl: 'https://sos.oregon.gov/voting/Pages/registration.aspx?lang=en',
      checkRegUrl: 'https://secure.sos.state.or.us/orestar/vr/showVoterSearch.do',
      abReqUrl: 'https://sos.oregon.gov/voting/pages/voteinor.aspx',
      votingInfo: `Online: Oct. 13 By mail: Postmarked by Oct. 13 In person: Oct. 13 Absentee ballot deadlines Return by mail: Received by Nov. 3 by 8:00 p.m.
          Return in person: Nov. 3 by 8:00 p.m. Additional information Oregon's early voting is by mail. Ballot drop box sites are open 18-20 days before Election Day, 
          depending on your area. Oct 28 is the last day ballots can be mailed. After this date, ballots must be put into a drop box`,
      abbrv: 'PR'
    });
  });

});


