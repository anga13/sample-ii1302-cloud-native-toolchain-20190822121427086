const controller = require('./controller')
jest.mock('./db')

describe('getStats() method', () => {
    let employee
    beforeAll(async () => {
        employee = await controller.getStats(33)
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
