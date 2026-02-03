const ADMIN_USER = "admin";
const ADMIN_PASS = "matrix123";

// LOGIN
function login() {
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;

  if (u === ADMIN_USER && p === ADMIN_PASS) {
    localStorage.setItem("login", "true");
    window.location = "dashboard.html";
  } else {
    document.getElementById("msg").innerText = "Login gagal!";
  }
}

// CEK LOGIN
function cekLogin() {
  if (localStorage.getItem("login") !== "true") {
    window.location = "index.html";
  }
  tampilkanFile();
}

// LOGOUT
function logout() {
  localStorage.removeItem("login");
  window.location = "index.html";
}

// UPLOAD FILE
function uploadFile() {
  let input = document.getElementById("fileInput");
  let files = JSON.parse(localStorage.getItem("files") || "[]");

  for (let f of input.files) {
    files.push(f.name);
  }

  localStorage.setItem("files", JSON.stringify(files));
  tampilkanFile();
}

// TAMPILKAN FILE
function tampilkanFile() {
  let list = document.getElementById("fileList");
  if (!list) return;

  let files = JSON.parse(localStorage.getItem("files") || "[]");
  list.innerHTML = "";

  files.forEach(f => {
    let li = document.createElement("li");
    li.textContent = f;
    list.appendChild(li);
  });
}
