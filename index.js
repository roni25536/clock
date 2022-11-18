const addDelayToAnimation = (secondsIn) => {
  const date = new Date();
  Object.entries(secondsIn).forEach(([time, seconds]) => {
    const timeE = document.getElementsByClassName(time.toLowerCase())[0];
    const t = date[`get${time}s`]() * seconds * -1;
    timeE.style.animationDelay = `${t}s`;
  });
};
window.onload = (e) => {
  const secondsIn = {
    Second: 1,
    Minute: 60,
    Hour: 3600,
  };

  addDelayToAnimation(secondsIn);
};
