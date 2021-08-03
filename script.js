// 1.Fetch=>data inside then =>return promise and then again

fetch("https://api.covid19api.com/summary")
  .then((apidata) => {
    //   console.table(apidata);

    return apidata.json();
  })
  .then((actualdata) => {
    console.log(actualdata);
    // console.log(actualdata.Countries[76]);
    // const realdata = actualdata.Countries[76].Country;
    // document.getElementById("apiindia").innerHTML = realdata;

    const realdata = actualdata.Countries[76];
    document.getElementById(
      "apiindia"
    ).innerHTML = `Country Name:${realdata.Country}<br> TotalConfirmed Cases:${realdata.TotalConfirmed} <br> Total Death:${realdata.TotalDeaths}<br>Date:${realdata.Date}`;
  })
  .catch((error) => {
    console.log(`The error :${error}`);
  });
