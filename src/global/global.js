export const formatTime = (value) => {
    let date = new Date()
    let [currentYear, currentMouth, currentDay, currentHour, currentMinutes] = [date.getFullYear(), date.getMonth(), date.getDay(), date.getHours(), date.getMinutes()]
    let getDate = new Date(Date.parse(value))
    let [getDateYear, getDateMouth, getDateDay, getDateHour, getDateMinutes] = [getDate.getFullYear(), getDate.getMonth(), getDate.getDay(), getDate.getHours(), getDate.getMinutes()]
    if ((currentYear - getDateYear) >= 1) {
        return (currentYear - getDateYear) + ' ' + '年前'
    } else if ((currentMouth - getDateMouth) >= 1) {
        return (currentMouth - getDateMouth) + ' ' + '个月前'
    } else if ((currentDay - getDateDay) >= 1) {
        return (currentDay - getDateDay) + ' ' + '天前'
    } else if ((currentHour - getDateHour) >= 1) {
        return (currentHour - getDateHour) + ' ' + '小时前'
    } else {
        if ((currentMinutes - getDateMinutes) >= 1) {
            return (currentMinutes - getDateMinutes) + ' ' + '分钟前'
        } else {
            return '刚刚'
        }
    }
}
export const transferString = (content) => {
    let string = ''
    string = content
    string = string.replace(/\n/g, "<br>")
    return string
}