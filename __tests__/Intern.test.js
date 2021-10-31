const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    data = {
        name: 'Randy',
        id: 1,
        email: 'randy.baumer@hotmail.com',
        school: 'bootcamp'
    }

    const intern = new Intern(data);

    expect(intern.name).toBe('Randy');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('gets interns name', () => {
    data = {
        name: 'Randy',
        id: 1,
        email: 'randy.baumer@hotmail.com',
        school: 'bootcamp'
    }
    const intern = new Intern(data);

    expect(intern.getName()).toBe(intern.name);
});

test('gets interns id', () => {
    data = {
        name: 'Randy',
        id: 1,
        email: 'randy.baumer@hotmail.com',
        school: 'bootcamp'
    }
    const intern = new Intern(data);

    expect(intern.getId()).toBe(intern.id);
});

test('gets interns email', () => {
    data = {
        name: 'Randy',
        id: 1,
        email: 'randy.baumer@hotmail.com',
        school: 'bootcamp'
    }
    const intern = new Intern(data);

    expect(intern.getEmail()).toBe(intern.email);
});

test('gets interns role', () => {
    data = {
        name: 'Randy',
        id: 1,
        email: 'randy.baumer@hotmail.com',
        school: 'bootcamp'
    }
    const intern = new Intern(data);

    expect(intern.getRole()).toBe('Intern');
});

test('gets interns school', () => {
    data = {
        name: 'Randy',
        id: 1,
        email: 'randy.baumer@hotmail.com',
        school: 'bootcamp'
    }
    const intern = new Intern(data);

    expect(intern.getSchool()).toBe(intern.school);
});