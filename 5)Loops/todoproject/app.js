let list = [];
let req = prompt("Enter the operation to perform:-");
while (true) {
    if (req == "quit") {
        console.log("You are quitting the app.");
        break;
    }
    if (req == "list") {
        console.log("-----------------");
        console.log("List of all tasks:-");
        for (let i = 0; i < list.length; i++) {
            console.log(i, list[i]);
        }
        console.log("----------");

    }

     else if (req == "add") {
        let task = prompt("Enter the task to be added.");
        list.push(task);
        console.log("Task added");

     }

     else if(req=="delete"){
         let inx=prompt("Enter the index of the task to get deleted.")
         splice(inx,1);
         console.log("Task deleted");
    }

    req = prompt("Enter the operation to perform:-");
}


//THis is code works when u click on port dont click via inbuilt live serever go for external 