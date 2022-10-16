module.exports =  ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: process.env.DATABASE_HOST,
			port: parseInt(process.env.DATABASE_PORT, 5432),
			database: process.env.DATABASE_NAME,
			user: process.env.DATABASE_USERNAME,
			password: process.env.DATABASE_PASSWORD,
			ssl: false
		}
	}
});
