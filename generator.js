var plotly = require('plotly')('leehaei', '6Vw31h9ReggMDkwFDLs7');

//debt = tuition * progLength + (loan * (1 + loanInterest)) + housing
var tuition = 18000; // per year (during school)
var progLength = 4; // # of years (during school)
var loanInterest = 0.0645; // % increase per month
var incomeInterest = 0.03
var housing = 9600; // per year

// income
var grants = 5000; // (during school)
var loans = 8000; // per year (during school)
var incomeSchool = 0; // per year (during school)
var incomeGrad =  30000 //per year
var finHelp = 100; // per year (during school)

var values = [];
var dates = [];
var totaldebt = 0;
var currloan = loans;
var interest = 0;

function debtGenerator() {
    for(var i = 0; totaldebt >= 0; ++i) {
        var term = i + 1;
        if(term <= progLength) {
            totaldebt = totaldebt + currloan + housing + tuition - incomeSchool - finHelp;
            values.push(totaldebt);
        } else if(i >= 30) {
            break;
        } else {
            //adjusts for interest 
            interest = (totaldebt * Math.pow(1 + loanInterest, i - progLength)) - totaldebt;
            
            // adjusts for income increase
            incomeIncrease = (incomeGrad * Math.pow(1 + incomeInterest, i - progLength)) - incomeGrad;
            totaldebt = totaldebt + interest + housing - incomeGrad - incomeIncrease; 
            values.push(totaldebt);
        }
    }

    for(var i = 0; i < values.length; ++i) {
        var today = new Date();
        var date = (today.getFullYear() + i) +'-'+(today.getMonth() + 1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        console.log(dateTime);
        dates.push(dateTime);
    }

    var data = [
        {
          x: dates,
          y: values,
          type: "scatter"
        }
      ];
      var graphOptions = {filename: "date-axes", fileopt: "overwrite"};
      plotly.plot(data, graphOptions, function (err, msg) {
          console.log(msg);
      });
}

debtGenerator();
