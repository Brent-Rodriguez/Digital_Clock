'use strict';

    let hrs = document.getElementById('hrs');
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');

    function updateClock() {
      let currentTime = new Date();

      hrs.innerHTML = (currentTime.getHours() < 10 ? '0' : '') + currentTime.getHours();
      min.innerHTML = (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes();
      sec.innerHTML = (currentTime.getSeconds() < 10 ? '0' : '') + currentTime.getSeconds();
    }

    setInterval(updateClock, 1000);

    function startTimer(durationInSeconds) {
      let endTime = new Date().getTime() + durationInSeconds * 1000;

      function updateTimer() {
        let currentTime = new Date().getTime();
        let remainingTime = endTime - currentTime;

        let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        hrs.innerHTML = '00'; // Since this is a timer, we don't show hours
        min.innerHTML = (minutes < 10 ? '0' : '') + minutes;
        sec.innerHTML = (seconds < 10 ? '0' : '') + seconds;

        if (remainingTime <= 0) {
          clearInterval(timerInterval);
        }
      }

      let timerInterval = setInterval(updateTimer, 1000);
    }

    function startCountdown(durationInMinutes) {
      let endTime = new Date().getTime() + durationInMinutes * 60 * 1000;

      function updateCountdown() {
        let currentTime = new Date().getTime();
        let remainingTime = endTime - currentTime;

        let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        hrs.innerHTML = (hours < 10 ? '0' : '') + hours;
        min.innerHTML = (minutes < 10 ? '0' : '') + minutes;
        sec.innerHTML = (seconds < 10 ? '0' : '') + seconds;

        if (remainingTime <= 0) {
          clearInterval(countdownInterval);
        }
      }

      let countdownInterval = setInterval(updateCountdown, 1000);
    }