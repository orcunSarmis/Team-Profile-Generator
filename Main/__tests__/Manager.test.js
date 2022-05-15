// This code includes Manager class
const Manager = require('../lib/Manager');
const manager = new Manager('Tom', '02', 'mang@tmail.com', '555 123');

test('Can instantiate Manager instance', () => {
    expect(manager.name).toBe('Tom');
    expect(manager.id).toBe('02');
    expect(manager.email).toBe('mang@tmail.com');
    expect(manager.officeNumber).toBe('555 123');
});
// getName method test
test('Can get name via getName() method', () => {
    expect(manager.getName()).toBe('Tom');
});
// getId method test
test('Can get id via getId() method', () => {
    expect(manager.getId()).toBe('02');
});
// getEmail method test
test('Can get email via getEmail() method', () => {
    expect(manager.getEmail()).toBe('mang@tmail.com');
});
// getOfficeNumber method test
test('Can get office number via getofficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('555 123');
});
// getRole method test
test('Can get Manager via getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});

