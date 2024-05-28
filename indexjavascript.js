let addbtn=document.querySelector(".add")
addbtn.addEventListener("click",add);
let inputbox=document.querySelector(".input")
let outbox=document.querySelector(".outbox")
let list=[];
let size=0;
inputbox.addEventListener("keydown",(e)=>{
    if(e.key==="Enter")
    add();
})
outbox.addEventListener("click",(e)=>{
    let id=e.target.getAttribute("id");
    let t=document.getElementById(id);
     t.style.textDecoration = "line-through";
     list.remove(e.target.value);
     console.log(list)
});
outbox.addEventListener("dblclick",(e)=>{
    let id=e.target.getAttribute("id");
    let t=document.getElementById(id);
     t.remove();
});
function add()
{
    if(inputbox.value!=null)
    {
   let idset="num"
   idset+=size;
   let value=document.createElement("p");
   value.setAttribute("id",idset);
   
   value.innerText=inputbox.value
   list.push(inputbox.value);
   console.log(list)
   size++;
   outbox.appendChild(value)
    }
    inputbox.value=""
}
// outbox.addEventListener("click", function (event) {
//     if (event.target.tagName === "P") {
//         event.target.style.textDecoration = "line-through";
//     }
// });

// outbox.addEventListener("dblclick", function (event) {
//     if (event.target.tagName === "P") {
//         event.target.remove();
//     }
// });
 /*  value.addEventListener("click",()=>{
    value.style.textDecoration="line-through"
   })
   value.addEventListener("dblclick",()=>{
    outbox.removeChild(value)
   })
    }
    inputbox.value=""
}*/