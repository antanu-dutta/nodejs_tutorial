const os = require("os");

console.log("Platform: ", os.platform());
console.log("User: ", os.userInfo());
console.log("CPU Architecture: ", os.arch());
console.log("Hostname: ", os.hostname());
console.log("CPU info", os.cpus());
console.log("Operating System", os.type());
