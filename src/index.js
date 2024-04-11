function getdata(){
    const myHeaders = new Headers();
    myHeaders.append("X-RapidAPI-Key", "aa1565a7ffmsh4ea9bf84985da6cp1ece19jsnc8a6912cd422");
    myHeaders.append("Content-Type", "application/json");
    
    const raw = "\n";
    
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
     
    };
    
    fetch("https://fish-species.p.rapidapi.com/fish_api/fishes", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
}