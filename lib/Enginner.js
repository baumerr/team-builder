const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (data) {
        super(data);

        this.github = data.github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return Engineer.name;
    }
}

module.exports = Engineer;