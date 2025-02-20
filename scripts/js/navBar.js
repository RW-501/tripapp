
import { 
    db, doc, getDoc, updateDoc,
    auth, deleteDoc,  userId, getStorage, ref, uploadBytes, 
    getDownloadURL, limit, arrayUnion, RecaptchaVerifier, increment,
     arrayRemove, signInWithPhoneNumber, query, setDoc, 
     addDoc, signInAnonymously, orderBy, onAuthStateChanged, 
     uploadBytesResumable, signInWithPopup, FacebookAuthProvider, 
     GoogleAuthProvider, startAfter, OAuthProvider, signOut,
      getFirestore, serverTimestamp,  userInfo,
createUserWithEmailAndPassword, signInWithEmailAndPassword, deleteObject,
where, getDocs, storage, getAuth, collection, analytics,EmailAuthProvider,
googleProvider,onSnapshot ,writeBatch ,batch, linkWithCredential,
facebookProvider
      } from 'https://rw-501.github.io/tripapp/scripts/js/auth.js';

  let userINFO;
 // console.log(auth);  // Check if this is properly initialized

 document.addEventListener("DOMContentLoaded", () => {
    onAuthStateChanged(auth, (user) => {
      userINFO = user;
  
      if (!userINFO) {
        console.log("No user is authenticated");
        return; // Exit early if no user is logged in
      }
  
      console.log("userINFO: ", userINFO);
  
      const path = window.location.pathname;
  
      // Check if user is trying to access the backend/admin area
      const isBackendArea = path.includes("/backend") || path.includes("/backend/");
  
      if (!isBackendArea) {
        handleAuthStateChanged(userINFO); // Call your function to handle authenticated user
      } else {
        // checkAdminLogin(userINFO); // Ensure login is valid on page load
      }
    });
  });
  
  function createNavbar() {
    const currentPage = window.location.pathname;
    const isHomePage = currentPage === "/index.html" || currentPage === "/index" || currentPage === "" || currentPage === "/";
    const navbarClass = isHomePage ? "main-navbar-light" : "main-navbar-dark";
    const toggleClass = isHomePage ? "dropdown-toggle-light" : "dropdown-toggle-dark";
  
    // JSON Data for Nav Items with aria-label
    const navItems = [
      {
        href: "/community",
        icon: "fa fa-users",
        text: "Community",
        ariaLabel: "Go to community page",
      },
      {
        href: "/mytrips",
        icon: "fa fa-map-marker-alt",
        text: "My Trips",
        ariaLabel: "Go to My Trips page",
      },
      {
        href: "/trip",
        icon: "fa fa-briefcase",
        text: "Trip",
        ariaLabel: "Go to Trip page",
      }
    ];
  
    // Generate Icons for Always-Visible Bar
    const generateIcons = (items) =>
      items
        .map(
          (item) => `
          <li class="nav-item mx-2">
            <a class="nav-link" href="${item.href}" aria-label="${item.ariaLabel}">
              <i class="${item.icon}"></i>
            </a>
          </li>`
        )
        .join("");
  
    return `
      <nav id="Main-Nav_bar" class="navbar navbar ${navbarClass}" role="navigation">
        <div id="main-nav-bar">
          <div id="btn-menu" class="main-nav-menu-btn" aria-label="Toggle navigation menu">
            <span id="btn-menu-text" class="menu-text">
              <i id="menu-icon" class="fas fa-bars bar-icon" aria-hidden="true"></i>
            </span>
          </div>
          <!-- Logo -->
          <a class="navbar-brand embossed" id="MAIN-LOGO-Reel-Career" href="/" aria-label="Go to home page">
            TravelBank
          </a>
          <!-- Always-visible Icons -->
          <ul class="navbar-nav d-flex flex-row justify-content-center flex-grow-1" id="iconBar">
            ${generateIcons(navItems)}
          </ul>
          <!-- Auth Section -->
          <div id="authSection" class="d-flex align-items-center"></div>
        </div>
      </nav>
    `;
  }
  
  // Helper function to handle authentication state changes
  function handleAuthStateChanged(user) {
    const authSection = document.getElementById("authSection");
    let lastUpdateDate;

    if (user) {
      const userDataSaved = getUserData() || {};
      console.log("userDataSaved:", userDataSaved);

      const lastUpdateTimestamp = userDataSaved.lastUpdateTime;
      if (lastUpdateTimestamp){
        lastUpdateDate = new Date((lastUpdateTimestamp.seconds * 1000) + (lastUpdateTimestamp.nanoseconds / 1000000));
      } 
      

      if (!lastUpdateDate || (new Date() - lastUpdateDate) > 30 * 60 * 1000) {
        console.log("updating user:", user.displayName);
        saveUserLoginState(user); // Save user state
      }
  
      const dropdownMenuItems = [
        {
          title: "Profile",
          href: "/u/",
          icon: "fa fa-user",
          ariaLabel: "Go to Profile"
        },
        {
          title: "Settings",
          href: "/settings",
          icon: "fa fa-cogs",
          ariaLabel: "Go to Settings"
        }
      ];
  
      const userName = userDataSaved.displayName || user.displayName || "User";
      const userPhoto = userDataSaved.profilePicture
        ? `<img id="nav-bar-profilePic" src="${userDataSaved.profilePicture}" alt="Profile Picture" class="rounded-circle" style="width: 40px; height: 40px; margin-right: 10px;">`
        : `<img id="nav-bar-profilePic" src="https://reelcareer.co/images/sq_logo_n_BG_sm.png" alt="Profile Picture" class="rounded-circle" style="width: 40px; height: 40px; margin-right: 10px;">`;
  
      // Function to generate dropdown items
      const generateDropdownItems = (items) => {
        return items
          .map(
            (item) => `
            <a class="dropdown-item" href="${item.href}" aria-label="${item.ariaLabel}">
              <i class="${item.icon}" style="margin-right: 8px;"></i> ${item.title}
            </a>`
          )
          .join("");
      };
  
      // Add the dropdown menu dynamically
      authSection.innerHTML = `
        <div class="dropdown" id="profileDropdownArea" >
          <button class="btn btn-outline-primary dropdown-toggle" type="button" id="profileDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            ${userPhoto} 
          </button>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="profileDropdown">
            <small id="nav-welcome-name">Welcome <name id="nav-user-name">${userName}</name></small>
            <hr>
            ${generateDropdownItems(dropdownMenuItems)}
            <hr>
            <button class="dropdown-item" id="logoutButton">
              <i class="fa fa-sign-out-alt" style="margin-right: 8px;"></i> Logout
            </button>
          </div>
        </div>`;
  
      // Logout button logic
      document.getElementById("logoutButton").addEventListener("click", () => {
        logoutUser();
      });
  
    } else {
      // If not logged in, show login button
      authSection.innerHTML = `<button class="btn btn-primary" id="loginButton">Login / Create Account</button>`;
      document.getElementById("loginButton").onclick = () => {
        window.location.href = "/auth"; // Redirect to login page
      };
    }
  
    // Dropdown toggle and close logic
    setupDropdownToggle();
  }
  
  window.handleAuthStateChanged = handleAuthStateChanged;
  
  // Dropdown toggle and close logic encapsulated into a function
  function setupDropdownToggle() {
    const dropdownToggleButton = document.getElementById("profileDropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");
  
    if (dropdownMenu) {
      dropdownToggleButton.addEventListener("click", function () {
        const isExpanded = dropdownToggleButton.getAttribute("aria-expanded") === "true";
        dropdownToggleButton.setAttribute("aria-expanded", !isExpanded);
        dropdownMenu.classList.toggle("show", !isExpanded); // Show or hide the dropdown
      });
  
      // Close dropdown when clicking outside
      document.addEventListener("click", function (event) {
        if (!dropdownToggleButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
          dropdownToggleButton.setAttribute("aria-expanded", false);
          dropdownMenu.classList.remove("show");
        }
      });
    }
  }
  
  document.addEventListener('click', handleOutsideClick);
  document.addEventListener('touchstart', handleOutsideClick);
  

  document.addEventListener("DOMContentLoaded", function () {
    const profileDropdown = document.getElementById("profileDropdown");
    const profileDropdownArea = document.getElementById("profileDropdownArea");

    profileDropdown.addEventListener("click", function (event) {
        // Toggle visibility
        profileDropdownArea.style.display = 
            (profileDropdownArea.style.display === "none" || profileDropdownArea.style.display === "") 
            ? "block" 
            : "none";

        // Prevent click event from propagating to document
        event.stopPropagation();
    });

    // Click outside to close dropdown
    document.addEventListener("click", function (event) {
        if (!profileDropdownArea.contains(event.target) && !profileDropdown.contains(event.target)) {
            profileDropdownArea.style.display = "none";
        }
    });
});
  function handleOutsideClick(event) {
    const navBar = document.getElementById('Main-Nav_bar');
    const navCollapse = document.getElementById('navbarNav');
    if(navBar && navCollapse ){
      // Check if the click/touch is outside the navbar and the collapse menu
      if (!navBar.contains(event.target) && navCollapse.classList.contains('show')) {
        navCollapse.classList.remove('show'); // Collapse the navbar if it's open
      }
    }
  }
  
  // Function to highlight active links in the navbar
  function highlightActiveLink() {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-item .nav-link");
    navLinks.forEach((link) => {
      if (link.href === window.location.href) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
  
 
const currentPage = window.location.pathname; // Get the current path from the URL
let excludedPages = ["/backend/", "/admin/", "/settings/"];

// Replace the navbar if not on an excluded page
if (!excludedPages.some((excluded) => currentPage.startsWith(excluded))) {
  let existingNavbar = document.querySelector("#dynamicHeader");

  // If an existing navbar is found, replace it
  if (existingNavbar) {
    existingNavbar.outerHTML = createNavbar();
  } else {
// If no existing navbar, append it to the body
document.body.insertAdjacentHTML("afterbegin", createNavbar());

  }


 // setupEventListeners(); // Initialize event listeners
  highlightActiveLink(); // Highlight the active link

}