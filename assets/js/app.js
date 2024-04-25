function toPersianNum(number)
{
    let englishNumber = number.toLocaleString().trim();
    let length = englishNumber.length;
    let foundPersianNumber;
    let persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    let result = '';

    for (let i = 0; i < length; i++) {
        foundPersianNumber = persianNumbers[englishNumber.charAt(i)];
        if (foundPersianNumber) {
            result += foundPersianNumber;
        } else {
            result += englishNumber.charAt(i);
        }
    }

    return result;
}