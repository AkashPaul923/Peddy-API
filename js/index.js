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
    console.log(data)
}


// display all pets
const displaypets = (data) =>{
    console.log(data)
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
   <button class="btn btn-outline btn-accent md:btn-lg flex items-center justify-center">
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