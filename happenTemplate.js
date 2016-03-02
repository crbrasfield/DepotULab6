var library = (function() {
  return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){
            var timeStamp = String(Math.floor(Date.now() / 1000));
            return timeStamp;
        },
		UnixMillisecond: function(){
            var timeStamp = Date.now();
            console.log(timeStamp)
            return timeStamp;
        }
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){
                  var date = new Date();
                  var time = date.toLocaleTimeString();
                  console.log(time);
                  return time;
                  
              },
	   	    WithOutSeconds: function() {
                  var date = new Date();
                  var time = date.toLocaleTimeString();
                  
               }
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){
                var date = new Date()
                var monthDay = date.getDay() -1;
                var month = date.getMonth() +1;
                var year = date.getFullYear();
                var mdy = String(month +'/'+ monthDay +'/'+ year);
                return mdy;
            },
			Name: function(){
                               var date = new Date()
                var monthDay = date.getDay() -1;
                var month = date.getMonth();
                var year = date.getFullYear();
                var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                var mdy = String(monthNames[month] +' '+ monthDay +', '+ year);
                return mdy;
            }
		  }
		  })(),
		}
	})(),
	Second: (function(){
		return{
			Second: function(){
                var date = new Date();
                var second = String(date.getSeconds());
                return second;
            },
			DblDigit: function(){
                var date = new Date();
                var second = String(date.getSeconds());
                if (second >= 10){
                    return second;
                } else {
                    return String ('0' +second);
                }
                }
                
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(){
                var date = new Date();
                var minute = String(date.getMinutes());
                return minute;
            },
			DblDigit: function(){
                var date = new Date();
                var minute = String(date.getMinutes());
                if (minute >= 10){
                return minute;
                } else {
                return String ('0' + minute)
                }
            }
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {
                var date = new Date();
                var hours = String(date.getHours());
                var hoursHalf = hours /2
                return hours;
            },
			TwelveHour: function() {
                var date = new Date();
                var hours = String(date.getHours());
                var afternoon = String(date.getHours()-12)
                if (hours > 12) {
                    return afternoon;
                } else {
                    return hours;
                }
                
            },
			AMPM: (function() {
				return {
					UpperCase: function(){
                        var hours = new Date().getHours();
                        var ampm = (hours >= 12) ? "PM" : "AM";
                        return ampm;
                    },
					LowerCase: function(){
                        var hours = new Date().getHours();
                        var ampm = (hours >= 12) ? "pm" : "am";
                        return ampm;
                    }
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){
                var dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
                var date = new Date();
                var day = date.getDay() -1;
                return String(dayNames[day]);
            },
			AbrDayOfWeek: function(){
                var dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
                var date = new Date();
                var day = date.getDay() -1;
                return String(dayNames[day].slice(0,3));
            },
			FirstTwoOfWeek: function(){
                var dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
                var date = new Date();
                var day = date.getDay() -1;
                return String(dayNames[day].slice(0,2));
                
            },
			WeekOfYear: function(){
                
                var date = new Date();
                var weekNum = date;
                return weekNum;
                
            }
		}
	})(),
	Month: (function(){
		return {
			DateOfMonth: (function(){
				return {
					Numeral: function(){
                        var date = new Date()
                        var monthDay = date.getDay() -1;
                        return String(monthDay);
                    },
					Ordinal: function(){
                        var date = new Date()
                        var monthDay = date.getDay() -1;
                        return String(monthDay);
                    },
					DateDblDigit: function(){
                        var date = new Date()
                        var monthDay = date.getDay() -1;
                        if (monthDay < 10) {
                            return String('0'+ monthDay);
                            } else {
                                return String(monthDay);
                            }
                    }
				}
			})(),
			MonthNumber: function(){
                var date = new Date();
                var month = date.getMonth() +1;
                return String(month);
            },
			MonthNumberDblDigit: function(){
                var date = new Date();
                var month = date.getMonth() +1;
                if (month < 10) {
                    return String('0'+ month);
                    } else {
                        return String(month);
                    }
           
            },
			AbrOfCurrentMonth: function(){
                var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                var date = new Date();
                var month = date.getMonth();
                return String(monthNames[month]);
            },
			CurrentMonth: function(){
                var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                var date = new Date();
                var month = date.getMonth();
                return String(monthNames[month]);
            }
		}
	})(),
	Year: (function(){
		return {
			DayOfYear: (function(){
				return {
					Numeral: function(){
                        var now = new Date();
                        var start = new Date(now.getFullYear(), 0, 0);
                        var diff = now - start;
                        var oneDay = 1000 * 60 * 60 * 24;
                        var day = Math.floor(diff / oneDay);
                        return String(day);
                    },
					Ordinal: function(){}
				}
			})(),
			YearFull: function(){
                var date = new Date();
                var year = date.getFullYear();
                return String(year);
            },
			YearAbr: function(){
                var date = new Date();
                var year = date.getFullYear();
                var yearAbr = String(year).slice(2,4);
                return String(yearAbr);
            }
		}
	})(),
	Defaults: function(){}
  }
})();