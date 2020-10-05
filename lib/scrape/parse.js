const parse = document => {
  const allStateData = [...document.querySelectorAll('.aD8dbe')];
};

module.exports = parse;

const { all } = require("../app");

module.exports = document => {
  //console.table(document);
  const allStateData = document.querySelector('.aD8dbe');
  const button = [...allStateData.querySelectorAll('.oXSIod')];
  const infoBox = document.querySelector('.ZVWN5d');
  const divs = [...infoBox.querySelector('.Xims0d').querySelectorAll('div')].map(div => div.textContent);
  console.log(divs);
  const object = {
  state: document.querySelector('.S7TGef > span').textContent,
  regUrl: button[0],
  checkRegUrl: button[1],
  abReqUrl: button[2],
  onlineRegDeadline: divs[2],
  mailRegDeadline: divs[3],
  inPersonRegDeadline: divs[4],
  abReqDeadline: divs[6],
  abRetMailDeadline: divs[7],
  abInPersonDeadline: divs
  earlyVotingStart: 
  postmark:

  }
  
};




