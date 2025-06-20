console.log("Hallajen");

async function fetchBS() {
    //const fetchData = await fetch("https://foodish-api.com/");
    //const fetchData = await fetch("https://www.fruityvice.com/");

    // using corporate bullshit generator API
    const fetchData = await fetch("https://corporatebs-generator.sameerkumar.website/");
    
    console.log(fetchData);

    const data = await fetchData.json();
    console.log(data);
    console.log(data.phrase);

    return data;
};

fetchBS();

async function displayBS() {
  //  const response = await fetchBS();
   // console.log(response + "is the response");

   // const corporateBs = response;
   // console.log(corporateBs.phrase + "is this an array???");

   // const factsList = document.getElementById("factsList");
  //  const listItem = document.createElement("li");
   // factsList.appendChild(listItem);
  //  listItem.textContent = corporateBs.phrase;
 // Array.from(corporateBs).forEach(element => {
 //   forEach(myFunction())
 // });
 // function myFunction() {
   // factsList.appendChild(listItem);
  //  listItem.textContent = corporateBs.phrase; }

  for (let i = 0; i < 100; i++) {
    const response = await fetchBS();
    const factsList = document.getElementById("factsList");
    const listItem = document.createElement("li");
    factsList.appendChild(listItem);
    listItem.textContent = response.phrase;
  };
};

displayBS();
