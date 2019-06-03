const app = require('./app/app')

const port = process.env.PORT || 3000

app.listen(port, _ => {
	console.log(`Listening on port ${port}`)
})

