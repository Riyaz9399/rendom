const figlet = require("figlet");

figlet("h e l l o w",function(err,data){
    if(err){
        console.log("Something want wrong");
        console.dir(err);
        return;
    }
    console.log(data);
})
