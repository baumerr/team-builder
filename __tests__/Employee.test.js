
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    data = {
        name: 'Randy',
        id: 1,
        email: 'randy.baumer@hotmail.com'
    }
    const employee = new Employee(data);

    expect(employee.name).toBe('Randy');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employees name', () => {
    data = {
        name: 'Randy',
        id: 1,
        email: 'randy.baumer@hotmail.com'
    }
    const employee = new Employee(data);

    expect(employee.getName()).toBe(employee.name);
})