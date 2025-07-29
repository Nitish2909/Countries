 const countriescontainer=document.querySelector(".countries-container")
const filterbyregion =document.querySelector('.filter-by-region')
const themechanger=document.querySelector('.theme-changer')
const searchInput=document.querySelector('.search-container input')

let allCountriesData
fetch('https://restcountries.com/v3.1/region/asia')
.then(response => response.json())
.then((data)=>{
    renderCountries(data)
    allCountriesData=data
    // countriescontainer.innerHTML=" "
    // data.forEach((country)=>{
    //     //console.log(country);
    //     const countrycard=document.createElement('a')
    //     countrycard.classList.add('country-card')
    //      countrycard.href  =  `./countries.html?name=${country.name.common}`
    //      const cardHTML= ` 
    //           <img src=${country.flags.svg} alt="flag">
               
    //            <div class="card-text">
    //                <h2>${country.name.common}</h2>
    //                <p><b>Population</b>:${country.population}</p>
    //                <p><b>Region</b>:${country.region}</p>
    //                <p><b>Capital</b>:${country.capital}</p>
    //     </div>
    //                       `
    //    //countrycard.innerHTML=cardHTML;

    //    countriescontainer.append(countrycard);
    //    allCountriesData = data
    // })
})

filterbyregion.addEventListener('change',(e) =>{
    //console.log(e.target.value);
    fetch(`https://restcountries.com/v3.1/region/${filterbyregion.value}`)
.then(response => response.json())
.then(renderCountries)   
})

function  renderCountries(data){

  countriescontainer.innerHTML=" "
    data.forEach((country)=>{
        //console.log(country);
        const countrycard=document.createElement('a')
        countrycard.classList.add('country-card')
         countrycard.href  =  `./countries.html?name=${country.name.common}`
         const cardHTML= ` 
              <img src=${country.flags.svg} alt="flag">
               
               <div class="card-text">
                   <h2>${country.name.common}</h2>
                   <p><b>Population</b>:${country.population}</p>
                   <p><b>Region</b>:${country.region}</p>
                   <p><b>Capital</b>:${country.capital}</p>
        </div>
                          `
       countrycard.innerHTML=cardHTML;

       countriescontainer.append(countrycard);
       allCountriesData = data
    })

}
searchInput.addEventListener('input',  (e) => {
  const filteredCountries = allCountriesData.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
  renderCountries(filteredCountries)
})
themechanger.addEventListener('click',()=>{
    document.body.classList.toggle('dark')
})

