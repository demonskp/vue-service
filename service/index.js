const express = require('express');
const { webpack, HotModuleReplacementPlugin } = require('webpack');
const WebpackDevMiddleware = require("webpack-dev-middleware");
const WebpackHotMiddleware = require("webpack-hot-middleware");
const webpackConfig = require('../webpack.config');
const path = require('path')

const app = express();


// -----开发-----
webpackConfig.entry.push("webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&overlay=false");
webpackConfig.plugins.push(new HotModuleReplacementPlugin());
const complier = webpack(webpackConfig);

const devMiddleware = WebpackDevMiddleware(complier,{
    publicPath: webpackConfig.output.publicPath,
});
const hotMiddleware = WebpackHotMiddleware(complier,{
    log:false,
    heartbeat: 2000,
});
app.use(devMiddleware);
app.use(hotMiddleware);

app.get("*", (req, res, next)=>{
    complier.outputFileSystem.readFile(path.resolve(webpackConfig.output.path, './index.html'), (err, result) => {
        if (err) {
            return next(err);
        }
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
    })
})

app.listen(9000, ()=>{
    console.log("启动成功：localhost:9000");
})




