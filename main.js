const JSJoda = require('js-joda'); 
const LocalDate = JSJoda.LocalDate; 

 function getNumberOfDays(start, end) { 
 const start_date = new LocalDate.parse(start); 
 const end_date = LocalDate.parse(end).plusDays(1); 
 
 return JSJoda.ChronoUnit.DAYS.between(start_date, end_date); } 
 
 console.log(getNumberOfDays("2022-12-14", "2023-04-12")); 