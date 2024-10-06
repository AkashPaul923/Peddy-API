// console.log("js file connected");
// load catagories
const loadCatagories = async () =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/categories`)
    const data = await res.json()
    displayCatagories(data.categories)
}
// load all pets
const loadpets = async () =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
    const data = await res.json()
    displaypets(data.pets)
}
// load catagory pets
const loadCatagorypets = async (category , id) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    const data = await res.json()
    displaypets(data.data)
    activeBtn(id)
    
}
// active btn
const activeBtn = (id) => {
    document.getElementById("btn-1").classList.remove("bg-[#00bba6]")
    document.getElementById("btn-1").classList.remove("text-black")
    document.getElementById("btn-2").classList.remove("bg-[#00bba6]")
    document.getElementById("btn-2").classList.remove("text-black")
    document.getElementById("btn-3").classList.remove("bg-[#00bba6]")
    document.getElementById("btn-3").classList.remove("text-black")
    document.getElementById("btn-4").classList.remove("bg-[#00bba6]")
    document.getElementById("btn-4").classList.remove("text-black")
    document.getElementById(`btn-${id}`).classList.add("bg-[#00bba6]")
    document.getElementById(`btn-${id}`).classList.add("text-black")
}
// {
//     "petId": 1,
//     "breed": "Golden Retriever",
//     "category": "Dog",
//     "date_of_birth": "2023-01-15",
//     "price": 1200,
//     "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
//     "gender": "Male",
//     "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
//     "vaccinated_status": "Fully",
//     "pet_name": "Sunny"
// }



// display all pets
function displaypets(data) {
    // console.log(data)
    const petCardContainer = document.getElementById('pet-card-container')
    petCardContainer.innerHTML = ''
    if (data.length === 0) {
        // console.log('NO data found')
        petCardContainer.innerHTML = `
        <div class= "p-5 rounded-xl border border-solid md:col-span-2 lg:col-span-3 bg-gray-200 py-40 w-full">
            <div class= "flex flex-col justify-center items-center gap-7">
                <img class="mx-auto" src="assets/error.webp" alt="">
                <p class="text-3xl font-extrabold text-center">No Data Found</p>
            </div>
        </div>
        `
        return
    }
    data.forEach(item => {
        // console.log(item)
        const div = document.createElement('div')
        div.innerHTML = `
        <div class=" p-5 rounded-xl border border-solid ">
            <div class=" h-[250px]" >
                <img class="rounded-xl w-full h-full object-cover" src="${item.image}" alt="">
            </div>
            <div class="my-6 text-base text-gray-500 space-y-2">
                <h1 class="font-bold text-xl text-black">${item.pet_name}</h1>
                <p><i class="fa-solid fa-border-all"></i> <span> Breed : ${item.breed}</span></p>
                <p><i class="fa-regular fa-calendar-days"></i><span> Birth : ${item.date_of_birth}</span></p>
                <p><i class="fa-solid fa-mercury"></i> <span> Gender : ${item.gender}</span></p>
                <p><i class="fa-solid fa-dollar-sign"></i> <span> Price : ${item.price}$</span></p>
            </div>
            <div class="flex justify-between">
                <button onclick="displayImage('${item.image}')" class="btn btn-outline btn-accent  text-lg font-bold"><i class="fa-regular fa-thumbs-up"></i></button>
                <button class="btn btn-outline btn-accent text-lg font-bold">Adopt</button>
                <button onclick="loadDetail('${item.petId}')" class="btn btn-outline btn-accent text-lg font-bold">Detail</button>
            </div>
        </div>
        `
        petCardContainer.appendChild(div)
    })
}

// display Image function
const displayImage = (image) =>{
    const imageContainer = document.getElementById('image-container')
    const div = document.createElement('div')
    // div.classList = "border border-solid rounded-xl  p-2"
    div.innerHTML=`
    <div class="">
        <img class="rounded-xl w-full h-full object-cover" src="${image}" />
    </div>
    `
    imageContainer.appendChild(div)
 }
// show detail
const loadDetail = async(petId) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
    const data = await res.json()
    showDetail(data.petData)
    
}
const showDetail = (data) =>{
    console.log(data)
    const modalContant = document.getElementById('modal-contant')
    modalContant.innerHTML=`
    <div class=" h-[250px]" >
        <img class="rounded-xl w-full h-full object-cover" src="${data.image}" alt="">
    </div>
    <div class="my-6 text-base text-gray-500 space-y-2">
        <h1 class="font-bold text-xl text-black">${data.pet_name}</h1>
        <p><i class="fa-solid fa-border-all"></i> <span> Breed : ${data.breed}</span></p>
        <p><i class="fa-regular fa-calendar-days"></i><span> Birth : ${data.date_of_birth}</span></p>
        <p><i class="fa-solid fa-mercury"></i> <span> Gender : ${data.gender}</span></p>
        <p><i class="fa-solid fa-dollar-sign"></i> <span> Price : ${data.price}$</span></p>
        <p><i class="fa-solid fa-virus"></i> <span> Vaccinated Status : ${data.vaccinated_status}</span></p>
        <p class="font-bold text-xl text-black">Detail Information</p>
        <p>${data.pet_details}</p>
    </div>
    `
    document.getElementById('modal-btn').click()
}

// {
//     "petId": 9,
//     "breed": "Beagle",
//     "category": "Dog",
//     "date_of_birth": "2023-03-22",
//     "price": null,
//     "image": "https://i.ibb.co.com/XyXBtb8/pet-9.jpg",
//     "gender": "Male",
//     "pet_details": "This male Beagle, born on March 22, 2023, is curious, playful, and great with children. Fully vaccinated and priced at $1900, he is perfect for families looking for an active, adventurous companion that loves to explore.",
//     "vaccinated_status": "Fully",
//     "pet_name": "Buddy"
// }



// {
//     "id": 1,
//     "category": "Cat",
//     "category_icon": "https://i.ibb.co.com/N7dM2K1/cat.png"
// }

// display catagories
const displayCatagories = (data) =>{
   const buttonContainer= document.getElementById('button-container')
   data.forEach((item) => {
    const div = document.createElement('div')
   div.innerHTML = `
   <button id="btn-${item.id}" onclick="loadCatagorypets('${item.category}','${item.id}')" class="btn btn-outline btn-accent md:btn-lg flex items-center justify-center">
        <div class="flex items-center gap-1 md:gap-3 lg:gap-5">
            <img class="w-[15px] md:w-[25px] lg:w-[40px]" src="${item.category_icon}" alt="">
            <p class="text-xs md:text-lg lg:text-2xl font-bold text-black">${item.category}</p>
        </div>
    </button>
   `
   buttonContainer.appendChild(div)
   })
   
}



loadCatagories()
loadpets()