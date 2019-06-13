const db = require('./db')

module.exports = {
    async getStats(id) {
        const employee = (employees.length>id)? employees[id]: employees[0]
        employee.stats = stats
        return employee
    },
    async today() {
        return db.allEmployees()
    },
    async hours() {
        return db.allEmployees()
    }
}

const stats = [
    {day: 'Mon', in: 7, out: 15},
    {day: 'Tue', in: 6, out: 14},
    {day: 'Wed', in: 8, out: 16},
    {day: 'Thu', in: 8, out: 16},
    {day: 'Fri', in: 7, out: 14}
]

const employees = [
    {
        id: 0,
        firstName: 'Fred',
        lastName: 'Flintstone',
    }, {
        id: 1,
        firstName: 'Barney',
        lastName: 'Rubble'
    }, {
        id: 2,
        firstName: 'Mr',
        lastName: 'Slate'
    }
]
