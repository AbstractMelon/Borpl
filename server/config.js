// Example configuration file

module.exports = {
    // Database configuration
    database: {
        host: 'localhost',
        port: 27017,
        dbName: 'borpl',
        // Add more database configuration options as needed
    },
    // Server configuration
    server: {
        port: process.env.PORT || 5000,
        // Add more server configuration options as needed
    },
    // Other configurations
    // Add other configurations such as API keys, secret keys, etc.
};
