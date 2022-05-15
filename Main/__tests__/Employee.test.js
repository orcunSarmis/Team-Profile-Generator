// This code includes Employee class
const Employee = require('../lib/Employee');
// const _employee = new Employee('Orcun', '01', 'orcun@gmail.com');

test('Can instantiate _employee instance', () => {
    const _employee = new Employee('Orcun', '01', 'orcun@gmail.com');
    expect(_employee.name).toBe('Orcun');
    expect(_employee.id).toBe('01');
    expect(_employee.email).toBe('orcun@gmail.com');
});
// getName method test
test('Can get name via getName() method', () => {
    const _employee = new Employee('Orcun', '01', 'orcun@gmail.com');
    expect(_employee.getName()).toBe('Orcun');
});
// getId method test
test('Can get id via getId() method', () => {
    const _employee = new Employee('Orcun', '01', 'orcun@gmail.com');
    expect(_employee.getId()).toBe('01');
});
// getEmail method test
test('Can get email via getEmail() method', () => {
    const _employee = new Employee('Orcun', '01', 'orcun@gmail.com');
    expect(_employee.getEmail()).toBe('orcun@gmail.com');
});
// getRole method test
test('Can get Employee via getRole() method', () => {
    const _employee = new Employee('Orcun', '01', 'orcun@gmail.com');
    expect(_employee.getRole()).toBe('Employee');
});