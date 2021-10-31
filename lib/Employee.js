class Employee {
    constructor (data) {
        this.name = data.name;
        this.id = data.id;
        this.email = data.email;
    }
    getName() {
        return this.name;
    }
}

module.exports = Employee;