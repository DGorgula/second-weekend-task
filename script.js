
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
        row.appendChild(header);
    }
    
    return row;
}

function addDynamicStyle(DomObj, property, value){
    if (property === 'totalHours') {
        console.log(DomObj +' '+ property +' '+ value);
        if(value <= 2){
            console.log(DomObj);
            DomObj.style.backgroundColor = "green";
        } 
        else if(value > 2 && value <= 5) {
            DomObj.style.backgroundColor = 'orange';
        }
        else if(value > 5) {
            DomObj.style.backgroundColor = 'red';
        }
        
    }
    else if(property === 'tasksDone') {
        if(value <= "50%") {
            DomObj.style.backgroundColor = "lightBlue";
        }
        else if(value > "50%" && value <= "75%"){
            DomObj.style.backgroundColor = "blue";
        }
        else if(value > "75%" ){
            DomObj.style.backgroundColor = "darkSlateBlue";
        }
    }
}

function tableContent(dataArray, tableBody) {
    let row;
    let style = 'style = "border-left: 1px solid black;"';
    for(idk of dataArray) {
        let row = document.createElement('tr');
        for (item in idk) {
            if (item === "startedAt") {
                let data = document.createElement('td');
                data.innerText = (idk[item]).toTimeString().split(' ')[0];
                row.appendChild(data);
                continue;
            }
            else if (item === "finishedAt") {
                let data = document.createElement('td');
                data.innerText = idk[item].toTimeString().split(' ')[0];
                data.classList.add('leftLine');
                row.appendChild(data);
                continue;
            }
            else if(item === 'totalHours' || item === "tasksDone"){
                let data = document.createElement('td');
                console.log(idk[item]);
                addDynamicStyle(data, item, idk[item]);
                data.classList.add('leftLine');
                data.innerText = idk[item];
                row.appendChild(data);
                continue;
            }
            let data = document.createElement('td');
            data.innerText = idk[item];
            data.classList.add('leftLine');
                row.appendChild(data);
                continue;
        }
        tableBody.appendChild(row);
    }
    return tableBody;
}


//      Here the code begins. :)

appendCalculatedProperties(SOMETHING);
let tblBody = document.createElement('tbody');
let div = document.createElement('div');
div.className = "table-div";
let table = document.createElement('table');
table.className = "table";
let headerRow = headers(SOMETHING);
tblBody.appendChild(headerRow);
tblBody = tableContent(SOMETHING, tblBody);
table.appendChild(tblBody);
div.appendChild(table);
document.body.appendChild(div);



