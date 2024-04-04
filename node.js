
// let a = 0;
// // console.log(window);
// console.log(global);

// // child_process in 


// let re = require("child_process");

// re.execSync("calc"); // open a calculator
// re.execSync("start chrome https://www.scaler.com/topics"); // open a website

//  re.execSync("node example.js");


 // os module 
// const os = require("os");

// console.log(os.arch()); // tells the archicture 
// console.log(os.platform()); // tells the platform 
// console.log(os.networkInterfaces()); // to tells a network which you are currently working on
// console.log(os.cpus()); // tells the cpus confugration 
// console.log(os.totalmem());// tells a total memeory
// console.log(os.freemem());  // tells a free memory


// path module 

// const path = require("path");


// let ext = path.extname("C:\\Users\\saksh\\Desktop\\WebDevelopment\\javascript\\nodejs\\ren.txt");
// let base = path.basename("C:\\Users\\saksh\\Desktop\\WebDevelopment\\javascript\\nodejs\\ren.txt");

// console.log(ext); // tells the extension of the file
// console.log(base); // tells the base name of the file 
// console.log(__filename); // tells the full path of the file name which you are working on
// console.log(__dirname); // tells the full path of the directory which you are working on


// file system module 

// files 

// const fs = require("fs") // fs stands for file system

// // read a file 

// let filecontent = fs.readFileSync("ren.txt");
// console.log("data from the file "+filecontent);

// // write in a file 

// fs.writeFileSync("ren.txt1","What us the file ");

// // append the file 

// fs.appendFileSync("ren.txt1"," This is appended data");

// /// delete a file

// fs.unlinkSync("ren.txt");

// fs.writeFileSync("ren.txt" ,"This is made with after deleted this file");

// how to handle directorys 

//create a directory

// fs.mkdirSync("Mydir");

// check the content inside of a diretory

// let folderpath = "C:\\Users\\saksh\\Desktop\\WebDevelopment\\javascript\\nodejs\\Mydir";
// let folder_content = fs.readdirSync(folderpath);
// console.log("folder content ", folder_content);

// // check weather directory exixts or not

// let exist = fs.existsSync("Mydir");
// console.log(exist);

// // delete a directory 

// // remove 

// fs.rmdirSync("Mydir");
// console.log("the file has been dileted");

// Node package manager




