const dayOfTheWeek = document.getElementById("dayOfTheWeek");
      const utcTime = document.getElementById("utcTime")

      const today = new Date();
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
      dayOfTheWeek.innerHTML = dayList[day];
      
      const utcMilliseconds = today.getUTCMilliseconds();
      utcTime.textContent = `${utcMilliseconds} milliseconds`