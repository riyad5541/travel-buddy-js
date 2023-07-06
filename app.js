var carObject = {
    vehicle: "Car",
    imageUrl:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  
    farePerKilo: 3,
    capacity: 4,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
  };

  var busObject = {
    vehicle: "Bus",
    imageUrl:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  
    farePerKilo: 3,
    capacity: 30,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
  };
  


var bikeObject = {
  vehicle: "Bike",
  imageUrl:
    "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",

  farePerKilo: 2,

  capacity: 2,

  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
};



  const services = [carObject, busObject, bikeObject];






function displayService(service){

    const mainSection = document.getElementById('main-section')

    const stingifiedObj = JSON.stringify(service)
    const div = document.createElement("div")
    div.innerHTML = `
    <div class="card mx-auto mt-3" style="max-width: 800px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src=${service.imageUrl} class="img-fluid rounded-start h-100" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${service.vehicle}</h5>
                  <p class="card-text">${service.description}</p>
                  <p class="card-text"><small class="text-muted">Fare per kilo ${service.farePerKilo}</small><small class="text-muted">Capacity${service.capacity}</small></p>
                  <!-- Button trigger modal -->
             <button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick='handleBooking(${stingifiedObj})'data-bs-target="#exampleModal">
                     Launch demo modal
             </button>
                </div>
              </div>
            </div>
          </div>
    `

    mainSection.appendChild(div);

    // console.log(service)
}

function displayAllArry(arr){
  for(let i = 0; i < arr.length; i++){
    const element = arr[i];
    displayService(element)

  }
}

displayAllArry(services)


// handle booking

function handleBooking(obj){
  const modalBody = document.getElementById('modal-body');

  const stingifiedObj = JSON.stringify(obj)

  modalBody.innerHTML = `
  <div class="card mx-auto" style="width: 18rem;">
  <img src=${obj.imageUrl} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Vehicle Mood : ${obj.vehicle}</h5>
    <p class="card-text">${obj.description}</p>
    <p class="card-text"><small class="text-muted">Fare per kilo ${obj.farePerKilo}</small><small class="text-muted">Capacity${obj.capacity}</small></p>
    <P>Fare: <small class="text-muted" id="fare"></small></p>
    <P>Tax: <small class="text-muted"></small></p>
    <P>Total-Cost: <small class="text-muted"></small></p>
    <div class="d-flex flex-column" role="search">
              <input class="form-control m-2" id="distance-input" type="number" placeholder="How many kilo to go?" aria-label="Search">
              <input class="form-control m-2" id="quantity-input" type="number" placeholder="how many vehicle you need?" aria-label="Search">
              <button class="btn btn-outline-success" type="submit" onclick='calculateCost(${stingifiedObj})'>Submit</button>
    </div>
  </div>
</div>
  `
  
}



function calculateCost(obj){
  const quantity = document.getElementById('quantity-input').value;
  const distance = document.getElementById('distance-input').value;

  const fareDiv = document.getElementById('fare');

  fareDiv.innerHTML = quantity * distance * obj.farePerKilo
  console.log(fareDiv)
}


document.getElementById('search-btn').addEventListener('click',function(){
  const value = document.getElementById('search').value;
  
  for(let i = 0; i < services.length; i++){
    const element = services[i];
    if(value.toLowerCase() == element.vehicle.toLowerCase()){
      document.getElementById('main-section').innerHTML="";
      displayService(element);
      return;
    }
  }
  alert("Nothing found ")
})