const noteForm = document.querySelector(".note-form");
const noteInput = document.querySelector(".note-input");
const noteList = document.querySelector(".note-list");

let noteStore = localStorage.getItem("notes")
  ? JSON.parse(localStorage.getItem("notes"))
  : [];

noteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  noteStore.push(noteInput.value);
  localStorage.setItem("notes", JSON.stringify(noteStore));
  listCreate(noteInput.value);
  noteInput.value = "";
});

const listCreate = (text) => {
  const note = document.createElement("LI");
  note.innerHTML =
    text +
    ' <button onclick="deleteNote(this)" class="note-delete">Delete</button>';
  noteList.appendChild(note);
};

const getNotes = JSON.parse(localStorage.getItem("notes")) || [];
getNotes.forEach((note) => listCreate(note));

const deleteNote = (btn) => {
  let element = btn.parentNode;
  const index = [...element.parentElement.children].indexOf(element);
  noteStore.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(noteStore));
  element.remove();
};
