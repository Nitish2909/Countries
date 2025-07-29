const countryName = new URLSearchParams(location.search).get('name')
const flagImage = document.querySelector('.img')
const countryNameH1=document.querySelector('.country-details h2')
const nativeName1=document.querySelector('.native-name')
const population=document.querySelector('.Population')
const region=document.querySelector('.region')
const subregion=document.querySelector('.sub-region')
const capital=document.querySelector('.capital')
const topleveldomain=document.querySelector('.top-level-domain')
const currency=document.querySelector('.currencies')
const language=document.querySelector('.language')

const bordercountries = document.querySelector('.border-countries')

const themechanger=document.querySelector('.theme-changer')

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then(response => response.json())
.then(([country]) =>{
    console.log(country.borders);
  
    flagImage.src = country.flags.svg
    countryNameH1.innerText=country.name.common;
    
     population.innerText=country.population;

      region.innerText=country.region;
      if(country.subregion){
        subregion.innerText=country.subregion;
      }
      if(country.capital){
        capital.innerText=country.capital
      }
      topleveldomain.innerText=country.tld
    

    if(country.name.nativeName)
    {
        nativeName1.innerText =country.name.nativeName[Object.keys(country.name.nativeName)[0]].common
    }
    else{
        nativeName1.innerText =  country.name.common
    }
   if(country.currencies)
   {
    currency.innerText=Object.values(country.currencies).map((currency) => currency.name ).join(', ')
   }

     if(country.languages)
    {
        language.innerText=Object.values(country.languages).join()
    }

   if(country.borders)
   {
    country.borders.forEach((border)=>{
       console.log(border);

    fetch(`https://restcountries.com/v3.1/alpha/${border}`).then(response => response.json()).then(([bordercountry])=>{
        //console.log(bordercountry);

        const bordercountryTag =document.createElement('a')
        bordercountryTag.innerText=bordercountry.name.common 
        bordercountryTag.href= ` countries.html?name=${bordercountry.name.common }`
       // console.log(bordercountryTag);

        bordercountries.append(bordercountryTag)

        
    })
    })
   }

})

themechanger.addEventListener('click',()=>{
  document.body.classList.toggle('dark')
})

