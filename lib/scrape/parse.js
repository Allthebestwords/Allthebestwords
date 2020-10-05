

module.exports = async(document) => {
  //console.table(document);
  const allStateData = document.querySelector('.aD8dbe');
  const button = await [...allStateData.querySelectorAll('.oXSIod')];
  const infoBox = document.querySelector('.ZVWN5d');
  const votingInfo = infoBox.querySelector('.Xims0d').textContent;
  console.log(votingInfo);
  const object = {
    state: document.querySelector('.S7TGef > span').textContent,
    regUrl: button[0].href,
    checkRegUrl: button[1].href,
    abReqUrl: button[2].href,
    voteInfo: votingInfo

  };

  console.log(object);
  return object;

  
};





