function getDateOfBirthFromUser() {
    var year = prompt("Enter your year of birth : ");
    const currentYear = new Date().getFullYear();
    var age = currentYear - year;
    if (age > 0) {
        alert("Your age is " + age);
    }
    else {
        alert("You don`t enter your year of birth");
    }
}
function getCountOfFiles() {
    var size = prompt("Enter the value of your flash-drive in Gbytes : ");
    const sizeOfFile = 820;
    var count = size * 1024 / sizeOfFile;
    if (count > 0) {
        alert("Your flash-drive can contain " + Math.floor(count) + " files");
    }
    else {
        alert("Incorrect input size: " + size);
    }
}
function getSymbByNumber() {
    var number = prompt("Enter symbol : ");
    var symbol;
    switch (parseInt(number)) {
        case 0:
            symbol = ")";
            break;
        case 1:
            symbol = "!";
            break;
        case 2:
            symbol = "@";
            break;
        case 3:
            symbol = "#";
            break;
        case 4:
            symbol = "$";
            break;
        case 5:
            symbol = "%";
            break;
        case 6:
            symbol = "^";
            break;
        case 7:
            symbol = "&";
            break;
        case 8:
            symbol = "*";
            break;
        case 9:
            symbol = "(";
            break;
        default:
            symbol = "Unknown sym!";
            break;
    }
    alert(symbol);
}
function isYearLeap() {
    var year = prompt("Enter year you want know is leap : ");
    var isLeapYear = ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0));
    var res = isLeapYear ? "Year is leap " : "Year isn`t leap";
    alert(res);
}

function nextDay() {
    var day = prompt("Enter day : ");
    var month = prompt("Enter month : ");
    var year = prompt("Enter year : ");
    var isLeapYear = ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0));
    var dayInMonth;
    if (month === "2") {
        dayInMonth = isLeapYear ? 29 : 28;
    }
    else if (month === "4" || month === "6" || month === "9" || month === "11") {
        dayInMonth = 30;
    }
    else {
        dayInMonth = 31;
    }
    var nextDay = Number(day) + 1;
    var nextMonth = Number(month);
    var nextYear = Number(year);

    if (nextDay > dayInMonth) {
        nextDay = 1;
        nextMonth++;
        if (nextMonth > 12) {
            nextMonth = 1;
            nextYear++;
        }
    }
    alert("Next day: " + nextDay + " Next month: " + nextMonth + " Next year: " + nextYear);
}

function sumInDiapasone() {
    var start = prompt("Enter start of diapasone : ");
    var finish = prompt("Enter finish of diapasone : ");
    var sum = 0;
    for (var i = parseInt(start); i <= parseInt(finish); i++) {
        sum += i;
    }
    alert("Sum of numbers in diapasone: " + sum);
}
function countNumsInDigit1() {
    var number = prompt("Enter number : ");
    var digitCount = number.toString().length;
    alert("You have " + digitCount + " digits in " + number);
}
function countNumsInDigit2() {
    var number = prompt("Enter number :");
    var digitCount = 0;
    var absoluteValue = Math.abs(number);

    while (absoluteValue >= 1) {
        absoluteValue = Math.floor(absoluteValue / 10);
        digitCount++;
    }

    alert("Count of digits in your number : " + digitCount);
}
function tenNumberStatistic() {
    var number = 10;
    var even = 0, notEven = 0, positive = 0, negative = 0, zero = 0;
    while (number > 0) {
        var digit = prompt("Enter number:");

        if (parseInt(digit) % 2 === 0) {
            even += 1;
        } else {
            notEven += 1;
        }

        if (parseInt(digit) > 0) {
            positive += 1;
        } else if (parseInt(digit) < 0) {
            negative += 1;
        } else {
            zero += 1;
        }

        number--;
    }
    alert("You entered : " + "\nEven number : " + even + "\nNot even numbers : " + notEven + "\nPositive numbers : " + positive + "\nNegative numbers : " + negative + "\Zero`s : " + zero);
}

function loopDaysOfWeek() {
    var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var index = 0;

    while (confirm(daysOfWeek[index] + ". Do you want to see next day?")) {
        index = (index + 1) % daysOfWeek.length;
    }
}
loopDaysOfWeek();
//tenNumberStatistic();
//countNumsInDigit2();
//countNumsInDigit1();
//sumInDiapasone();
// nextDay();
// isYearLeap();
// getSymbByNumber();
// getDateOfBirthFromUser();
// getCountOfFiles();
