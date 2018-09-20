document.addEventListener("click", function() {
  console.log("this is regular function");
  console.log(this);
});

document.addEventListener("click", () => {
  console.log("this is arrow function");
  console.log(this);
});

let callServer = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: "GET",
      url: "//restcountries.eu/rest/v2/name/isr",
      success: response => {
        resolve(response);
      },
      error: er => {
        reject(er);
      },
      finally: () => {
        console.log("finally");
      }
    });
  });
};

let call = () => {
  callServer()
    .then(function(response) {
      return response;
    })
    .then(function(res) {
      console.log(res);
    });
};
