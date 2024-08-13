document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const formValues = Object.fromEntries(formData.entries());

  console.log(formValues);
});
