window.addEventListener("storage", (event) => {
  document.querySelector(".key .data").innerHTML = event.key;
  document.querySelector(".old .data").innerHTML = event.oldValue;
  document.querySelector(".new .data").innerHTML = event.newValue;
  document.querySelector(".url .data").innerHTML = event.url;
  document.querySelector(".storageArea .data").innerHTML = JSON.stringify(
    event.storageArea
  );
});
