function isDate(testDate) { 
  var objDate,  // date object initialized from the testDate string 
      mSeconds, // testDate in milliseconds 
      day,      // day 
      month,    // month 
      year;     // year 
  // date length should be 10 characters (no more no less) 
  if (testDate.length !== 10) { 
      return false; 
  } 
  // third and sixth character should be '/' 
  if (testDate.substring(2, 3) !== '/' || testDate.substring(5, 6) !== '/') { 
      return false; 
  } 
  // extract month, day and year from the testDate (expected format is mm/dd/yyyy) 
  // subtraction will cast variables to integer implicitly (needed 
  // for !== comparing) 
  month = testDate.substring(0, 2) - 1; // because months in JS start from 0 
  day = testDate.substring(3, 5) - 0; 
  year = testDate.substring(6, 10) - 0; 
  // test year range 
  if (year < 1000 || year > 3000) { 
      return false; 
  } 
  // convert testDate to milliseconds 
  mSeconds = (new Date(year, month, day)).getTime(); 
  // initialize Date() object from calculated milliseconds 
  objDate = new Date(); 
  objDate.setTime(mSeconds); 
  // compare input date and parts from Date() object 
  // if difference exists then date isn't valid 
  if (objDate.getFullYear() !== year || 
      objDate.getMonth() !== month || 
      objDate.getDate() !== day) { 
      return false; 
  } 
  // otherwise return true 
  return true; 
}