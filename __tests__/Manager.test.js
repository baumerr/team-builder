const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    data = {
        name: 'Randy',
        id: 1,
        email: 'randy.baumer@hotmail.com',
        officeNumber: 23
    }

    const manager = new Manager(data);

    expect(manager.name).toBe('Randy');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets managers name', () => {
    data = {
        name: 'Randy',
        id: 1,
        email: 'randy.baumer@hotmail.com',
        officeNumber: 23
    }
    const manager = new Manager(data);

    expect(manager.getName()).toBe(manager.name);
});

test('gets managers id', () => {
    data = {
        name: 'Randy',
        id: 1,
        email: 'randy.baumer@hotmail.com',
        officeNumber: 23
    }
    const manager = new Manager(data);

    expect(manager.getId()).toBe(manager.id);
});

test('gets managers email', () => {
    data = {
        name: 'Randy',
        id: 1,
        email: 'randy.baumer@hotmail.com',
        officeNumber: 23
    }
    const manager = new Manager(data);

    expect(manager.getEmail()).toBe(manager.email);
});

test('gets managers role', () => {
    data = {
        name: 'Randy',
        id: 1,
        email: 'randy.baumer@hotmail.com',
        officeNumber: 23
    }
    const manager = new Manager(data);

    expect(manager.getRole()).toBe('Manager');
});