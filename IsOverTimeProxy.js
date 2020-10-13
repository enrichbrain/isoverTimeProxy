
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// rl.question('请输入时间:\n', (answer) => {
//
//   let nowTimer = new Date(answer);
//   let res = {
//     getFullYear: nowTimer.getFullYear(),
//     getMonth: nowTimer.getMonth()+1,
//     getDay: nowTimer.getDay(),
//     getHours: nowTimer.getHours(),
//     getMinutes: nowTimer.getMinutes(),
//     getSeconds: nowTimer.getSeconds()
//   }
//   JudgeIsWeekend(nowTimer);
//   /*
//     判断是否是周末和是否超过规定时间
//    */
//   function JudgeIsWeekend(nowTimer)
//   {
//     let lastTimer = new Date('1900-01-01 00:00:00').getFullYear();
//     let endTimer = new Date('2050-01-01 00:00:00').getFullYear();
//
//     let notWeekend = [1,2,3,4,5];
//     /*
//       判断是否超过规定时间
//      */
//     if((nowTimer.getFullYear() >= lastTimer) &&(nowTimer.getFullYear() <= endTimer))
//     {
//       /*
//         判断是否是周末
//        */
//       if(notWeekend.includes(new Date(answer).getDay()))
//       {
//         judgeTime(nowTimer);
//       }
//       else
//       {
//         let result = judgeIsOverMonthDays(nowTimer.getFullYear(),(nowTimer.getMonth() + 1),nowTimer.getDate(),2)
//         if(result.newYear >= 2050)
//         {
//           console.log("对不起你输入的时间工作后已经超出时间！")
//         }
//         else
//         {
//           res.getFullYear = result.newYear;
//           res.getMonth = result.newMonth;
//           res.getDay = result.newDay;
//           res.getHours = 11;
//           res.getMinutes = '00';
//           res.getSeconds = '00';
//           display(res)
//         }
//
//       }
//     }
//     else
//     {
//       console.log("对不起你输入的时间已经超过时间范围！")
//     }
//   }
//
//   /*
//     判断时间段
//    */
//   function judgeTime(nowTimer)
//   {
//     if((nowTimer.getHours() >= 8)&&(nowTimer.getHours() <= 10))
//     {
//       res.getHours = nowTimer.getHours() + 3;
//       display(res)
//     }
//
//     else if((nowTimer.getHours() > 10)&&(nowTimer.getHours() <=12))
//     {
//       res.getHours = nowTimer.getHours() + 5;
//       display(res)
//     }
//     else if((nowTimer.getHours() > 12)&&(nowTimer.getHours() <=15))
//     {
//       res.getHours = 17;
//       display(res)
//     }
//     else if((nowTimer.getHours() > 15)&&(nowTimer.getHours() <= 18))
//     {
//
//       res.getHours = 3 - (18 - nowTimer.getHours()) + 8;
//
//       let result = judgeIsOverMonthDays(nowTimer.getFullYear(),(nowTimer.getMonth() + 1),nowTimer.getDate(),1)
//
//       if(result.newYear >= 2050)
//       {
//         console.log("对不起你输入的时间工作后已经超出时间！")
//       }
//       else
//       {
//         res.getFullYear = result.newYear;
//         res.getMonth = result.newMonth;
//         res.getDay = result.newDay;
//         display(res)
//       }
//
//     }
//     else if((nowTimer.getHours() >= 0)&&(nowTimer.getHours() <= 8))
//     {
//
//       res.getHours = 11;
//       res.getMinutes = '00';
//       res.getSeconds = '00';
//       display(res)
//
//     }
//     else
//     {
//       let result = judgeIsOverMonthDays(nowTimer.getFullYear(),(nowTimer.getMonth() + 1),nowTimer.getDate(),1)
//       if(result.newYear >= 2050)
//       {
//         console.log("对不起你输入的时间工作后已经超出时间！")
//       }
//       else
//       {
//         res.getHours = 11;
//         res.getMinutes = '00';
//         res.getSeconds = '00';
//         res.getFullYear = result.newYear;
//         res.getMonth = result.newMonth;
//         res.getDay = result.newDay;
//         display(res)
//
//       }
//     }
//   }
//   /*
//     判断是否超过这个月的天数和年数
//    */
//   function judgeIsOverMonthDays(year,month,day,isDay)
//   {
//     let month_days = {
//       1:31,
//       2:[28,29],
//       3:31,
//       4:30,
//       5:31,
//       6:30,
//       7:31,
//       8:31,
//       9:30,
//       10:31,
//       11:30,
//       12:31
//     }
//     let result = {
//       newYear:year,
//       newMonth:month,
//       newDay:day
//     };
//     if(((year%4 == 0)&&(year%100 != 0)) || (year % 400 == 0))
//     {
//       if(month == 2)
//       {
//         if((day+isDay) > month_days[2][1])
//         {
//           result.newMonth = month+1;
//           result.newDay = day+isDay-month_days[2][1];
//         }
//         else
//         {
//           result.newMonth = month;
//           result.newDay = day+isDay;
//         }
//       }
//       else if(month == 12)
//       {
//
//         if((day+isDay) > month_days[12])
//         {
//
//           result.newMonth = 1;
//           result.newDay = day+isDay - month_days[12];
//           result.newYear = year + 1;
//         }
//         else
//         {
//           result.newMonth = month;
//           result.newDay = day+isDay;
//         }
//       }
//       else
//       {
//         if((day+2) > month_days[month])
//         {
//           result.newMonth = month + 1;
//           result.newDay = day + isDay - month_days[month];
//
//         }
//         else
//         {
//           result.newMonth = month;
//           result.newDay = day+isDay;
//         }
//       }
//     }
//     else
//     {
//       if(month == 2)
//       {
//         if((day+isDay) > month_days[2][0])
//         {
//           result.newMonth = month+1;
//           result.newDay = day+isDay-month_days[2][1];
//         }
//         else
//         {
//           result.newMonth = month;
//           result.newDay = day+isDay;
//         }
//       }
//       else if(month == 12)
//       {
//
//         if((day+isDay) > month_days[12])
//         {
//
//           result.newMonth = 1;
//           result.newDay = day+isDay - month_days[12];
//           result.newYear = year + 1;
//         }
//         else
//         {
//           result.newMonth = month;
//           result.newDay = day+isDay;
//         }
//       }
//       else
//       {
//         if((day+2) > month_days[month])
//         {
//           result.newMonth = month + 1;
//           result.newDay = day + isDay - month_days[month];
//
//         }
//         else
//         {
//           result.newMonth = month;
//           result.newDay = day+isDay;
//         }
//       }
//     }
//     return result;
//   }
//   /*
//     输出函数
//    */
//   function display(result)
//   {
//     if(result.getMonth >= 10)
//     {
//       if (result.getDay >= 10)
//       {
//         console.log(result.getFullYear + "-" + result.getMonth + "-" + result.getDay + " " + result.getHours + ":" + result.getMinutes + ":" + result.getSeconds)
//       }
//       else
//         {
//           console.log(result.getFullYear + "-" + result.getMonth + "-0" + result.getDay + " " + result.getHours + ":" + result.getMinutes + ":" + result.getSeconds)
//       }
//
//     }
//     else
//     {
//       if (result.getDay >= 10)
//       {
//         console.log(result.getFullYear + "-0" + result.getMonth + "-" + result.getDay + " " + result.getHours + ":" + result.getMinutes + ":" + result.getSeconds)
//       }
//       else
//       {
//         console.log(result.getFullYear + "-0" + result.getMonth + "-0" + result.getDay + " " + result.getHours + ":" + result.getMinutes + ":" + result.getSeconds)
//       }
//     }
//
//   }
//
//   rl.close();
// });


