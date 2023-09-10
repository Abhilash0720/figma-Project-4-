async function project(){
  const link= await fetch("https://jsonplaceholder.typicode.com/users")
  const obj=await link.json()
  for(var i=0;i<=16-1;i++)
  {
    console.log(obj[0])
    const print = document.createElement("div")
    print.setAttribute("class","card")
    print.innerHTML = `<div class="card-body">
                      <b><p class="card-text">Name:${obj[0].name}</p></b>
                      <p class="card-text">Email:${obj[0].email}</p>
                      <p class="card-text">Street:${obj[0].address.street}</p>
                      <p class="card-text">City:${obj[0].address.city}</p>
                     </div>
                    </div>`
       document.body.append(print)
  }
}
project();
    
    
   