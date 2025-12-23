class LibraryUI {
    constructor() {
      // Sidebar
      this.sidebar = document.querySelector(".sidebar");
  
      // Header search
      this.searchInput = document.getElementById("search-input");
      this.searchWrapper = document.querySelector(".search");
  
      // Scrim / modal
      this.scrim = document.querySelector(".scrim");
      this.scrimContainer = document.querySelector(".scrim-container");
  
      // Books
      this.books = document.querySelector(".books");
  
      // Form inputs
      this.titleInput = document.getElementById("scrim-title");
      this.authorInput = document.getElementById("scrim-author");
      this.pageInput = document.getElementById("scrim-number");
  
      // Buttons
      this.addBookBtn = document.querySelector(".addBook-button");
      this.confirmBtn = document.querySelector(".scrim-confirm");
      this.resetBtn = document.querySelector(".scrim-reset");
      this.closeBtn = document.querySelector(".close");
  
      this.init();
    }
  
    /* ---------- INIT ---------- */
    init() {
      this.sidebarHover();
      this.searchLogic();
      this.scrimLogic();
      this.bookActions();
    }
  
    /* ---------- SIDEBAR ---------- */
    sidebarHover() {
      this.sidebar.addEventListener("mouseover", e => {
        const item = e.target.closest(".list-item");
        if (!item) return;
  
        item.classList.add("is-hovered");
      });
  
      this.sidebar.addEventListener("mouseout", e => {
        const item = e.target.closest(".list-item");
        if (!item) return;
  
        item.classList.remove("is-hovered");
      });
    }
  
    /* ---------- SEARCH ---------- */
    searchLogic() {
      this.searchInput.addEventListener("input", () => {
        if (this.searchInput.value && !this.cancelIcon) {
          this.createCancelIcon();
        }
  
        if (!this.searchInput.value) {
          this.removeCancelIcon();
        }
      });
  
      this.searchInput.addEventListener("keydown", e => {
        if (e.key === "Enter") this.clearSearch();
      });
    }
  
    createCancelIcon() {
      this.cancelIcon = document.createElement("img");
      this.cancelIcon.src = "icon/cencel.svg";
      this.cancelIcon.id = "search-cencel";
  
      this.searchWrapper.appendChild(this.cancelIcon);
      this.cancelIcon.addEventListener("click", () => this.clearSearch());
    }
  
    clearSearch() {
      this.searchInput.value = "";
      this.removeCancelIcon();
    }
  
    removeCancelIcon() {
      this.cancelIcon?.remove();
      this.cancelIcon = null;
    }
  
    /* ---------- SCRIM ---------- */
    scrimLogic() {
      this.addBookBtn.addEventListener("click", () => this.toggleScrim());
      this.scrim.addEventListener("click", () => this.toggleScrim());
      this.closeBtn.addEventListener("click", () => this.toggleScrim());
  
      this.scrimContainer.addEventListener("click", e => e.stopPropagation());
  
      this.confirmBtn.addEventListener("click", () => this.createBook());
      this.resetBtn.addEventListener("click", () => this.clearForm());
    }
  
    toggleScrim() {
      this.scrim.classList.toggle("hidden");
    }
  
    clearForm() {
      this.titleInput.value = "";
      this.authorInput.value = "";
      this.pageInput.value = "";
    }
  
    /* ---------- BOOKS ---------- */
    bookActions() {
      this.books.addEventListener("click", e => {
        // Toggle Read / Continue
        if (e.target.classList.contains("button")) {
          e.target.textContent =
            e.target.textContent === "Continue" ? "Read Now" : "Continue";
        }
  
        // Delete book
        if (e.target.classList.contains("icon-trash")) {
          e.target.closest(".book").remove();
        }
      });
    }
  
    createBook() {
      if (!this.titleInput.value || !this.authorInput.value || !this.pageInput.value) return;
  
      const book = document.createElement("div");
      book.className = "book";
  
      book.innerHTML = `
        <div class="cover">
          <p>${this.pageInput.value} Pages</p>
        </div>
        <div class="book-content">
          <h2 class="book-title">${this.titleInput.value}</h2>
          <p>${this.authorInput.value}</p>
          <div class="book-bottom">
            <button class="button">Continue</button>
            <img class="icon-trash" src="icon/trash.svg" />
          </div>
        </div>
      `;
  
      this.books.appendChild(book);
      this.clearForm();
      this.toggleScrim();
    }
  }
  
  /* ---------- START ---------- */
  new LibraryUI();
