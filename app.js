fetch("https://restcountries.com/v3.1/all")
.then(res=>res.json())
.then(data=>{
    let tblCountries=document.getElementById("tbl");

    let tblBody=`<tr>
                    <th>Name</th>
                    <th>Flag</th>
                </tr>`;

    data.forEach(element => {
        tblBody+=`<tr>
                    <td>${element.name.common}</td>
                    <td>${element.flag}</td>
                </tr>`
    });

    tblCountries.innerHTML=tblBody;
})


function serchCuntrie(){
    let searchValue=document.getElementById("txtSearchValue").value;

    let officialName = document.getElementById("officialName");
    let name = document.getElementById("name")
    let region = document.getElementById("region")
    let capital = document.getElementById("capital")
    let img =  document.getElementById("img")
    

    console.log(searchValue);


    fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
    .then(res=>res.json())
    .then(data =>{

        data.forEach(obj=>{
            officialName.innerText = obj.name.official;
            name.innerText = obj.name.common;
            capital.innerText = obj.capital;
            region.innerText =  obj.region;
            img.innerHTML=`<img src="${obj.flags.png}" alt="${obj.flags.png} flag">`
        })
        console.log(data);
    })
}