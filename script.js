// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        document.getElementById('confirmPassword').classList.add('is-invalid');
        return;
    }

    alert('Form submitted successfully!');
    // Reset the form
    this.reset();
    this.classList.remove('was-validated');
});

// To-Do List
document.getElementById('addTaskBtn').addEventListener('click', function() {
    let taskInput = document.getElementById('taskInput');
    let task = taskInput.value.trim();
    if (task === "") {
        alert("Please enter a task.");
        return;
    }
    let li = document.createElement('li');
    li.textContent = task;
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.onclick = function() {
        li.remove();
    };
    li.appendChild(deleteBtn);
    document.getElementById('taskList').appendChild(li);
    taskInput.value = "";
});

// Number Sorting Tool
document.getElementById('sortAscBtn').addEventListener('click', function() {
    let numbers = document.getElementById('numberInput').value.split(',').map(Number);
    if (numbers.some(isNaN)) {
        alert("Please enter valid numbers.");
        return;
    }
    numbers.sort((a, b) => a - b);
    document.getElementById('sortedResult').innerText = "Sorted (Ascending): " + numbers.join(', ');
});

document.getElementById('sortDescBtn').addEventListener('click', function() {
    let numbers = document.getElementById('numberInput').value.split(',').map(Number);
    if (numbers.some(isNaN)) {
        alert("Please enter valid numbers.");
        return;
    }
    numbers.sort((a, b) => b - a);
    document.getElementById('sortedResult').innerText = "Sorted (Descending): " + numbers.join(', ');
});

// Change Background Color
document.getElementById('changeColorBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
});

// Display Current Date and Time
function updateDateTime() {
    let now = new Date();
    document.getElementById('dateTime').innerText = now.toLocaleString();
}
setInterval(updateDateTime, 1000);
updateDateTime();

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.accordion-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const cardBody = this.closest('.card').querySelector('.card-body');
            const isExpanded = cardBody.style.display === 'block';

            // Toggle display
            cardBody.style.display = isExpanded ? 'none' : 'block';
        });
    });
});



document.getElementById('showTimeBtn').addEventListener('click', function() {
    let currentTime = new Date().toLocaleTimeString();
    document.getElementById('currentTime').innerText = "Current Time: " + currentTime;
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };
    fetch('https://example.com/api/contact', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Form submitted successfully!');
    })
    .catch(error => {
        alert('Error submitting form.');
    });
});
const englishContent = {
    title: "Global News Today",
    subtitle: "Your Source for the Latest News Around the World",
    languageSection: "Select Language"
};

const russianContent = {
    title: "Глобальные новости сегодня",
    subtitle: "Ваш источник последних новостей со всего мира",
    languageSection: "Выберите язык"
};

const kazakhContent = {
    title: "Әлемдік жаңалықтар бүгін",
    subtitle: "Сізге әлем бойынша соңғы жаңалықтарды жеткізеді",
    languageSection: "Тілді таңдаңыз"
};

// Function to update the content based on the selected language
function updateContent(content) {
    document.querySelector('h1.hhead').innerText = content.title;
    document.querySelector('p.phead').innerText = content.subtitle;
    document.querySelector('section.mb-4 h3').innerText = content.languageSection;
}

// Language button event listeners
document.getElementById('englishBtn').addEventListener('click', function() {
    updateContent(englishContent);
});

document.getElementById('russianBtn').addEventListener('click', function() {
    updateContent(russianContent);
});

document.getElementById('kazakhBtn').addEventListener('click', function() {
    updateContent(kazakhContent);
});

// Keyboard navigation for language buttons
document.addEventListener('keydown', function(event) {
    if (event.key === '1') { // Press 1 for English
        document.getElementById('englishBtn').click();
    } else if (event.key === '2') { // Press 2 for Russian
        document.getElementById('russianBtn').click();
    } else if (event.key === '3') { // Press 3 for Kazakh
        document.getElementById('kazakhBtn').click();
    }
});

// User Object with Methods
const userProfile = {
    name: "Abay Toktamyssov",
    email: "abay@example.com",
    preferences: ["World News", "Sports", "Technology"],
    displayProfile: function() {
        const profileInfo = `
            <h4>User Profile</h4>
            <p><strong>Name:</strong> ${this.name}</p>
            <p><strong>Email:</strong> ${this.email}</p>
            <p><strong>Preferences:</strong> ${this.preferences.join(", ")}</p>
        `;
        document.getElementById('userProfile').innerHTML = profileInfo;
    }
};

// Display the user profile on page load
document.addEventListener('DOMContentLoaded', function() {
    userProfile.displayProfile();
});
let tasks = [];

document.getElementById('addTaskBtn').addEventListener('click', function() {
    let taskInput = document.getElementById('taskInput');
    let task = taskInput.value.trim();
    
    if (task === "") {
        alert("Please enter a task.");
        return;
    }
    
    tasks.push(task); // Add task to array
    displayTasks(); // Call function to display tasks
    taskInput.value = "";
});

// Array of user objects
const users = [
    { name: "Alice", age: 16 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 60 },
    { name: "David", age: 12 },
    { name: "Eva", age: 75 }
];



// Function to categorize users based on age
const categorizedUsers = users.map(user => {
    let category;
    if (user.age < 18) {
        category = "Minor";
    } else if (user.age < 60) {
        category = "Adult";
    } else {
        category = "Senior";
    }
    return { name: user.name, age: user.age, category: category };
});

// Display the categorized users on the page
function displayUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = ""; // Clear the current user list

    // Loop through categorized users and display their info
    categorizedUsers.map(user => {
        const li = document.createElement('li');
        li.textContent = `${user.name} is a ${user.category} (${user.age} years old)`;
        userList.appendChild(li);
    });
}

// Call the display function when the page loads
document.addEventListener('DOMContentLoaded', displayUsers);

// Play sound effect
document.getElementById('playSoundBtn').addEventListener('click', function() {
    let audio = new Audio('notification.mp3'); 
    audio.play();
});

document.getElementById('changeColorBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.style.transform = 'scale(1.1)'; // Scale up the button
    setTimeout(() => this.style.transform = 'scale(1)', 300); // Scale back to normal
});

// Handle keyboard navigation for the nav menu
document.addEventListener('keydown', function (event) {
    const navMenu = document.getElementById('navMenu');
    const navItems = Array.from(navMenu.querySelectorAll('.nav-link'));

    // Find the currently focused nav item
    const focusedItemIndex = navItems.indexOf(document.activeElement);

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        // Move to the next item
        const nextIndex = (focusedItemIndex + 1) % navItems.length;
        navItems[nextIndex].focus();
        event.preventDefault();
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        // Move to the previous item
        const prevIndex = (focusedItemIndex - 1 + navItems.length) % navItems.length;
        navItems[prevIndex].focus();
        event.preventDefault();
    }
});
// Authentication System
document.addEventListener('DOMContentLoaded', () => {
    const loginSection = document.getElementById('loginSection');
    const authStatus = document.getElementById('authStatus');
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const usernameInput = document.getElementById('username');

    // Check if the user is logged in
    const username = localStorage.getItem('username');
    if (username) {
        showLoggedInState(username);
    }

    // Login button click event
    loginBtn.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        if (username) {
            localStorage.setItem('username', username);
            showLoggedInState(username);
        } else {
            alert("Please enter a username.");
        }
    });

    // Logout button click event
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('username');
        showLoggedOutState();
    });

    function showLoggedInState(username) {
        authStatus.innerText = `Welcome, ${username}!`;
        loginSection.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
    }

    function showLoggedOutState() {
        authStatus.innerText = '';
        loginSection.style.display = 'block';
        logoutBtn.style.display = 'none';
        usernameInput.value = '';
    }
});

// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeBtn = document.getElementById('toggleTheme');

    // Check and apply the saved theme
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        toggleThemeBtn.innerText = 'Light Mode';
    } else {
        toggleThemeBtn.innerText = 'Dark Mode';
    }

    // Event listener for theme toggle button
    toggleThemeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        
        // Save the current theme in localStorage
        localStorage.setItem('theme', theme);

        // Update button text based on theme
        toggleThemeBtn.innerText = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
    });
});

// Load saved filter from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedFilter = localStorage.getItem("newsFilter") || "all";
    filterNewsArticles(savedFilter);
});

// Add event listeners to filter buttons
document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", (event) => {
        const category = event.target.getAttribute("data-category");
        
        // Save the selected filter to localStorage
        localStorage.setItem("newsFilter", category);

        // Filter the news articles based on the selected category
        filterNewsArticles(category);
    });
});

// Function to filter news articles by category
// Function to filter news articles and update button style
function filterNewsArticles(category) {
    const articles = document.querySelectorAll(".news-article");
    
    articles.forEach(article => {
        if (category === "all" || article.getAttribute("data-category") === category) {
            article.style.display = "block";
        } else {
            article.style.display = "none";
        }
    });

    // Remove 'selected' class from all buttons, add to the clicked one
    document.querySelectorAll(".filter-btn").forEach(button => button.classList.remove("selected"));
    document.querySelector(`.filter-btn[data-category="${category}"]`).classList.add("selected");
}
