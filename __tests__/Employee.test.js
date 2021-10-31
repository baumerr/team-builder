
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Randy');

    expect(employee.name).toBe('Randy');
})