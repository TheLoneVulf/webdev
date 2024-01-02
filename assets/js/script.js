// console.log("This is log")
// console.info("This is info")
// console.error("This is error")
// console.debug("This is debug")
// console.warn("This is warning")
// console.log(window)

/*
DOM api connects web pages and scripts
*/

function loggingInfo(info){
    console.log(info)
   // let elem = document.querySelector('#consoleInfo')
  //  elem.innerText+=info.type+'\n'
    //debugger
}
//loggingInfo-gives reference to the function
//loggingInfo()-executes the function



document.addEventListener('copy',
loggingInfo)

document.addEventListener('paste',
loggingInfo)

document.addEventListener('readystatechange',
loggingInfo)

//document.addEventListener('click',
//loggingInfo)

//document.addEventListener('mouseover',
//loggingInfo)

//document.addEventListener('mouseup',
//loggingInfo)

//document.addEventListener('mousedown',
//loggingInfo)

document.addEventListener('keydown',
loggingInfo)

document.addEventListener('keyup',
loggingInfo)

document.addEventListener('DOMContentLoaded',
loggingInfo)

window.addEventListener('load',
loggingInfo)

window.addEventListener('beforeunload',
loggingInfo)

window.addEventListener('unload',
loggingInfo)


//todo: implement clock using vanilla js



function printTime(){
    let currentDate = new Date();
    console.log(currentDate.getHours() + ':' + currentDate.
    getMinutes() + ':' + currentDate.getSeconds())
    let elem = document.querySelector('#consoleInfo')
    elem.innerText=(currentDate.getHours() + ':' + currentDate.
    getMinutes() + ':' + currentDate.getSeconds())
}
let intID = setInterval(printTime,1000)
setTimeout(clearInterval,10000,intID)




//document.addEventListener('keydown', console.log(new Date().toString()))


