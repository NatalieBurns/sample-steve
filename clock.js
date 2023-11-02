function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const amPm = hours >= 12 ? 'PM' : 'AM';
  
    // Convert 24h time to 12h time
    hours = hours % 12;
    // The hour '0' should be '12'
    hours = hours ? hours : 12;
  
    document.getElementById('clock').textContent =
      hours.toString().padStart(2, '0') + ':' + 
      minutes.toString().padStart(2, '0') + ':' + 
      seconds.toString().padStart(2, '0') + ' ' + amPm;
  }
  
  // Call updateClock every second
  setInterval(updateClock, 1000);
  updateClock(); // Initialize the clock display
  