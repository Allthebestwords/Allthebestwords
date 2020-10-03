const { all } = require("../app");

module.exports = document => {
  //console.table(document);
  const allStateData = document.querySelector('.aD8dbe');
  const button = [...allStateData.querySelectorAll('.oXSIod')];
  const infoBox = document.querySelector('.ZVWN5d');
  const divs = [...infoBox.querySelector('.Xims0d').querySelectorAll('div')].map(div => div.textContent);
  console.log(divs);
//   const object = {
//   state: document.querySelector('.S7TGef > span').textContent,
//   regUrl: button[0],
//   checkRegUrl: button[1],
//   abReqUrl: button[2],
//   onlineRegDeadline:
//   mailRegDeadline:
//   inPersonRegDeadline:
//   abReqDeadline:
//   abRetMailDeadline:
//   abInPersonDeadline:
//   earlyVotingStart:
//   postmark:

//   }
  
};



