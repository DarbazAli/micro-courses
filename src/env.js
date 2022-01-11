const env = {
    appName: process.env.APP_NAME,
    env: process.env.NODE_ENV,
    port: parseInt(process.env.PORT, 10),
    version: packageJson.version,
}

export default env
