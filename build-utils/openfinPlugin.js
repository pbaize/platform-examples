const { launch, connect } = require('openfin-adapter');

let firstLaunch = true;
const launchWatch = async (url) => {
    const port = await launch({ manifestUrl: url });

    //We will use the port to connect from Node to determine when OpenFin exists.
    const fin = await connect({
        uuid: 'server-connection', //Supply an addressable Id for the connection
        address: `ws://localhost:${port}`, //Connect to the given port.
        nonPersistent: true //We want OpenFin to exit as our application exists.
    });

    fin.once('disconnected', process.exit)
}

module.exports = class OpenFinPlugin {
    constructor({ manifestUrl }) {
        this.manifestUrl = manifestUrl;
    }
        apply(compiler) {
        compiler.hooks.done.tap('OpenFinPlugin', (compilation, callback) => {
            if (firstLaunch) {
                launchWatch(this.manifestUrl).then(console.log).catch(console.error)
                firstLaunch = false;
            }
        })
    }
}
