export class Clock {
    constructor(hours=0, minutes=0) {
            // Normalize minutes and hours
            while (minutes < 0) {
              hours -= 1;
              minutes += 60;
          }
  
          while (minutes >= 60) {
              hours += 1;
              minutes -= 60;
          }
  
          while (hours < 0) {
              hours += 24;
          }
  
          this.hours = hours % 24;
          this.minutes = minutes;
    }
  
    toString() {
      // Format hours and minutes to always have two digits
      return `${String(this.hours).padStart(2, '0')}:${String(this.minutes).padStart(2, '0')}`;
    }
  
    plus(minutes) {
      return new Clock(this.hours, this.minutes + minutes);
    }
  
    minus(minutes) {
      return new Clock(this.hours, this.minutes - minutes);
    }
  
    equals(otherClock) {
      return this.hours === otherClock.hours && this.minutes === otherClock.minutes;
    }
  }