// Load the Cloudant library.
const Cloudant = require('@cloudant/cloudant')
const cfenv = require('cfenv')

const cloudant = initDB()

function initDB() {
    let vcapLocal

    try {
        vcapLocal = require('./vcap-local.json')
        //console.log('Loaded local VCAP', vcapLocal)
    } catch (e) {
        // No-op
    }

    const appEnvOpts = vcapLocal ? { vcap: vcapLocal} : {}

    const appEnv = cfenv.getAppEnv(appEnvOpts)

    // Initialize database with credentials for CF service named 'cloudantNoSQLDB'
    return Cloudant(appEnv.services['cloudantNoSQLDB'].credentials)
}

module.exports = {
    async allEmployees() {
        const db = cloudant.use('guys')
        const result = await db.list({include_docs:true})
        const guys = result.rows.map(row => {
            return {id: row.doc._id, firstName: row.doc.firstName, lastName: row.doc.lastName}
        })
        return guys
    }
}
