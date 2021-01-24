
const SOMETHING = [
    idk1 = {
        
        startedAt: new Date("2021-01-20:10:45"),
        
        finishedAt: new Date("2021-01-20:17:08"),
        
        tasksGiven: 15,
        
        tasksFinished: 3,
        
        topic: "JavaScript"
        
    },
    idk2 = {
        
        startedAt: new Date("2021-01-20:23:14"),
        
        finishedAt: new Date("2021-01-21:05:03"),
        
        tasksGiven: 8,
        
        tasksFinished: 6,
        
        topic: "JavaScript"
        
    },
    idk3 = {
        
        startedAt: new Date("2021-01-20:16:45"),
        
        finishedAt: new Date("2021-01-20:19:51"),
        
        tasksGiven: 12,
        
        tasksFinished: 11,
        
        topic: "JavaScript"
        
    },
    idk4 = {
        
        startedAt: new Date("2021-01-20:17:23"),
        
        finishedAt: new Date("2021-01-20:18:48"),
        
        tasksGiven: 9,
        
        tasksFinished: 2,
        
        topic: "JavaScript"
        
    },
    idk5 = {
        
        startedAt: new Date("2021-01-20:13:42"),
        
        finishedAt: new Date("2021-01-21:19:35"),
        
        tasksGiven: 16,
        
        tasksFinished: 3,
        
        topic: "JavaScript"
        
    },
    idk6 = {
        
        startedAt: new Date("2021-01-20:09:57"),
        
        finishedAt: new Date("2021-01-20:14:16"),
        
        tasksGiven: 4,
        
        tasksFinished: 4,
        
        topic: "JavaScript"
        
    },
    idk7 = {
        
        startedAt: new Date("2021-01-20:14:29"),
        
        finishedAt: new Date("2021-01-20:21:41"),
        
        tasksGiven: 14,
        
        tasksFinished: 2,
        
        topic: "JavaScript"
        
    },
    idk8 = {
        
        startedAt: new Date("2021-01-20:07:16"),
        
        finishedAt: new Date("2021-01-20:13:04"),
        
        tasksGiven: 35,
        
        tasksFinished: 26,
        
        topic: "JavaScript"
        
    },
    idk9 = {
        
        startedAt: new Date("2021-01-20:09:09"),
        
        finishedAt: new Date("2021-01-20:22:30"),
        
        tasksGiven: 12,
        
        tasksFinished: 9,
        
        topic: "JavaScript"
        
    },
    idk10 = {
        
        startedAt: new Date("2021-01-20:13:18"),
        
        finishedAt: new Date("2021-01-24:20:34"),
        
        tasksGiven: 6,
        
        tasksFinished: 5,
        
        topic: "JavaScript"
        
    }
];

function appendCalculatedProperties(dataArray) {
    for(obj of dataArray) {
        Object.assign(obj, {totalHours: Math.floor((Math.abs(obj.finishedAt - obj.startedAt)/1000/3600), -1)})       // 1000 miliseconds in second and 3600 miliseconds in hour
        Object.assign(obj, {tasksDone: Math.floor(obj.tasksFinished/obj.tasksGiven*100)+"%"})
    }
    
}
appendCalculatedProperties(SOMETHING);
// let table = document.createElement("table");
// table.setAttribute("id", "table");
// const TABLE = document.getElementsByTagName("table")
// const TABLE = document.getElementById("table");
// TABLE.setAttribute("background-color", "blue");

// TABLE.innerHTML('<th class="tableHeader">kdfsgnl</th>');
let tableHeaders = "";
// let tableContent = "";

function headers(array){
    let style = 'style = "border-left: 1px solid black;"';
    let htmlHeaders = "";
    const obj = array[0];
    for (const property in obj) {
        if (property === "startedAt") {
            htmlHeaders += `<th>${property}</th>`;
            continue;
        }
        htmlHeaders += `<th ${style}>${property}</th>`;
    }
    
    return htmlHeaders;
}

function dynamicStyle(property, value){
    let key = ` background-color: `;
    if (property === 'totalHours') {
        if(value <= 2){
            return `${key}green;`;
        } 
        else if(value > 2 && value <= 5) {
            return `${key}orange;`;
        }
        else if(value > 5) {
            return `${key}red;`;
        }
        
    }
    else if(property === 'tasksDone') {
        if(value <= "50%") {
            return `${key}lightBlue;`;
            blue
        }
        else if(value > "50%" && value <= "75%"){
            return `${key}blue;`;
        }
        else if(value > "75%" ){
        return `${key}darkSlateBlue;`;
        }
    }
    // return backgroundColor;
}

// console.log(addElement(SOMETHING, "tasksGiven", "td"));
function tableContent(dataArray) {
    let content = "";
    let style = 'style = "border-left: 1px solid black;"';
    for(idk of dataArray) {
        content += '<tr>';
        for (item in idk) {
            if (item === "startedAt") {
                content += `<td >${(idk[item]).toTimeString().split(' ')[0]}</td>`;
                continue;
            }
            else if (item === "finishedAt") {
                content += `<td ${style}>${(idk[item]).toTimeString().split(' ')[0]}</td>`;
                continue;
            }
            else if(item === 'totalHours' || item === "tasksDone"){
                const backgroundColor = dynamicStyle(item, idk[item]);
                console.log(backgroundColor);
                const dynamicStyleStr = `style = "border-left: 1px solid black; ${backgroundColor}"`;
                // style.slice(0, -1)+dynamicStyle(item, idk[item]);
                content += `<td ${dynamicStyleStr}>${idk[item]}</td>`;
                continue;
            }
            content += `<td ${style}>${idk[item]}</td>`;
        }
        firstLoop = false;
        content += '</tr>';
    }
    return content;
}

const tableCSS = 'style = "text-align: center; border-radius: 1rem; margin: 2rem auto; padding: 3rem; border-collapse: collapse; font-size: 1.5rem;"'
const divCSS = 'style = "width: 60%; background-color: gray; border-radius: 1rem; padding: 1rem; text-align: center;"'
// document.write(tableHeaders);
document.write(`<div ${divCSS}><h1 style = "text-align: center;" >Tasks Report</h1><table id="table" ${tableCSS}>`);
document.write(headers(SOMETHING));
document.write(tableContent(SOMETHING));
tableContent += '</table></div>';
// tableHeaders+

