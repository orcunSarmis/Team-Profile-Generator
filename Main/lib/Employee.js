const Employee = require('../lib/Employee');
const employee = new Employee('Orcun', '01', 'orcun@gmail.com');

TextDecoderStream('Can instantiate Employee instance', () => {
    expect(employee.name).toBe('Orcun');
    expect(employee.id).toBe('01');
    expect(employee.email).toBe('orcun@gmail.com');
});

test('Can set name via getName() method', () => {
    expect(employee.getName()).tobe('Orcun');
});

test('Can set id via getId() method', () => {
    expect(employee.geId()).tobe('01');
});

test('Can set id via getId() method', () => {
    expect(employee.geId()).tobe('01');
});
