
module.exports = (stateData) => {
  const { state, document } = stateData;
  const allStateData = document.querySelector('.aD8dbe');
  const button = [...allStateData.querySelectorAll('.oXSIod')];
  const infoBox = document.querySelector('.ZVWN5d');
  const votingInfo = infoBox.querySelector('.Xims0d').textContent;
  const spot = {
    state: document.querySelector('.S7TGef > span').textContent,
    regUrl: button[0]?.href,
    checkRegUrl: button[1]?.href,
    abReqUrl: button[2]?.href,
    votingInfo,
    abbrv: state
  };
  return spot;
};





