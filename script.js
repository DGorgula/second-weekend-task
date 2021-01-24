
const SOMETHING = [
    {
        
        startedAt: new Date("2021-01-20:10:45"),
        
        finishedAt: new Date("2021-01-20:17:08"),
        
        tasksGiven: 15,
        
        tasksFinished: 3,
        
        topic: "JavaScript"
        
    },
    {
        
        startedAt: new Date("2021-01-20:23:14"),
        
        finishedAt: new Date("2021-01-21:05:03"),
        
        tasksGiven: 8,
        
        tasksFinished: 6,
        
        topic: "JavaScript"
        
    },
    {
        
        startedAt: new Date("2021-01-20:16:45"),
        
        finishedAt: new Date("2021-01-20:19:51"),
        
        tasksGiven: 12,
        
        tasksFinished: 11,
        
        topic: "JavaScript"
        
    },
    {
        
        startedAt: new Date("2021-01-20:17:23"),
        
        finishedAt: new Date("2021-01-20:18:48"),
        
        tasksGiven: 9,
        
        tasksFinished: 2,
        
        topic: "JavaScript"
        
    },
    {
        
        startedAt: new Date("2021-01-20:13:42"),
        
        finishedAt: new Date("2021-01-21:19:35"),
        
        tasksGiven: 16,
        
        tasksFinished: 3,
        
        topic: "JavaScript"
        
    },
    {
        
        startedAt: new Date("2021-01-20:09:57"),
        
        finishedAt: new Date("2021-01-20:14:16"),
        
        tasksGiven: 4,
        
        tasksFinished: 4,
        
        topic: "JavaScript"
        
    },
    {
        
        startedAt: new Date("2021-01-20:14:29"),
        
        finishedAt: new Date("2021-01-20:21:41"),
        
        tasksGiven: 14,
        
        tasksFinished: 2,
        
        topic: "JavaScript"
        
    },
    {
        
        startedAt: new Date("2021-01-20:07:16"),
        
        finishedAt: new Date("2021-01-20:13:04"),
        
        tasksGiven: 35,
        
        tasksFinished: 26,
        
        topic: "JavaScript"
        
    },
    {
        
        startedAt: new Date("2021-01-20:09:09"),
        
        finishedAt: new Date("2021-01-20:22:30"),
        
        tasksGiven: 12,
        
        tasksFinished: 9,
        
        topic: "JavaScript"
        
    },
    {
        
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

function headers(array, table){
    let style = 'style = "border-left: 1px solid black;"';
    let row = document.createElement('tr');
    for (const property in array[0]) {
        if (property === "startedAt") {
            let header = document.createElement('th');
            header.innerText = property;
            row.appendChild(header);
            continue;
        }
        let header = document.createElement('th');
        header.innerText = property;
        header.style.borderLeft = "1px solid black"
        // htmlHeaders += `<th ${style}>${property}</th>`;
        row.appendChild(header);
    }
    
    // console.log("ldfb");
    return row;
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
function tableContent(dataArray, tableBody) {
    let row;
    let style = 'style = "border-left: 1px solid black;"';
    for(idk of dataArray) {
        let row = document.createElement('tr');
        for (item in idk) {
            if (item === "startedAt") {
                let data = document.createElement('td');
                console.log(idk[item]);
                data.innerText = (idk[item]).toTimeString().split(' ')[0];
                row.appendChild(data);
                continue;
                // content += `<td >${(idk[item]).toTimeString().split(' ')[0]}</td>`;
                // continue;
            }
            else if (item === "finishedAt") {
                let data = document.createElement('td');
                data.innerText = idk[item].toTimeString().split(' ')[0];
                // add style!!!!
                row.appendChild(data);
                continue;
            }
            else if(item === 'totalHours' || item === "tasksDone"){
                const backgroundColor = dynamicStyle(item, idk[item]);
                console.log(backgroundColor);
                const dynamicStyleStr = `style = "border-left: 1px solid black; ${backgroundColor}"`;
                // style.slice(0, -1)+dynamicStyle(item, idk[item]);
                let data = document.createElement('td');
                data.innerText = idk[item];
                //      add  dynamic style!!!!
                row.appendChild(data);
                continue;
            }
            let data = document.createElement('td');
                data.innerText = idk[item];
                // add style!!!!
                row.appendChild(data);
                continue;
        }
        tableBody.appendChild(row);
    }
    return tableBody;
}

// const tableCSS = 'style = "text-align: center; border-radius: 1rem; margin: 2rem auto; padding: 3rem; border-collapse: collapse; font-size: 1.5rem;"'
// const divCSS = 'style = "width: 60%; background-color: gray; border-radius: 1rem; padding: 1rem; text-align: center;"'
// // document.write(tableHeaders);
// document.write(`<div ${divCSS}><h1 style = "text-align: center;" >Tasks Report</h1><table id="table" ${tableCSS}>`);

// document.write(tableContent(SOMETHING));
// tableContent += '</table></div>';
// tableHeaders+

let tblBody = document.createElement('tbody');
let table = document.createElement('table');
let headerRow = headers(SOMETHING);
tblBody.appendChild(headerRow);
tblBody = tableContent(SOMETHING, tblBody);
table.appendChild(tblBody);
document.body.appendChild(table);



