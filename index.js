const dayOfTheWeek = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );

  const today = new Date();
  const currentTime = Date.now();
  const day = today.getDay();
  const dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  dayOfTheWeek.innerHTML = `Current Day of the Week: ${dayList[day]}`;

  const updateTime = () => {
    const newTime = Date.now();
    document.querySelector(
      '[data-testid="currentUTCTime"]'
    ).textContent = `Current UTC Time: ${newTime} mSecs`;
  };
  setInterval(updateTime, 1);
