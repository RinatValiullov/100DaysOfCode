const btn = document.querySelector("button");
const container = document.querySelector(".container");

btn.addEventListener("click", () => {
  createNotification();
});

const createNotification = () => {
  const notification = document.createElement("div");
  notification.classList.add("toast");
  notification.innerText = "Lorem ipsum dolor sit amet consectetur.";

  container.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
};
