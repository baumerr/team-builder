
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
});

test('gets employees id', () => {
    data = {
        name: 'Randy',
        id: 1,
        email: 'randy.baumer@hotmail.com'
    }
    const employee = new Employee(data);

    expect(employee.getId()).toBe(employee.id);
});

test('gets employees email', () => {
    data = {
        name: 'Randy',
        id: 1,
        email: 'randy.baumer@hotmail.com'
    }
    const employee = new Employee(data);

    expect(employee.getEmail()).toBe(employee.email);
});

test('gets employees role', () => {
    data = {
        name: 'Randy',
        id: 1,
        email: 'randy.baumer@hotmail.com'
    }
    const employee = new Employee(data);

    expect(employee.getRole()).toBe('Employee');
});