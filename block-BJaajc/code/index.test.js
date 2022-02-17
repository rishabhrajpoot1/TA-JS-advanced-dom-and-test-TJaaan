const functions = require('./index');

// TESTS FOR FUNCTION getFullName

test('get full name to be John Snow', () => {
  expect(functions.getFullName('John', 'Snow')).toBe('John Snow');
});

test('get full name to be Arya Stark', () => {
  expect(functions.getFullName('Arya', 'Stark')).toBe('Arya Stark');
});

test('get full name to be Shishupal Kumar', () => {
  expect(functions.getFullName('Shishupal', 'Kumar')).toBe('Shishupal Kumar');
});

test('get full name not to be Shishupal Singh', () => {
  expect(functions.getFullName('Shishupal', 'Kumar')).not.toBe(
    'Shishupal Singh'
  );
});

test('get full name not to be empty', () => {
  expect(functions.getFullName('Shishupal', 'Kumar')).not.toBe('');
});

test('get full name not to be undefined', () => {
  expect(functions.getFullName('Shishupal', 'Kumar')).not.toBe(undefined);
});

// TEST FOR FUNCTION ispalindrome

test('Jalaj is a Palindrome', () => {
  expect(functions.isPalindrome('jalaj')).toBe(true);
});

test('Naman is a Palindrome', () => {
  expect(functions.isPalindrome('naman')).toBe(true);
});

test('reviver is a Palindrome', () => {
  expect(functions.isPalindrome('reviver')).toBe(true);
});

test('receiver is not a Palindrome', () => {
  expect(functions.isPalindrome('receiver')).not.toBe(true);
});

test('JavaScript is not a Palindrome', () => {
  expect(functions.isPalindrome('javascript')).not.toBe(true);
});

test('html is not a Palindrome', () => {
    expect(functions.isPalindrome('html')).not.toBe(true);
  });


//   TESTS FOR FUNCTION getCircumference

test('Circumfrence of circle with radius 7 is 43', () => {
    expect(functions.getCircumference(7)).toBe('The circumference is 43');
});

test('Circumfrence of circle with radius 7 is 43', () => {
    expect(functions.getCircumference(7)).toBe('The circumference is 43');
});
test('Circumfrence of circle with radius 5 is 31', () => {
    expect(functions.getCircumference(5)).toBe('The circumference is 31');
});

test('Circumfrence of circle with radius 10 is 62', () => {
    expect(functions.getCircumference(10)).toBe('The circumference is 62');
});


test('Area of circle with radius 10 is 314', () => {
    expect(functions.getAreaOfCircle(10)).toBe('The area is 314');
});

test('Area of circle with radius 7 is 153', () => {
    expect(functions.getAreaOfCircle(7)).toBe('The area is 153');
});

test('Area of circle with radius 5 is 78', () => {
    expect(functions.getAreaOfCircle(5)).toBe('The area is 78');
});