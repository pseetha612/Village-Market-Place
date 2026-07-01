const API_URL = "http://localhost:5000/api/villages";

const form = document.getElementById("villageForm");
const villagesDiv = document.getElementById("villages");


// Load villages when page opens
window.onload = fetchVillages;


// Add Village
form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const village = {

        villageName: document.getElementById("villageName").value,

        district: document.getElementById("district").value,

        state: document.getElementById("state").value,

        marketName: document.getElementById("marketName").value,

        products: document
            .getElementById("products")
            .value
            .split(","),

        contactNumber: document.getElementById("contactNumber").value,

        description: document.getElementById("description").value

    };

    try{

        await fetch(API_URL,{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(village)

        });

        alert("Village Added Successfully ✅");

        form.reset();

        fetchVillages();

    }

    catch(error){

        console.log(error);

    }

});



// Fetch All Villages

async function fetchVillages(){

    try{

        const response = await fetch(API_URL);

        const data = await response.json();

        villagesDiv.innerHTML="";

        data.forEach(village=>{

            villagesDiv.innerHTML += `

            <div class="card">

                <h3>${village.villageName}</h3>

                <p><b>District:</b> ${village.district}</p>

                <p><b>State:</b> ${village.state}</p>

                <p><b>Market:</b> ${village.marketName}</p>

                <p><b>Products:</b> ${village.products.join(", ")}</p>

                <p><b>Contact:</b> ${village.contactNumber}</p>

                <p>${village.description}</p>

                <button onclick="deleteVillage('${village._id}')">

                    Delete

                </button>

            </div>

            `;

        });

    }

    catch(error){

        console.log(error);

    }

}



// Delete Village

async function deleteVillage(id){

    if(confirm("Delete this village?")){

        await fetch(API_URL+"/"+id,{

            method:"DELETE"

        });

        fetchVillages();

    }

}