async function fetchBS() {
    // using corporate bullshit generator API
    const fetchData = await fetch("https://corporatebs-generator.sameerkumar.website/");
    
    console.log(fetchData);

    const data = await fetchData.json();
    console.log(data);
    console.log(data.phrase);

    return data;
};

async function displayBS() {
  for (let i = 0; i < 12; i++) {
    showLoading();
    const response = await fetchBS();
    const bsList = document.getElementById("bsList");
    const listItem = document.createElement("li");
    bsList.prepend(listItem);
    listItem.textContent = response.phrase;
    hideLoading();
  };
};

displayBS();

const bsButton = document.getElementById("bsButton");
bsButton.addEventListener("click", displayBS);

function showLoading() {
  document.getElementById("loadingSpinner").style.display = "block";
  document.getElementById("spinnerText").style.display = "block";
}

function hideLoading() {
  document.getElementById("loadingSpinner").style.display = "none";
  document.getElementById("spinnerText").style.display = "none";
}