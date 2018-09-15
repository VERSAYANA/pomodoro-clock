const formatSecondsToMMSS = (seconds) => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  let mm = '00';
  let ss = '00';

  if (m < 10) {
    mm = `0${m}`;
  } else {
    mm = `${m}`;
  }
  if (s < 10) {
    ss = `0${s}`;
  } else {
    ss = `${s}`;
  }

  return `${mm}:${ss}`;
};

export default formatSecondsToMMSS;
