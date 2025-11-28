// Language System
let currentLanguage = localStorage.getItem('preferredLanguage') || 'en';

const translations = {
    'en': {
        'system_title': 'Airline Booking System',
        'main_title': 'Airline Booking System',
        'main_subtitle': 'welcome to Airline Booking System',
        'passenger_register': 'Passenger Registration',
        'admin_login': 'Admin Login',
        'passenger_login': 'Passenger Login',
        'reset_system': '🗑️ Reset System (Clear All Data)',
        'existing_users': 'Existing Users:',
        'back': '← Back',
        'register': 'Register',
        'login': 'Login',
        'logout': '🚪 Logout',
        'welcome': 'Welcome!',
        'welcome_admin': 'Welcome, Admin!',
        'full_name': 'Full Name',
        'age': 'Age',
        'passport_number': 'Passport Number',
        'password': 'Password',
        'username': 'Username',
        'your_name': 'Your Name',
        'have_account': 'Already have an account?',
        'login_here': 'Login here',
        'no_account': 'Don\'t have an account?',
        'register_here': 'Register here',
        'quick_login': 'Quick Login (Existing Passengers):',
        'quick_login_admin': 'Quick Login (Existing Admins):',
        'passenger_dashboard': 'Passenger Dashboard',
        'book_flight': 'Book Flight',
        'search_flights': 'Search Flights',
        'my_bookings': 'My Bookings',
        'available_flights': 'Available Flights',
        'from': 'From',
        'to': 'To',
        'search': 'Search',
        'admin_dashboard': 'Admin Dashboard',
        'add_flight': 'Add Flight',
        'manage_flights': 'Manage Flights',
        'view_bookings': 'View Bookings',
        'statistics': 'Statistics',
        'add_new_flight': 'Add New Flight',
        'flight_number': 'Flight Number',
        'departure_time': 'Departure Time (HH:MM)',
        'seats_available': 'Seats Available',
        'price': 'Price ($)',
        'all_bookings': 'All Bookings',
        'flight_statistics': 'Flight Statistics',
        'payment_for': 'Payment for',
        'amount': 'Amount: $',
        'card_number': 'Card Number',
        'cvv': 'CVV',
        'expiry_date': 'MM/YY',
        'pay_now': 'Pay Now',
        'cancel': 'Cancel',
        'update_seats': 'Update Seats',
        'new_seats': 'New number of seats'
    },
    'am': {
        'system_title': 'የአየር መንገድ ቦታ ማሰሺያ ስርዓት',
        'main_title': ' የአየር መንገድ ቦታ ማሰሺያ ስርዓት',
        'main_subtitle': 'ወደ አየር መንገድ የቦታ ማስያዣ ስርዓት እንኳን በደህና መጡ',
        'passenger_register': 'ተሳፋሪ ምዝገባ',
        'admin_login': 'አስተዳዳሪ መግቢያ',
        'passenger_login': 'ተሳፋሪ መግቢያ',
        'reset_system': '🗑️ ስርዓት ዳግም አስጀምር (ሁሉንም ውሂብ አጥፋ)',
        'existing_users': 'ነባር ተጠቃሚዎች:',
        'back': '← ተመለስ',
        'register': 'ይመዝገቡ',
        'login': 'ግባ',
        'logout': '🚪 ውጣ',
        'welcome': 'እንኳን ደህና መጡ!',
        'welcome_admin': 'እንኳን ደህና መጡ አስተዳዳሪ!',
        'full_name': 'ሙሉ ስም',
        'age': 'ዕድሜ',
        'passport_number': 'ፓስፖርት ቁጥር',
        'password': 'የይለፍ ቃል',
        'username': 'የተጠቃሚ ስም',
        'your_name': 'ስምዎ',
        'have_account': 'ቀድሞውኑ መለያ አለዎት?',
        'login_here': 'እዚህ ግቡ',
        'no_account': 'መለያ የሎትም?',
        'register_here': 'እዚህ ይመዝገቡ',
        'quick_login': 'ፈጣን መግቢያ (ነባር ተሳፋሪዎች):',
        'quick_login_admin': 'ፈጣን መግቢያ (ነባር አስተዳዳሪዎች):',
        'passenger_dashboard': 'የተሳፋሪ ዳሽቦርድ',
        'book_flight': 'በረራ ይቅረቡ',
        'search_flights': 'በረራዎችን ፈልግ',
        'my_bookings': 'የኔ ቅጠሜዎች',
        'available_flights': 'ሊገኙ የሚችሉ በረራዎች',
        'from': 'ከ',
        'to': 'ወደ',
        'search': 'ፈልግ',
        'admin_dashboard': 'የአስተዳዳሪ ዳሽቦርድ',
        'add_flight': 'በረራ ጨምር',
        'manage_flights': 'በረራዎችን አስተዳድር',
        'view_bookings': 'ቅጠሜዎችን ተመልከት',
        'statistics': 'ስታቲስቲክስ',
        'add_new_flight': 'አዲስ በረራ ጨምር',
        'flight_number': 'የበረራ ቁጥር',
        'departure_time': 'የመነሻ ሰዓት (ሰ:ደቂቃ)',
        'seats_available': 'ሊገኙ የሚችሉ መቀመጫዎች',
        'price': 'ዋጋ ($)',
        'all_bookings': 'ሁሉም ቅጠሜዎች',
        'flight_statistics': 'የበረራ ስታቲስቲክስ',
        'payment_for': 'ክፍያ ለ',
        'amount': 'መጠን: $',
        'card_number': 'የካርድ ቁጥር',
        'cvv': 'ሲቪቪ',
        'expiry_date': 'ወር/ዓመት',
        'pay_now': 'አሁን ይክለሉ',
        'cancel': 'ሰርዝ',
        'update_seats': 'መቀመጫዎችን አዘምን',
        'new_seats': 'አዲስ የመቀመጫ ቁጥር'
    }
};

function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    updateLanguage();
    updateLanguageButtons();
}

function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            const translated = translations[currentLanguage][key];
            // If element has child elements (like a span placeholder), don't overwrite them.
            if (element.children && element.children.length > 0) {
                // Find the first text node and replace its value, or insert one if missing
                const textNode = Array.from(element.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
                if (textNode) {
                    textNode.nodeValue = translated + ' ';
                } else {
                    element.insertBefore(document.createTextNode(translated + ' '), element.firstChild);
                }
            } else {
                element.textContent = translated;
            }
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[currentLanguage][key]) {
            element.placeholder = translations[currentLanguage][key];
        }
    });

    document.title = translations[currentLanguage]['system_title'] || 'Airline Booking System';
    document.body.className = currentLanguage === 'am' ? 'amharic' : '';
}

function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.textContent.includes(currentLanguage === 'am' ? 'አማርኛ' : 'English')) {
            btn.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    updateLanguage();
    updateLanguageButtons();
    initializeData();
    
    window.addEventListener('click', function(event) {
        const paymentModal = document.getElementById('payment-modal');
        const seatsModal = document.getElementById('manage-seats-modal');
        const seatSelectModal = document.getElementById('seat-modal');
        
        if (event.target === paymentModal) {
            closeModal();
        }
        if (event.target === seatsModal) {
            closeSeatsModal();
        }
        if (event.target === seatSelectModal) {
            closeSeatModal();
        }
    });

    // Hook new Continue button in the Ethiopian-style modal and cancel fallback
    const continueBtn = document.getElementById('ethiopian-seat-modal-continue');
    if (continueBtn) continueBtn.addEventListener('click', confirmSeatSelection);
    const cancelSeatBtn = document.getElementById('cancel-seat-btn');
    if (cancelSeatBtn) cancelSeatBtn.addEventListener('click', closeSeatModal);

    // Delegate clicks for any Book buttons (works for static and dynamic buttons)
    document.body.addEventListener('click', function(e) {
        const btn = e.target.closest && e.target.closest('.book-btn');
        if (!btn) return;
        e.preventDefault();

        // Try data attribute first
        let flightId = btn.dataset && btn.dataset.flightNumber;

        // Fallback: parse from inline onclick attribute if present
        if (!flightId) {
            const onclick = btn.getAttribute && btn.getAttribute('onclick');
            if (onclick) {
                const m = onclick.match(/bookFlight\(['"]([^'"]+)['"]\)/);
                if (m) flightId = m[1];
            }
        }

        if (flightId && window.bookFlight) {
            window.bookFlight(flightId);
        }
    });
});

let passengers = JSON.parse(localStorage.getItem('passengers')) || [];
let admins = JSON.parse(localStorage.getItem('admins')) || [];
let flights = JSON.parse(localStorage.getItem('flights')) || [];
let bookings = JSON.parse(localStorage.getItem('bookings')) || [];

let currentUser = null;
let currentAdmin = null;
let selectedFlight = null;
let flightToManage = null;
let selectedSeat = null;

// Seat maps stored in localStorage under key 'seatmaps' as { flightNumber: [occupiedSeatIds...] }
function _readSeatMaps() {
    return JSON.parse(localStorage.getItem('seatmaps') || '{}');
}
function _writeSeatMaps(obj) {
    localStorage.setItem('seatmaps', JSON.stringify(obj));
}

function generateSeatIds(rows = 20, cols = 6) {
    const letters = 'ABCDEF';
    const seats = [];
    for (let r = 1; r <= rows; r++) {
        for (let c = 0; c < cols; c++) {
            seats.push(`${r}${letters[c]}`);
        }
    }
    return seats;
}

function getOccupiedSeats(flightNumber) {
    const maps = _readSeatMaps();
    return maps[flightNumber] || [];
}

function markSeatOccupied(flightNumber, seatId) {
    const maps = _readSeatMaps();
    if (!maps[flightNumber]) maps[flightNumber] = [];
    if (!maps[flightNumber].includes(seatId)) {
        maps[flightNumber].push(seatId);
        _writeSeatMaps(maps);
    }
}

function renderSeatMap(flightNumber) {
    // target the new modal container
    const seatMapEl = document.getElementById('ethiopian-seat-map');
    if (!seatMapEl) return;
    seatMapEl.innerHTML = '';

    // define rows and columns similar to the reference (11-34, columns A B C J K L)
    const rowStart = 11;
    const rowEnd = 34;
    const cols = ['A','B','C','J','K','L'];
    const occupied = getOccupiedSeats(flightNumber);

    for (let r = rowStart; r <= rowEnd; r++) {
        for (let c = 0; c < cols.length; c++) {
            const seatId = `${r}${cols[c]}`;
            const el = document.createElement('div');
            el.className = 'ethiopian-seat-modal-seat available';
            el.setAttribute('role', 'button');
            el.setAttribute('tabindex', '0');
            el.dataset.seatId = seatId;
            el.textContent = seatId;
            if (occupied.includes(seatId)) {
                el.classList.remove('available');
                el.classList.add('reserved');
                el.setAttribute('aria-disabled', 'true');
            }
            el.addEventListener('click', function() {
                if (el.classList.contains('reserved')) return;
                const prev = seatMapEl.querySelector('.ethiopian-seat-modal-seat.selected');
                if (prev) prev.classList.remove('selected');
                el.classList.add('selected');
                selectedSeat = seatId;
            });
            el.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    el.click();
                }
            });
            seatMapEl.appendChild(el);
        }
    }
}

function showSeatModal(flightNumber) {
    selectedSeat = null;
    const seatModal = document.getElementById('seat-modal');
    const seatFlight = document.getElementById('seat-flight');
    const seatPassenger = document.getElementById('seat-passenger-name');
    if (seatFlight) seatFlight.textContent = flightNumber;
    if (seatPassenger && currentUser) seatPassenger.textContent = currentUser.name;
    renderSeatMap(flightNumber);
    if (seatModal) {
        seatModal.style.display = 'block';
        seatModal.setAttribute('aria-hidden', 'false');
    }
}

function closeSeatModal() {
    const seatModal = document.getElementById('seat-modal');
    if (seatModal) {
        seatModal.style.display = 'none';
        seatModal.setAttribute('aria-hidden', 'true');
    }
    selectedSeat = null;
}

function confirmSeatSelection() {
    if (!selectedSeat) {
        alert('Please select a seat before continuing to payment.');
        return;
    }
    // preserve selected seat across closing the seat modal
    const preservedSeat = selectedSeat;
    // mark seat as tentatively selected until payment completes
    closeSeatModal();
    // restore preserved selection so payment flow can use it
    selectedSeat = preservedSeat;
    // Populate payment modal with flight + seat info and open it
    const paymentFlightEl = document.getElementById('payment-flight');
    const paymentAmountEl = document.getElementById('payment-amount');
    const cardNumberEl = document.getElementById('card-number');
    const cardCvvEl = document.getElementById('card-cvv');
    const cardExpiryEl = document.getElementById('card-expiry');
    const paymentMessageEl = document.getElementById('payment-message');

    if (paymentFlightEl && paymentAmountEl) {
        paymentFlightEl.textContent = `${selectedFlight.source} → ${selectedFlight.destination} (Seat: ${selectedSeat})`;
        paymentAmountEl.textContent = selectedFlight.price;
    }
    if (cardNumberEl) cardNumberEl.value = '';
    if (cardCvvEl) cardCvvEl.value = '';
    if (cardExpiryEl) cardExpiryEl.value = '';
    if (paymentMessageEl) paymentMessageEl.innerHTML = '';

    // open payment modal now
    const paymentModal = document.getElementById('payment-modal');
    if (paymentModal) {
        paymentModal.style.display = 'block';
    }
}

function initializeData() {
    if (admins.length === 0) {
        admins.push({ username: "RESPECT_WORLD", password: "keiven12a" });
        localStorage.setItem('admins', JSON.stringify(admins));
    }

    if (flights.length === 0) {
        flights = [
            {
                flightNumber: "ET701",
                source: "Addis Ababa (ADD)",
                destination: "Bahir Dar (BJR)",
                departureTime: "08:00",
                seatsAvailable: 120,
                price: 85
            },
            {
                flightNumber: "ET702",
                source: "Addis Ababa (ADD)",
                destination: "Mekele (MQX)",
                departureTime: "09:30",
                seatsAvailable: 150,
                price: 110
            },
            {
                flightNumber: "ET703",
                source: "Addis Ababa (ADD)",
                destination: "Gondar (GDQ)",
                departureTime: "10:15",
                seatsAvailable: 100,
                price: 95
            },
            {
                flightNumber: "ET704",
                source: "Addis Ababa (ADD)",
                destination: "Hawassa (AWA)",
                departureTime: "11:45",
                seatsAvailable: 80,
                price: 65
            },
            {
                flightNumber: "ET705",
                source: "Addis Ababa (ADD)",
                destination: "Arba Minch (AMH)",
                departureTime: "13:20",
                seatsAvailable: 90,
                price: 75
            },
            {
                flightNumber: "ET706",
                source: "Addis Ababa (ADD)",
                destination: "Dire Dawa (DIR)",
                departureTime: "14:30",
                seatsAvailable: 110,
                price: 70
            },
            {
                flightNumber: "ET707",
                source: "Addis Ababa (ADD)",
                destination: "Axum (AXU)",
                departureTime: "15:45",
                seatsAvailable: 70,
                price: 105
            },
            {
                flightNumber: "ET708",
                source: "Addis Ababa (ADD)",
                destination: "Lalibela (LLI)",
                departureTime: "16:30",
                seatsAvailable: 60,
                price: 120
            },
            {
                flightNumber: "ET709",
                source: "Addis Ababa (ADD)",
                destination: "Gambella (GMB)",
                departureTime: "17:15",
                seatsAvailable: 50,
                price: 90
            },
            {
                flightNumber: "ET710",
                source: "Addis Ababa (ADD)",
                destination: "Jimma (JIM)",
                departureTime: "18:00",
                seatsAvailable: 95,
                price: 60
            }
        ];
        localStorage.setItem('flights', JSON.stringify(flights));
    }
    
    loadExistingUsers();
}

function loadExistingUsers() {
    const existingPassengers = document.getElementById('existing-passengers');
    const existingAdmins = document.getElementById('existing-admins');
    
    if (passengers.length > 0) {
        existingPassengers.innerHTML = '<h4>Passengers:</h4><div class="user-list">' +
            passengers.map(passenger => `
                <div class="user-item">
                    <span class="user-info">${passenger.name} (Age: ${passenger.age})</span>
                    <button class="quick-login-btn" onclick="quickLoginPassenger('${passenger.name}')">
                        Quick Login
                    </button>
                </div>
            `).join('') + '</div>';
    } else {
        existingPassengers.innerHTML = '<p class="message info">No passengers registered yet.</p>';
    }
    
    if (admins.length > 0) {
        existingAdmins.innerHTML = '<h4>Admins:</h4><div class="user-list">' +
            admins.map(admin => `
                <div class="user-item">
                    <span class="user-info">${admin.username}</span>
                    <button class="quick-login-btn" onclick="quickLoginAdmin('${admin.username}')">
                        Quick Login
                    </button>
                </div>
            `).join('') + '</div>';
    } else {
        existingAdmins.innerHTML = '<p class="message info">No admins registered yet.</p>';
    }
}

function loadQuickLogin() {
    const passengerQuickLogin = document.getElementById('passenger-quick-login');
    const adminQuickLogin = document.getElementById('admin-quick-login');
    
    if (passengers.length > 0) {
        passengerQuickLogin.innerHTML = '<div class="quick-login-buttons">' +
            passengers.map(passenger => `
                <div class="quick-login-item">
                    <span>${passenger.name} (Age: ${passenger.age})</span>
                    <button class="quick-login-btn" onclick="quickLoginPassenger('${passenger.name}')">
                        Login as ${passenger.name}
                    </button>
                </div>
            `).join('') + '</div>';
    } else {
        passengerQuickLogin.innerHTML = '<p class="message info">No passengers registered yet.</p>';
    }
    
    if (admins.length > 0) {
        adminQuickLogin.innerHTML = '<div class="quick-login-buttons">' +
            admins.map(admin => `
                <div class="quick-login-item">
                    <span>${admin.username}</span>
                    <button class="quick-login-btn" onclick="quickLoginAdmin('${admin.username}')">
                        Login as ${admin.username}
                    </button>
                </div>
            `).join('') + '</div>';
    } else {
        adminQuickLogin.innerHTML = '<p class="message info">No admins registered yet.</p>';
    }
}

function quickLoginPassenger(name) {
    const passenger = passengers.find(p => p.name === name);
    if (passenger) {
        document.getElementById('login-name').value = passenger.name;
        showMessage('passenger-login-message', `Auto-filled ${passenger.name}. Enter password to login.`, 'info');
    }
}

function quickLoginAdmin(username) {
    const admin = admins.find(a => a.username === username);
    if (admin) {
        document.getElementById('admin-login-username').value = admin.username;
        showMessage('admin-login-message', `Auto-filled ${admin.username}. Enter password to login.`, 'info');
    }
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    
    if (screenId === 'passenger-login' || screenId === 'admin-login') {
        loadQuickLogin();
    }
    
    if (screenId === 'main-menu') {
        loadExistingUsers();
    }
}

function showPassengerSection(sectionId) {
    document.querySelectorAll('#passenger-dashboard .section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    
    if (sectionId === 'book-flight') {
        setTimeout(() => {
            loadFlights();
        }, 100);
    }
    if (sectionId === 'my-bookings') loadMyBookings();
    if (sectionId === 'search-flights') {
        document.getElementById('search-results').innerHTML = '';
    }
}

function showAdminSection(sectionId) {
    document.querySelectorAll('#admin-dashboard .section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    
    if (sectionId === 'manage-flights') {
        setTimeout(() => {
            loadFlightsForManagement();
        }, 100);
    }
    if (sectionId === 'view-bookings') loadAllBookings();
    if (sectionId === 'statistics') loadStatistics();
}

function registerPassenger(event) {
    event.preventDefault();
    
    const name = document.getElementById('passenger-name').value.trim();
    const username = document.getElementById('passenger-username').value.trim();
    const age = parseInt(document.getElementById('passenger-age').value);
    const passport = document.getElementById('passenger-passport').value.trim();
    const password = document.getElementById('passenger-password').value;
    const confirmPassword = document.getElementById('passenger-confirm-password').value;
    const messageEl = document.getElementById('passenger-register-message');
    messageEl.innerHTML = '';

    if (!name || !username || !age || !passport || !password || !confirmPassword) {
        showMessage('passenger-register-message', translations[currentLanguage]['all_fields_required'], 'error');
        return;
    }
    if (age <= 0) {
        showMessage('passenger-register-message', translations[currentLanguage]['invalid_age'], 'error');
        return;
    }
    if (password.length < 6) {
        showMessage('passenger-register-message', translations[currentLanguage]['password_too_short'], 'error');
        return;
    }
    if (password !== confirmPassword) {
        showMessage('passenger-register-message', translations[currentLanguage]['passwords_do_not_match'], 'error');
        return;
    }
    if (passengers.some(p => p.username === username)) {
        showMessage('passenger-register-message', translations[currentLanguage]['username_exists'], 'error');
        return;
    }
    const newPassenger = {
        name,
        username,
        age,
        passport,
        password,
        bookings: []
    };
    passengers.push(newPassenger);
    localStorage.setItem('passengers', JSON.stringify(passengers));
    showMessage('passenger-register-message', translations[currentLanguage]['registration_success'], 'success');
    event.target.reset();
    loadExistingUsers();
    setTimeout(() => {
        showScreen('passenger-login');
        document.getElementById('login-username').value = username;
    }, 1500);
}

function loginAdmin(event) {
    event.preventDefault();
    
    const username = document.getElementById('admin-login-username').value;
    const password = document.getElementById('admin-login-password').value;
    
    const admin = admins.find(a => a.username === username && a.password === password);
    
    if (admin) {
        currentAdmin = admin;
        document.getElementById('admin-welcome').textContent = `Welcome, ${admin.username}!`;
        showScreen('admin-dashboard');
        
        setTimeout(() => {
            loadFlightsForManagement();
        }, 100);
        
        event.target.reset();
    } else {
        const existingAdmin = admins.find(a => a.username === username);
        if (existingAdmin) {
            showMessage('admin-login-message', 
                'Incorrect password! Please try again.', 
                'error'
            );
        } else {
            showMessage('admin-login-message', 
                `Admin "${username}" not found! Only pre-registered admins can access the system.`, 
                'error'
            );
        }
    }
}

function loginPassenger(event) {
    event.preventDefault();
    
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;

    if (!username || !password) {
        showMessage('passenger-login-message', translations[currentLanguage]['all_fields_required'], 'error');
        return;
    }
    const passenger = passengers.find(p => p.username === username && p.password === password);

    if (passenger) {
        currentUser = passenger;
        document.getElementById('passenger-welcome').textContent = `${translations[currentLanguage]['welcome']} ${passenger.name}!`;
        showScreen('passenger-dashboard');
        setTimeout(() => {
            loadFlights();
        }, 100);
        event.target.reset();
    } else {
        const existingPassenger = passengers.find(p => p.username === username);
        if (existingPassenger) {
            showMessage('passenger-login-message', translations[currentLanguage]['invalid_login'], 'error');
        } else {
            showMessage('passenger-login-message', translations[currentLanguage]['invalid_login'], 'error');
        }
    }
}

function logout() {
    currentUser = null;
    currentAdmin = null;
    selectedFlight = null;
    flightToManage = null;
    
    alert('You have been successfully logged out!');
    showScreen('main-menu');
    clearForms();
}

function clearForms() {
    const loginName = document.getElementById('login-name');
    const loginPassword = document.getElementById('login-password');
    const adminLoginUsername = document.getElementById('admin-login-username');
    const adminLoginPassword = document.getElementById('admin-login-password');
    
    if (loginName) loginName.value = '';
    if (loginPassword) loginPassword.value = '';
    if (adminLoginUsername) adminLoginUsername.value = '';
    if (adminLoginPassword) adminLoginPassword.value = '';
}

// FIXED: Load flights for passenger
function loadFlights() {
    const flightsList = document.getElementById('flights-list');
    if (!flightsList) return;
    
    flightsList.innerHTML = '';
    
    const availableFlights = flights.filter(f => f.seatsAvailable > 0);
    
    if (availableFlights.length === 0) {
        flightsList.innerHTML = '<div class="message warning">No available flights!</div>';
        return;
    }
    
    availableFlights.forEach(flight => {
        const flightCard = document.createElement('div');
        flightCard.className = 'flight-card ethiopian-flight';
        flightCard.innerHTML = `
            <div class="flight-route">${flight.source} → ${flight.destination}</div>
            <div class="flight-details">
                ${flight.flightNumber} | ${flight.departureTime} | 
                Seats: ${flight.seatsAvailable} | $${flight.price}
            </div>
            <button class="book-btn" data-flight-number="${flight.flightNumber}">Book Flight</button>
        `;
        flightsList.appendChild(flightCard);
    });
}

function searchFlights() {
    const from = document.getElementById('search-from').value.toLowerCase();
    const to = document.getElementById('search-to').value.toLowerCase();
    const results = document.getElementById('search-results');
    
    const filteredFlights = flights.filter(flight => 
        flight.source.toLowerCase().includes(from) && 
        flight.destination.toLowerCase().includes(to) &&
        flight.seatsAvailable > 0
    );
    
    results.innerHTML = '';
    
    if (filteredFlights.length === 0) {
        results.innerHTML = '<div class="message warning">No flights found!</div>';
        return;
    }
    
    filteredFlights.forEach(flight => {
        const flightCard = document.createElement('div');
        flightCard.className = 'flight-card ethiopian-flight';
        flightCard.innerHTML = `
            <div class="flight-route">${flight.source} → ${flight.destination}</div>
            <div class="flight-details">
                ${flight.flightNumber} | ${flight.departureTime} | 
                Seats: ${flight.seatsAvailable} | $${flight.price}
            </div>
            <button class="book-btn" data-flight-number="${flight.flightNumber}">Book Flight</button>
        `;
        results.appendChild(flightCard);
    });
}


window.bookFlight = function(flightNumber) {
    console.log('Booking flight:', flightNumber);
    const flight = flights.find(f => f.flightNumber === flightNumber);
    const paymentModal = document.getElementById('payment-modal');
    console.log('Modal element:', paymentModal);
    if (paymentModal) {
        console.log('Modal computed style:', window.getComputedStyle(paymentModal).display);
    }
    console.log('Current user:', currentUser);
    if (!flight) {
        alert('Flight not found!');
        return;
    }
    if (flight.seatsAvailable <= 0) {
        alert('No seats available on this flight!');
        return;
    }
    if (!currentUser) {
        alert('Please login first!');
        return;
    }
    // Save selected flight then open seat selection modal before payment
    selectedFlight = flight;
    showSeatModal(flightNumber);
}

function processPayment() {
    if (!selectedFlight || !currentUser) {
        showMessage('payment-message', 'Error processing payment! Please try again.', 'error');
        return;
    }
    
    const cardNumber = document.getElementById('card-number').value;
    const cardCVV = document.getElementById('card-cvv').value;
    const cardExpiry = document.getElementById('card-expiry').value;
    
    if (!cardNumber || !cardCVV || !cardExpiry) {
        showMessage('payment-message', 'Please fill all payment details!', 'error');
        return;
    }
    
    const cleanCardNumber = cardNumber.replace(/[\s-]/g, '');
    
    if (!/^\d{13,19}$/.test(cleanCardNumber)) {
        showMessage('payment-message', 'Please enter a valid card number (13-19 digits)!', 'error');
        return;
    }
    
    if (!/^\d{3,4}$/.test(cardCVV)) {
        showMessage('payment-message', 'Please enter a valid CVV (3 or 4 digits)!', 'error');
        return;
    }
    
    if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
        showMessage('payment-message', 'Please enter expiry date in MM/YY format!', 'error');
        return;
    }
    
    const booking = {
        id: Date.now().toString(),
        passengerName: currentUser.name,
        flightNumber: selectedFlight.flightNumber,
        source: selectedFlight.source,
        destination: selectedFlight.destination,
        departureTime: selectedFlight.departureTime,
        price: selectedFlight.price,
        bookingDate: new Date().toLocaleDateString(),
        selectedSeat: selectedSeat ? selectedSeat : null
    };

    // Add seat info to flight object for this booking
    if (selectedSeat) {
        if (!selectedFlight.bookedSeats) selectedFlight.bookedSeats = [];
        selectedFlight.bookedSeats.push(selectedSeat);
    }

    selectedFlight.seatsAvailable--;

    bookings.push(booking);

    if (!currentUser.bookings) {
        currentUser.bookings = [];
    }
    currentUser.bookings.push(booking.id);

    localStorage.setItem('flights', JSON.stringify(flights));
    localStorage.setItem('bookings', JSON.stringify(bookings));
    localStorage.setItem('passengers', JSON.stringify(passengers));

    // mark the seat occupied (persist) after successful payment
    if (booking.selectedSeat) {
        markSeatOccupied(selectedFlight.flightNumber, booking.selectedSeat);
    }
    // clear temporary selection
    selectedSeat = null;

    showMessage('payment-message', 'Payment successful! Flight booked.', 'success');

    setTimeout(() => {
        closeModal();
        loadFlights();
        loadMyBookings();
        showMessage('passenger-login-message', 'Flight booked successfully!', 'success');
    }, 2000);
}

function loadMyBookings() {
    const myBookingsList = document.getElementById('my-bookings-list');
    myBookingsList.innerHTML = '';
    
    if (!currentUser) return;
    
    const userBookings = bookings.filter(booking => booking.passengerName === currentUser.name);
    
    if (userBookings.length === 0) {
        myBookingsList.innerHTML = '<div class="message info">No bookings found!</div>';
        return;
    }
    
    userBookings.forEach(booking => {
        const bookingCard = document.createElement('div');
        bookingCard.className = 'booking-card';
        bookingCard.innerHTML = `
            <div class="flight-route">${booking.source} → ${booking.destination}</div>
            <div class="flight-details">
                Flight: ${booking.flightNumber} | Time: ${booking.departureTime}<br>
                Booked on: ${booking.bookingDate} | Price: $${booking.price}
                ${booking.selectedSeat ? `<br>Seat: ${booking.selectedSeat}` : ''}
            </div>
        `;
        myBookingsList.appendChild(bookingCard);
    });
}

function addFlight(event) {
    event.preventDefault();
    
    const flightNumber = document.getElementById('flight-number').value;
    const source = document.getElementById('flight-source').value;
    const destination = document.getElementById('flight-destination').value;
    const departureTime = document.getElementById('flight-time').value;
    const seatsAvailable = parseInt(document.getElementById('flight-seats').value);
    const price = parseFloat(document.getElementById('flight-price').value);
    
    const existingFlight = flights.find(f => f.flightNumber === flightNumber);
    if (existingFlight) {
        showMessage('add-flight-message', `Flight ${flightNumber} already exists!`, 'error');
        return;
    }
    
    const newFlight = {
        flightNumber,
        source,
        destination,
        departureTime,
        seatsAvailable,
        price
    };
    
    flights.push(newFlight);
    localStorage.setItem('flights', JSON.stringify(flights));
    
    showMessage('add-flight-message', `Flight ${flightNumber} added successfully!`, 'success');
    event.target.reset();
    
    loadFlightsForManagement();
}

// FIXED: Load flights for management
function loadFlightsForManagement() {
    const manageFlightsList = document.getElementById('manage-flights-list');
    if (!manageFlightsList) return;
    
    manageFlightsList.innerHTML = '';
    
    if (flights.length === 0) {
        manageFlightsList.innerHTML = '<div class="message info">No flights available!</div>';
        return;
    }
    
    flights.forEach(flight => {
        const flightCard = document.createElement('div');
        flightCard.className = 'flight-card ethiopian-flight';
        flightCard.innerHTML = `
            <div class="flight-route">${flight.source} → ${flight.destination}</div>
            <div class="flight-details">
                ${flight.flightNumber} | ${flight.departureTime} | 
                Seats: ${flight.seatsAvailable} | $${flight.price}
            </div>
            <button class="action-btn update-btn" onclick="openSeatsModal('${flight.flightNumber}')">
                Update Seats
            </button>
        `;
        manageFlightsList.appendChild(flightCard);
    });
}

// FIXED: Open seats modal - NOW WORKING PROPERLY
function openSeatsModal(flightNumber) {
    console.log('Opening seats modal for:', flightNumber);
    
    flightToManage = flights.find(f => f.flightNumber === flightNumber);
    
    if (!flightToManage) {
        alert('Flight not found!');
        return;
    }
    
    // Update modal content
    document.getElementById('manage-flight-number').textContent = flightNumber;
    document.getElementById('new-seats').value = flightToManage.seatsAvailable;
    document.getElementById('manage-seats-message').innerHTML = '';
    
    // Show the modal
    const seatsModal = document.getElementById('manage-seats-modal');
    if (seatsModal) {
        seatsModal.style.display = 'block';
    }
}

function updateSeats() {
    if (!flightToManage) {
        showMessage('manage-seats-message', 'No flight selected!', 'error');
        return;
    }
    
    const newSeats = parseInt(document.getElementById('new-seats').value);
    
    if (isNaN(newSeats) || newSeats < 0) {
        showMessage('manage-seats-message', 'Please enter a valid number of seats!', 'error');
        return;
    }
    
    flightToManage.seatsAvailable = newSeats;
    localStorage.setItem('flights', JSON.stringify(flights));
    
    showMessage('manage-seats-message', 'Seats updated successfully!', 'success');
    
    setTimeout(() => {
        closeSeatsModal();
        loadFlightsForManagement();
    }, 1500);
}

function loadAllBookings() {
    const allBookingsList = document.getElementById('all-bookings-list');
    allBookingsList.innerHTML = '';
    
    if (bookings.length === 0) {
        allBookingsList.innerHTML = '<div class="message info">No bookings found!</div>';
        return;
    }
    
    bookings.forEach(booking => {
        const bookingCard = document.createElement('div');
        bookingCard.className = 'booking-card';
        bookingCard.innerHTML = `
            <div class="flight-route">${booking.source} → ${booking.destination}</div>
            <div class="flight-details">
                Passenger: ${booking.passengerName} | Flight: ${booking.flightNumber}<br>
                Time: ${booking.departureTime} | Booked on: ${booking.bookingDate}<br>
                Price: $${booking.price}
            </div>
        `;
        allBookingsList.appendChild(bookingCard);
    });
}

function loadStatistics() {
    const statisticsContent = document.getElementById('statistics-content');
    
    const totalFlights = flights.length;
    const totalBookings = bookings.length;
    const totalRevenue = bookings.reduce((sum, booking) => sum + booking.price, 0);
    const availableSeats = flights.reduce((sum, flight) => sum + flight.seatsAvailable, 0);
    const totalSeats = flights.reduce((sum, flight) => sum + (flight.seatsAvailable + bookings.filter(b => b.flightNumber === flight.flightNumber).length), 0);
    const occupancyRate = totalSeats > 0 ? ((totalSeats - availableSeats) / totalSeats * 100).toFixed(2) : 0;
    
    statisticsContent.innerHTML = `
        <div class="stats-grid">
            <div class="stat-card">
                <h4>Total Flights</h4>
                <p>${totalFlights}</p>
            </div>
            <div class="stat-card">
                <h4>Total Bookings</h4>
                <p>${totalBookings}</p>
            </div>
            <div class="stat-card">
                <h4>Total Revenue</h4>
                <p>$${totalRevenue}</p>
            </div>
            <div class="stat-card">
                <h4>Available Seats</h4>
                <p>${availableSeats}</p>
            </div>
            <div class="stat-card">
                <h4>Occupancy Rate</h4>
                <p>${occupancyRate}%</p>
            </div>
        </div>
    `;
}

function closeModal() {
    const paymentModal = document.getElementById('payment-modal');
    if (paymentModal) {
        paymentModal.style.display = 'none';
    }
    selectedFlight = null;
}

function closeSeatsModal() {
    const seatsModal = document.getElementById('manage-seats-modal');
    if (seatsModal) {
        seatsModal.style.display = 'none';
    }
    flightToManage = null;
}

function showMessage(elementId, message, type) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = `<div class="message ${type}">${message}</div>`;
        setTimeout(() => {
            element.innerHTML = '';
        }, 5000);
    }
}

function resetSystem() {
    if (confirm('Are you sure you want to reset the entire system? This will delete ALL data including passengers, flights, and bookings!')) {
        localStorage.clear();
        passengers = [];
        admins = [];
        flights = [];
        bookings = [];
        currentUser = null;
        currentAdmin = null;
        
        initializeData();
        
        alert('System has been reset successfully!');
        showScreen('main-menu');
    }
}

// Helper: show/hide email input and optional email button based on passenger age
function adjustEmailVisibilityForUser(user) {
    const emailInput = document.getElementById('passenger-email');
    const emailButton = document.getElementById('emailButton');

    const shouldHide = user && typeof user.age === 'number' && user.age < 6;

    if (emailInput) {
        emailInput.style.display = shouldHide ? 'none' : '';
    }
    if (emailButton) {
        emailButton.style.display = shouldHide ? 'none' : '';
    }
}

// Ensure email visibility is reset when returning to registration/main screens
// so the input is available for normal registration flows.
document.addEventListener('click', function(e) {
    // If user navigates back to registration or main menu, restore visibility
    const target = e.target;
    if (target && (target.getAttribute && (target.getAttribute('onclick') === "showScreen('passenger-register')" || target.getAttribute('onclick') === "showScreen('main-menu')"))) {
        adjustEmailVisibilityForUser(null);
    }
});