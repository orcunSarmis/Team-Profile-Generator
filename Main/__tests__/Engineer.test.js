// This code includes Engineer class
const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Jason', '03', 'eng@tgail.com', 'Jason');

test('Can instantiate Engineer instance', () => {   
    expect(engineer.name).toBe('Jason');
    expect(engineer.id).toBe('03');
    expect(engineer.email).toBe('eng@tgail.com');
    expect(engineer.gitHub).toBe('Jason');
});
// getName method test
test('Can get name via getName() method', () => {
    expect(engineer.getName()).toBe('Jason');
});
// getId method test
test('Can get id via getId() method', () => {
    expect(engineer.getId()).toBe('03');
});
// getEmail method test
test('Can get email via getEmail() method', () => {
    expect(engineer.getEmail()).toBe('eng@tgail.com');
});
// getGitHub method test
test('Can get GitHub user name nia getGitHub()', () => {
    expect(engineer.getGitHub()).toBe('Jason');
})
// getRole method test
test('Can get Engineer via getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});