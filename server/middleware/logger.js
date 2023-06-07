module.exports = (req,res,next) => {
    console.log(`${new Date().toUTCString()} - ${req.method} - ${req.hostname}`);
    // console.log(new Date().toUTCString());
    // console.log(req.method);
    // console.log(req.hostname);
    // console.log(req.url);
    // console.log(req.rawHeaders);
    // console.log(req.httpVersion);
    // console.log(req.socket.remoteAddress);
    // console.log(req.socket.remoteFamily);
    console.log(req.body);





    next();
}