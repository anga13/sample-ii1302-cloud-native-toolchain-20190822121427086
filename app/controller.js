const db = require('./db')

module.exports = {
    async getStats(id) {
        const employee = await db.findEmployee(id)
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
