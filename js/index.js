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
const loadCatagorypets = async (category) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    const data = await res.json()
    displaypets(data.data)
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
const displaypets = (data) =>{
    console.log(data)
    const petCardContainer = document.getElementById('pet-card-container')
    petCardContainer.innerHTML=''
    if(data.length === 0){
        // console.log('NO data found')
        petCardContainer.innerHTML=`
        <div class= "p-5 rounded-xl border border-solid lg:col-span-3 bg-gray-200 py-40">
            <div class= "flex flex-col justify-center items-center gap-7">
                <img class="mx-auto" src="assets/error.webp" alt="">
                <p class="text-3xl font-extrabold text-center">No Data Found</p>
            </div>
        </div>
        `
        return
    }
    data.forEach(item =>{
        // console.log(item)
        const div = document.createElement('div')
        div.innerHTML= `
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
                <button class="btn btn-outline btn-accent  text-lg font-bold"><i class="fa-regular fa-thumbs-up"></i></button>
                <button class="btn btn-outline btn-accent text-lg font-bold">Adopt</button>
                <button class="btn btn-outline btn-accent text-lg font-bold">Detail</button>
            </div>
        </div>
        `
        petCardContainer.appendChild(div)
    })
}








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
   <button onclick="loadCatagorypets('${item.category}')" class="btn btn-outline btn-accent md:btn-lg flex items-center justify-center">
        <div class="flex items-center gap-1 md:gap-3 lg:gap-5">
            <img class="w-[15px] md:w-[25px] lg:w-[40px]" src="${item.category_icon}" alt="">
            <p class="text-xs md:text-lg lg:text-2xl font-bold">${item.category}</p>
        </div>
    </button>
   `
   buttonContainer.appendChild(div)
   })
   
}



loadCatagories()
loadpets()