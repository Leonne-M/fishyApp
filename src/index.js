function getdata() {
  const myHeaders = new Headers();
  myHeaders.append("X-RapidAPI-Key", "aa1565a7ffmsh4ea9bf84985da6cp1ece19jsnc8a6912cd422");
  myHeaders.append("Content-Type", "application/json");
  const requestOptions = {
  method: "GET",
  headers: myHeaders,
  };
  fetch("https://fish-species.p.rapidapi.com/fish_api/fishes", requestOptions)
  .then(response => response.json())
  .then(result => {
  dataplacer(result);
  })
  .catch(error => console.error(error));
  }
  
  
  function dataplacer(data) {
    const display = document.getElementById("display-section");
    let html = "";
    data.forEach(fish => {
      html += `
        <div class="displayed-images">
          <img src="${fish.img_src_set['1.5x']}" alt="${fish.name}" />
          <div id="text-stuff">
            <span>Name:</span>
            <span>${fish.name}</span>
            <button class="redirect" data-url="${fish.url}">more</button>
          </div>
        </div>
      `;
    });
    display.innerHTML = html;
    const redirectButtons = document.querySelectorAll('.redirect');
    redirectButtons.forEach(button => {
      button.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        window.location.href = url;
      });
    });
  }
getdata();
 

  
  
  
  
