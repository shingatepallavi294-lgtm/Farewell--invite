let currentPage = 1;
let totalPages = 4; // IMPORTANT: now only 4 pages

function nextPage() {
  document.getElementById("page" + currentPage).classList.remove("active");
  document.getElementById("page" + currentPage).classList.add("prev");

  currentPage++;

  if (currentPage <= totalPages) {
    document.getElementById("page" + currentPage).classList.add("active");
  }
}