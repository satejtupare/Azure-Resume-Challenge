window.addEventListener("DOMContentLoaded", (event) => {
  getVisitCount();
  // const apiUrl =
  //   "https://azureresumecountertej.azurewebsites.net/api/GetResumeCounter?code=Jx2Z3otnwb9yrxkfbjpk-4Iyn8ydSZaBoLnl8TyaYYVXAzFu117iWg==";

  // fetch(apiUrl, { mode: "no-cors" })
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     return response.json(); // Parse the response body as JSON
  //   })
  //   .then((data) => {
  //     console.log(data.tej); // Log the response data
  //     // Process the response data here
  //   })
  //   .catch((error) => {
  //     console.error("Fetch error:", error);
  //   });
});

// const funntionUrl =
//   "https://azureresumevisitorcounter.azurewebsites.net/api/GetVisitorCounter?";
const functionUrl =
  "https://azureresumecountertej.azurewebsites.net/api/GetResumeCounter?code=Jx2Z3otnwb9yrxkfbjpk-4Iyn8ydSZaBoLnl8TyaYYVXAzFu117iWg==";
const localApiUrl = "http://localhost:7071/api/GetResumeCounter";
// funntionUrl, { mode: "no-cors" }
const getVisitCount = () => {
  fetch(functionUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch visit count");
      }
      return response.json();
    })
    .then((response) => {
      console.log("Website called function API.");
      const count = response.tej;
      document.getElementById("counter").innerText = count;
    })
    .catch(function (error) {
      console.error(error);
      // Handle error gracefully, e.g., show an error message to the user
    });
};
