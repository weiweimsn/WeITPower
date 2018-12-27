// input: year, province
// output: an array of stat holidays

var CanadaStatHolidays = {
    statHolidays: {},
    getStatHolidays: function (year, province = "Ontario") {
        statHolidays.push(getNewYearsDay());
        statHolidays.push(getFamilyDay());
        statHolidays.push(getGoodFriDay());
        statHolidays.push(getVictoriaDay());
        statHolidays.push(getCanadaDay());
        statHolidays.push(getCivicDay());
        statHolidays.push(getLabourDay());
        statHolidays.push(getThanksgivingDay());
        statHolidays.push(getChrismasDay());
        statHolidays.push(getBoxingDay());
    },
    getNewYearsDay: function (year) {
        const date = new Date(year, 0, 1);

        // The getDay() method returns the day of the week (from 0 to 6) for the specified date.
        var weekday = date.getDay();

        // today's date
        var today = date.getDate();

        // Saturday
        if (weekday === 6) {
            return [{ '0101': 'New Years Day' },{ '0103': 'New Years Day' }];
        }
        // Sunday
        else if (weekday === 0) {
            return [{ '0101': 'New Years Day' },{ '0102': 'New Years Day' }];
        }
        else {
            return { '0101': 'New Years Day' };
        }
    },
    getFamilyDay: function (year, province = "Ontario") {
        const date = new Date(year, 1, 1);

        // The getDay() method returns the day of the week (from 0 to 6) for the specified date.
        var weekday = date.getDay();

        // today's date
        var today = date.getDate();

        switch (weekday) {
            case 0:
                const key = "02" + today + 22;
                return { key: "Family Day" };
            case 1:
                const key = "02" + today + 21;
                return { key: "Family Day" };
            case 2:
                const key = "02" + today + 20;
                return { key: "Family Day" };
            case 3:
                const key = "02" + today + 19;
                return { key: "Family Day" };
            // Thursday
            case 4:
                const key = "02" + today + 18;
                return { key: "Family Day" };
            case 5:
                const key = "02" + today + 17;
                return { key: "Family Day" };
            case 6:
                const key = "02" + today + 16;
                return { key: "Family Day" };
        }
    },
    getGoodFriDay: function (year, province = "Ontario") {
        const easterSunday = this.getEasterSunday(year, province);
        var dayInMonth = easterSunday.getDate() - 2;
        var month = easterSunday.getMonth() + 1;
        if(dayInMonth <= 0){
            month --;
            dayInMonth += 31; // 31 is from the number of days in March
        }
        var day = easterSunday - 2;
        if(day < 10){
            var key = "0" + month + "0" + day;
        }
        else{
            var key = "0" + month + key;
        }
        return {key: "Good Friday"};
    },
    getVictoriaDay: function (year, province = "Ontario") {
        const date = new Date(year, 4, 24);
        const weekday = date.getDay();
        const today = date.getDate();
        switch (weekday) {
            case 0:
                const key = "05" + today - 6;
                return { key: "Victoria Day" };
            case 1:
                const key = "05" + today;
                return { key: "Victoria Day" };
            case 2:
                const key = "05" + today - 1;
                return { key: "Victoria Day" };
            case 3:
                const key = "05" + today - 2;
                return { key: "Victoria Day" };
            // Thursday
            case 4:
                const key = "05" + today - 3;
                return { key: "Victoria Day" };
            case 5:
                const key = "05" + today - 4;
                return { key: "Victoria Day" };
            case 6:
                const key = "05" + today - 5;
                return { key: "Victoria Day" };
        }
    },
    getCanadaDay: function (year, province = "Ontario") {
        const date = new Date(year, 6, 1);

        // The getDay() method returns the day of the week (from 0 to 6) for the specified date.
        var weekday = date.getDay();

        // today's date
        var today = date.getDate();

        // Saturday
        if (weekday === 6) {
            return [{ '0630': 'Canada Day' },{ '0701': 'Canada Day' }];
        }
        // Sunday
        else if (weekday === 0) {
            return [{ '0701': 'Canada Day' }, { '0702': 'Canada Day' }];
        }
        else {
            return { '0701': 'Canada Day' };
        }

    },
    getCivicDay: function (year, province = "Ontario") {
        const date = new Date(year, 7, 1);

        // The getDay() method returns the day of the week (from 0 to 6) for the specified date.
        var weekday = date.getDay();

        // today's date
        var today = date.getDate();

        switch (weekday) {
            case 0:
                const key = "08" + today + 1;
                return { key: "Civic Day" };
            case 1:
                const key = "08" + today;
                return { key: "Civic Day" };
            case 2:
                const key = "08" + today + 6;
                return { key: "Civic Day" };
            case 3:
                const key = "08" + today  + 5;
                return { key: "Civic Day" };
            // Thursday
            case 4:
                const key = "08" + today + 4;
                return { key: "Civic Day" };
            case 5:
                const key = "08" + today + 3;
                return { key: "Civic Day" };
            case 6:
                const key = "08" + today + 2;
                return { key: "Civic Day" };
        }
    },
    getLabourDay: function (year, province = "Ontario") {
        const date = new Date(year, 8, 1);

        // The getDay() method returns the day of the week (from 0 to 6) for the specified date.
        var weekday = date.getDay();

        // today's date
        var today = date.getDate();

        switch (weekday) {
            case 0:
                const key = "09" + today + 1;
                return { key: "Labour Day" };
            case 1:
                const key = "09" + today;
                return { key: "Labour Day" };
            case 2:
                const key = "09" + today + 6;
                return { key: "Labour Day" };
            case 3:
                const key = "09" + today  + 5;
                return { key: "Labour Day" };
            // Thursday
            case 4:
                const key = "09" + today + 4;
                return { key: "Labour Day" };
            case 5:
                const key = "09" + today + 3;
                return { key: "Labour Day" };
            case 6:
                const key = "09" + today + 2;
                return { key: "Labour Day" };
        }
    },
    getThanksgivingDay: function (year, province = "Ontario") {
        const date = new Date(year, 9, 1);

        // The getDay() method returns the day of the week (from 0 to 6) for the specified date.
        var weekday = date.getDay();

        // today's date
        var today = date.getDate();

        switch (weekday) {
            case 0:
                const key = "10" + today + 8;
                return { key: "Thanksgiving Day" };
            case 1:
                const key = "10" + today + 7;
                return { key: "Thanksgiving Day" };
            case 2:
                const key = "10" + today + 13;
                return { key: "Thanksgiving Day" };
            case 3:
                const key = "10" + today  + 12;
                return { key: "Thanksgiving Day" };
            // Thursday
            case 4:
                const key = "10" + today + 11;
                return { key: "Thanksgiving Day" };
            case 5:
                const key = "10" + today + 10;
                return { key: "Thanksgiving Day" };
            case 6:
                const key = "10" + today + 9;
                return { key: "Thanksgiving Day" };
        }
    },
    getChrismasDay: function (year, province = "Ontario") {
        const date = new Date(year, 6, 1);

        // The getDay() method returns the day of the week (from 0 to 6) for the specified date.
        var weekday = date.getDay();

        // today's date
        var today = date.getDate();

        // Saturday
        if (weekday === 6) {
            return [{ '1224': 'Chrismas Day' },{ '1225': 'Chrismas Day' }];
        }
        // Sunday
        else if (weekday === 0) {
            return [{ '1225': 'Chrismas Day' }, { '1226': 'Chrismas Day' }];
        }
        else {
            return { '1225': 'Chrismas Day' };
        }
    },
    getBoxingDay: function (year, province = "Ontario") {
        const date = new Date(year, 6, 1);

        // The getDay() method returns the day of the week (from 0 to 6) for the specified date.
        var weekday = date.getDay();

        // today's date
        var today = date.getDate();

        // Saturday
        if (weekday === 6) {
            return [{ '1226': 'Boxing Day' },{ '1228': 'Boxing Day' }];
        }
        // Sunday
        else if (weekday === 0) {
            return [{ '1226': 'Boxing Day' }, { '1227': 'Boxing Day' }];
        }
        else {
            return { '1226': 'Boxing Day' };
        }
    },

    getEasterSunday: function(year, province = "Ontario") {
        var day = 0;
        var month = 0;
    
        var g = year % 19;
        var c = year / 100;
        var h = (c - (int)(c / 4) - (int)((8 * c + 13) / 25) + 19 * g + 15) % 30;
        var i = h - (int)(h / 28) * (1 - (int)(h / 28) * (int)(29 / (h + 1)) * (int)((21 - g) / 11));
    
        day   = i - ((year + (int)(year / 4) + i + 2 - c + (int)(c / 4)) % 7) + 28;
        month = 3;
    
        if (day > 31)
        {
            month++;
            day -= 31;
        }
    
        return new Date(year, month, day);
    }
}