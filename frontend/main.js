window.addEventListener("DOMContentLoaded", (event) => {
  getVisitCount();
});

const localApiUrl = "http://localhost:7071/api/GetResumeCounter";

const getVisitCount = () => {
  fetch(localApiUrl)
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
