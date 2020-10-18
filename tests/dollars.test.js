const { youSayDollarISayWords } = require('../src/index');

test('Cent', () => {
    expect(youSayDollarISayWords(0.03)).toBe('three cents');
});

test('Two digits cents below 0.2', () => {
    expect(youSayDollarISayWords(0.13)).toBe('thirteen cents');
});

test('Cent with 3 decimal places', () => {
    expect(youSayDollarISayWords(0.057)).toBe('six cents');
})

test('Single digit', () => {
    expect(youSayDollarISayWords(7)).toBe('seven dollars');
})

test('Zero dollars', () => {
    expect(youSayDollarISayWords(0)).toBe('zero dollars');
})

test('Two digits', () => {
    expect(youSayDollarISayWords(11)).toBe('eleven dollars');
})

test('Two digits with two digit cents below 20', () => {
    expect(youSayDollarISayWords(11.83)).toBe('eleven dollars and eighty three cents');
})

test('Two digits with two digits cents', () => {
    expect(youSayDollarISayWords(12.14)).toBe('twelve dollars and fourteen cents');
})

test('Two digits above twenty', () => {
    expect(youSayDollarISayWords(23)).toBe('twenty three dollars');
})

test('Three digits', () => {
    expect(youSayDollarISayWords(123)).toBe('one hundred twenty three dollars');
})

test('Three digits with cents', () => {
    expect(youSayDollarISayWords(871.43)).toBe('eight hundred seventy one dollars and forty three cents');
})

test('A thoursand', () => {
    expect(youSayDollarISayWords(1000)).toBe('one thousand dollars');
})

test('Exceed 1000', () => {
    expect(() => youSayDollarISayWords(1000.1)).toThrow('up to a thousand');
})

test('Negative number', () => {
    expect(() => youSayDollarISayWords(-18.1)).toThrow('positive');
})
