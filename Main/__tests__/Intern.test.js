// This code includes intern class
const Intern = require('../lib/Intern');
const intern = new Intern('Guy', '04', 'guy@tmail.com', 'Hogwarts');

test('Can instantiate Intern instance', () => {
    expect(intern.name).toBe('Guy');
    expect(intern.id).toBe('04');
    expect(intern.email).toBe('guy@tmail.com');
    expect(intern.school).toBe('Hogwarts');
});
// getName method test
test('Can get name via getName() method', () => {
    expect(intern.getName()).toBe('Guy');
});
// getId method test
test('Can get id via getId() method', () => {
    expect(intern.getId()).toBe('04');
});
// getEmail method test
test('Can get email via getEmail() method', () => {
    expect(intern.getEmail()).toBe('guy@tmail.com');
});
// getSchool method test
test('Can get school name via getSchool() method', () => {
    expect(intern.getSchool()).toBe('Hogwarts');
});
// getRole method test
test('Can get intern via getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});
