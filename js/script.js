let arr = [];
document.getElementById("btn").addEventListener("click", () => {
    let valid = true
    let toTodo = document.getElementById("toTodo");
    let dueDate = document.getElementById("dueDate");
    let dueTime = document.getElementById("dueTime");

    if (toTodo.value == "" || dueDate.value == "" || dueTime == "") {
        alert(" Try Again, there is an empty value");
        valid = false;
    }
    else if (!/^[a-zA-Z]+$/.test(toTodo.value) || toTodo.value.length < 2) {
        alert("False Input in Task Field");
        valid = false;
    }
    else if (valid) {
        insertData(toTodo.value, dueDate.value, dueTime.value);

        let obj = {
            Task: toTodo.value,
            due_Date: dueDate.value,
            due_Time: dueTime.value
        };

        arr.push(obj);
        localStorage.setItem("tasks", JSON.stringify(arr));

    }
    toTodo.value = "";
    dueDate.value = "";
    dueTime.value = "";
})


function insertData(task, date, time) {


    let mainTable = document.getElementById("mainTable");

    

    let label1 = document.createElement("input")
    let label2 = document.createElement("label");
    let label3 = document.createElement("label");
    let label4 = document.createElement("label");
    let label5 = document.createElement("span")

    //-----
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");


    let tr = document.createElement("tr");

    label1.type="checkbox"
    label2.textContent = task;
    label3.textContent = date;
    label4.textContent = time;

    label1.addEventListener("click", done, false);
    label5.addEventListener("click", deleteItem, false);
    label5.className = "bi bi-trash";

    td1.appendChild(label1);
    td2.appendChild(label2);
    td3.appendChild(label3);
    td4.appendChild(label4);
    td5.appendChild(label5)


    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5)


    mainTable.appendChild(tr);

    function deleteItem() {
        tr.remove();
    }

    function done() {
        tr.classList.toggle("strike");
      }



}


function getData() {
    if (localStorage.getItem("tasks")) {
        arr = JSON.parse(localStorage.getItem("tasks"));
        for (let i = 0; i < arr.length; i++) {
            insertData(arr[i].Task, arr[i].due_Date, arr[i].due_Time,);
        }
    }
    else {
        alert("There is No Data");
    }

}

getData()

/*const img = document.createElement("img");
img.src = "https://o.remove.bg/downloads/7c797f20-01a0-4bf2-b41e-f2abdaa6b9b4/192-1925888_clearly-being-prepared-and-organized-makes-a-difference-cartoon-making-a-list-removebg-preview.png";
img.setAttribute("width", "300px");
img.setAttribute("height", "300px");
img.setAttribute("alt", "moodle logo");
document.body.appendChild(img);*/
