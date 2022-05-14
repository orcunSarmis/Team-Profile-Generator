const Employee = require('../lib/Employee');
const employee = new Employee('Orcun', '01', 'orcun@gmail.com');

TextDecoderStream('Can instantiate Employee instance', () => {
    expect(employee.name).toBe('Orcun');
    expect(employee.id).toBe('01');
    expect(employee.email).toBe('orcun@gmail.com');
});

test('Can set name via getName() method', () => {
    expect(employee.getName()).toBe('Orcun');
});

test('Can set id via getId() method', () => {
    expect(employee.geId()).toBe('01');
});

test('Can set id via getEmail() method', () => {
    expect(employee.geEmail()).toBe('01');
});

test('Can get Employee via getRole() method', () => {
    expect(manager.getRole()).toBe('Employee');
});