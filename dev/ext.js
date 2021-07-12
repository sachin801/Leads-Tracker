let myLeads=[];
const input=document.getElementById("input");
let leads_locals=JSON.parse(localStorage.getItem("myLeads"));
const input_btn=document.getElementById("saveInp");
const tab_btn=document.getElementById("savetab");
const ulEle=document.getElementById("ulEl");
const del_btn=document.getElementById("delete");
 

tab_btn.addEventListener("click",function(){
    chrome.tabs.query({active : true, currentWindow: true}, function(tabs){
    // let activetab=tabs[0];
    // let activetabid=activetab.id;
    
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads",JSON.stringify(myLeads));

    renderLeads(myLeads);
})
console.log("ok");

})

function renderLeads(Leads){
    
    // myLeads=leads_locals;
     let listItems="";
     for(let i=0; i<Leads.length; i++){
         listItems += `<li>
             <a target='_blank' href= '${Leads[i]}'>
                 ${ Leads[i]}
             </a>
         </li>`;
 
         // const li=document.createElement("li");
         // li.textContent = myLeads[i];
         // ulEle.append(li)
     }
     ulEle.innerHTML = listItems;
     input.value ="";
 }
 


del_btn.addEventListener("dblclick",function(){
    localStorage.clear();
    myLeads=[];
    renderLeads(myLeads);
})




if(leads_locals){
    myLeads=leads_locals;
    renderLeads(myLeads);
}

input_btn.addEventListener("click",function(){
    myLeads.push(input.value); 
    input.value="";
    localStorage.setItem("myLeads",JSON.stringify(myLeads));

   // console.log(localStorage.getItem("myLeads"));
   renderLeads(myLeads); 
})

// localStorage.setItem("myLeads","google");
// console.log(localStorage.getItem("myLeads"))
// leads_locals=JSON.parse(localStorage.getItem("myLeads"));
