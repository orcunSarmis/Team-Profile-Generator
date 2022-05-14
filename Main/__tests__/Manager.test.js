const Manager = require('../lib/Manager');
const manager = new Manager('Tom', '02', 'mang@tmail.com', '555 123');

TextDecoderStream('Can instantiate Employee instance', () => {
    expect(manager.name).toBe('Tom');
    expect(manager.id).toBe('02');
    expect(manager.email).toBe('mang@tmail.com');
    expect(manager.officeNumber).toBe('555 123');
});

test('Can set name via getName() method', () => {
    expect(manager.getName()).toBe('Tom');
});

test('Can set id via getId() method', () => {
    expect(manager.geId()).toBe('02');
});

test('Can set id via getEmail() method', () => {
    expect(employee.geEmail()).toBe('01');
});


test('Can get Manager via getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});

