//----------------------- Kata 9 ------------------------------------

const talkingCalendar = (data) => {
   
    let date = data.split('/')
    let monthNum = date[1] 
    let dayNum = date[2] 
    let year = date[0]
    let suffix

    if (Number(monthNum) < 10) {
        monthNum = date[1].replace('0', '')
    }

    if (Number(dayNum) < 10) {
        dayNum = date[2].replace('0', '')
    }

    if (dayNum === '1') {
        suffix = 'st'
    } else if ( dayNum === '2' || dayNum === '3') {
        suffix = 'nd'
    } else {
        suffix = 'th'
    }

    months = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
    }

    return `${months[monthNum]} ${dayNum}${suffix}, ${year}`
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));