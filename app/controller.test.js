const db = require('./db')
const controller = require('./controller')
jest.mock('./db')

describe('getStats() method', () => {
    let employee
    beforeAll(async () => {
        db.findEmployee.mockResolvedValue({
            id: 33,
            firstName: 'Barney',
            lastName: 'Rubble'
        })
        employee = await controller.getStats(33)
    })
    test('Makes a call to db', () => {
        expect(db.findEmployee).toHaveBeenCalledWith(33)
    })
    test('Returns an instance of Employee', async () => {
        expect(employee).toBeDefined()
    })
    test('Returns correct values', async () => {
        expect(employee).toEqual(expect.objectContaining({
            id: 33,
            firstName: 'Barney',
            lastName: 'Rubble'
        }))
    })

})
