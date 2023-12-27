function expense(event){
    event.preventDefault();

    let id = document.getElementById("one").value;
    let name = document.getElementById("two").value;
    let amount = document.getElementById("three").value;
    let date = document.getElementById("four").value;

    let OBJ = {id, name, amount, date};
    console.log(OBJ);

    ULADD(OBJ);
    document.getElementById("one").value = "";
    document.getElementById("two").value = "";
    document.getElementById("three").value = "";
    document.getElementById("four").value = "";
}
function ULADD(obj){
    let UL = document.getElementById("UL");
    let LI = document.createElement("li");
    LI.classList.add("LIST");
    let PP = document.createElement("p");
    PP.classList.add("PPL");
    PP.innerHTML = `${obj.id} ${obj.name} ${obj.amount} ${obj.date}`;

    let EDIT = document.createElement("button");
    EDIT.textContent = "Edit";
    EDIT.classList.add("edit");
    EDIT.addEventListener("click", ()=>{
        let key = obj.id;
        let storedvalue = localStorage.getItem(key);
        let obj1 = JSON.parse(storedvalue);
        document.getElementById("one").value = obj1.id;
        document.getElementById("two").value = obj1.name;
        document.getElementById("three").value = obj1.amount;
        document.getElementById("four").value = obj.date;
        localStorage.removeItem(key);
        UL.removeChild(LI);
    });

    let DEL = document.createElement("button");
    DEL.textContent = "Delete";
    DEL.classList.add("del");
    DEL.addEventListener("click",(event)=>{
        let listitem = event.target.parentElement;
        let key = obj.id;
        localStorage.removeItem(key);
        UL.removeChild(listitem);
    });

    LI.appendChild(PP);
    LI.appendChild(EDIT);
    LI.appendChild(DEL);
    UL.appendChild(LI);

    localStorage.setItem(obj.id, JSON.stringify(obj));
}

document.addEventListener("DOMContentLoaded",()=>{
    let UL = document.getElementById("UL");

    for(let key in localStorage){
        if(localStorage.hasOwnProperty(key)){
            let storeddata = localStorage.getItem(key);
            let dobj = JSON.parse(storeddata);

            let LI = document.createElement("li");
            LI.classList.add("LIST");
            let PP = document.createElement("p");
            PP.classList.add("PPL");
            PP.innerHTML = `${dobj.id} ${dobj.name} ${dobj.amount} ${dobj.date}`;
        
            let EDIT = document.createElement("button");
            EDIT.textContent = "Edit";
            EDIT.classList.add("edit");
            EDIT.addEventListener("click", ()=>{
                let key = dobj.id;
                let storedvalue = localStorage.getItem(key);
                let obj1 = JSON.parse(storedvalue);
                document.getElementById("one").value = obj1.id;
                document.getElementById("two").value = obj1.name;
                document.getElementById("three").value = obj1.amount;
                document.getElementById("four").value = obj1.date;
                localStorage.removeItem(key);
                UL.removeChild(LI);
            });
        
            let DEL = document.createElement("button");
            DEL.textContent = "Delete";
            DEL.classList.add("del");
            DEL.addEventListener("click",(event)=>{
                let listitem = event.target.parentElement;
                let key = dobj.id;
                localStorage.removeItem(key);
                UL.removeChild(listitem);
            });
        
            LI.appendChild(PP);
            LI.appendChild(EDIT);
            LI.appendChild(DEL);
            UL.appendChild(LI);
        }
    }
});