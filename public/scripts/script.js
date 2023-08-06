const list = document.getElementsByClassName('list')[0]
const checkbox = document.getElementById('checkbox'); 

const inputDiv = document.getElementById('inputDiv'); 
const submit = document.getElementById('submit'); 



submit.addEventListener("click", (e)=>{
    e.preventDefault(); 
    const input1 = document.getElementById('input1').value;  // make node
    const node = document.createTextNode(input1);

    const newDiv = document.createElement('div')
    const newChek = document.createElement('input')
    const newP = document.createElement('p')

    newP.appendChild(node) ;  // write to paragraph input

    newDiv.appendChild(newChek); //display new div
    newDiv.appendChild(newP); 

    newChek.classList.add("checkbox");  //checkBox
    newChek.setAttribute("type", "checkbox");
    newChek.setAttribute("id", "checkbox");
    newP.classList.add("text") //p

    
    if (document.getElementById("todo1") == null) {
       newDiv.classList.add("todo1"); 
       newDiv.setAttribute("id", "todo1");
       console.log('todo1')
    }
    else{
        newDiv.classList.add("todo2"); // div
        console.log('todo2')
    }
    var checkBox = 1;
    newChek.addEventListener('click' , (e) => {
        if(checkBox % 2 == 1) { 
            newP.className ="doneLine"
            checkBox += 1;
        }
        else {
            newP.className ="text"
            checkBox += 1;

        }
    } )
    list.insertBefore(newDiv, inputDiv);
    inputDiv.reset()
})







