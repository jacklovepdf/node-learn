/**
 * Created by chengyong.lin on 16/12/13.
 * 路由模块
 */
function route(handle, pathname, response, request) {
    console.log("about a route request for"+ pathname);
    if(typeof handle[pathname] === "function"){
        handle[pathname](response, request);
    }else {
        console.log("No request handle found for" + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not Found");
        response.end();
    }
}

exports.route = route;