const converter = require('number-to-words');

function youSayDollarISayWords(amount) {
    const processedAmount = amount.toFixed(2);
    const hasCents = processedAmount % 1 !== 0;
    let string = '';

    const dollar = processedAmount.toString().split('.')[0];

    if (amount < 0) {
        throw new Error('Stay positive is the key to success.');
    }

    if (amount > 1000) {
        throw new Error('Let\'s hold on right there! I can only say a number that is up to a thousand (1000).');
    }

    if (dollar >= 0) {
        string += converter.toWords(dollar);
        string += ' dollars'
    }

    if (hasCents) {
        const cents = processedAmount.toString().split('.')[1];

        if (dollar > 0) {
            string += ' and ';    
        }

        if (dollar === '0') {
            string = '';
        }

        string +=  converter.toWords(cents);
        string += ' cents';
    }
    
    return string.replace(/-/g, ' ');
}

module.exports = {
    youSayDollarISayWords,
}
