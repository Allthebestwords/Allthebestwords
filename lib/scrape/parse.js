

module.exports = (document) => {

  const allStateData = document.querySelector('.aD8dbe');
  const button = [...allStateData.querySelectorAll('.oXSIod')];
  const infoBox = document.querySelector('.ZVWN5d');
  const votingInfo = infoBox.querySelector('.Xims0d').textContent;
//   console.log(votingInfo);
  const spot = {
    state: document.querySelector('.S7TGef > span').textContent,
    regUrl: button[0]?.href,
    checkRegUrl: button[1]?.href,
    abReqUrl: button[2]?.href,
    votingInfo

  };

//   console.log(object);
  return spot;

  
};





