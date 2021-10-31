const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    data = {
        name: 'Randy',
        id: 1,
        email: 'randy.baumer@hotmail.com',
        github: 'baumerr'
    }

    const engineer = new Engineer(data);

    expect(engineer.name).toBe('Randy');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineers name', () => {
    data = {
        name: 'Randy',
        id: 1,
        email: 'randy.baumer@hotmail.com',
        github: 'baumerr'
    }
    const engineer = new Engineer(data);

    expect(engineer.getName()).toBe(engineer.name);
});

test('gets engineers id', () => {
    data = {
        name: 'Randy',
        id: 1,
        email: 'randy.baumer@hotmail.com',
        github: 'baumerr'
    }
    const engineer = new Engineer(data);

    expect(engineer.getId()).toBe(engineer.id);
});

test('gets engineers email', () => {
    data = {
        name: 'Randy',
        id: 1,
        email: 'randy.baumer@hotmail.com',
        github: 'baumerr'
    }
    const engineer = new Engineer(data);

    expect(engineer.getEmail()).toBe(engineer.email);
});

test('gets engineers role', () => {
    data = {
        name: 'Randy',
        id: 1,
        email: 'randy.baumer@hotmail.com',
        github: 'baumerr'
    }
    const engineer = new Engineer(data);

    expect(engineer.getRole()).toBe('Engineer');
});

test('gets engineers github', () => {
    data = {
        name: 'Randy',
        id: 1,
        email: 'randy.baumer@hotmail.com',
        github: 'baumerr'
    }
    const engineer = new Engineer(data);

    expect(engineer.getGithub()).toBe(engineer.github);
});
