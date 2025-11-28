 

Ethiopian Airlines Booking System


  Project Overview

A modern, web-based flight booking system designed for Ethiopian Airlines, 
featuring bilingual support and comprehensive management tools for both passengers and administrators.

 Features
  Core Functionality
              - Passenger Registration & Login
             - Admin Authentication (Pre-configured admin account)
             - Flight Booking System
            - Flight Management (Admin only)
            - Real-time Booking System
             - Payment Processing
             - Multi-language Support (English & Amharic)

 User Roles
      Passenger Features
               -  User registration with passport details
              -  Browse available flights
              -  Search flights by route
              -  Book flights with payment simulation
              -  View personal booking history
              -  Quick login for existing users


     Admin Features
            -  Add new flights
           -  Manage existing flights
           -  Update seat availability
           -  View all bookings
          -  System statistics and analytics
          -  Reset system functionality
 

Quick Start
           Default Admin Credentials
               -Username: RESPECT_WORLD
              -Password: keiven12a
           default passenger credential
             - username: kb   
             - password: 12345

         Pre-loaded Ethiopian Flight Routes
             -The system comes with 10 pre-configured domestic Ethiopian flight routes:
             1. Addis Ababa → Bahir Dar (ET701)
             2. Addis Ababa → Mekele (ET702)
             3. Addis Ababa → Gondar (ET703)
             4. Addis Ababa → Hawassa (ET704)
             5. Addis Ababa → Arba Minch (ET705)
             6. Addis Ababa → Dire Dawa (ET706)
             7. Addis Ababa → Axum (ET707)
             8. Addis Ababa → Lalibela (ET708)
             9. Addis Ababa → Gambella (ET709)
             10. Addis Ababa → Jimma (ET710)

Technical Details
         File Structure
          airline-booking-system/
                                               │
                                               ├── index.html          # Main application file
                                               ├── style.css           # Styling and responsive design
                                               ├── script.js           # Application logic and functionality
                                               └── README.md           # This documentation file


Technologies Used
                - Frontend: HTML5, CSS3, JavaScript (ES6+)
                - Storage: LocalStorage (Client-side data persistence)
               - Styling: CSS Grid, Flexbox, Gradient backgrounds
               - Fonts: Google Fonts (Noto Sans Ethiopic for Amharic support)
              - Icons: Unicode emojis and symbols


 Browser Compatibility
                          -  Chrome 
                         -  Firefox 
                         -  Safari 
                         -  Edge 

 
Responsive Design
       The application is fully responsive and works on:
                          -  Desktop computers
                         -  Mobile phones
                         -  Tablets
                         -  Large screens


Language Support
          Available Languages
                   - English (Default)
                   - Amharic (አማርኛ)
         Language Features
                - Dynamic text switching
                - Amharic font support (Noto Sans Ethiopic)
                - Right-to-left text compatibility
                - Bilingual form placeholders

 
Installation & SetupLocal Development
             1. Download all project files
             2. Open `index.html` in a web browser
             3. No server setup required - runs completely client-side

Data Persistence
           - All data is stored in browser's LocalStorage
           - Data persists between browser sessions
          - System reset option available in admin panel


Design Features
               Visual Elements
                   - Modern gradient backgrounds
                  - Card-based layouts
                  - Smooth animations and transitions
                  - Ethiopian flag color themes
                  - Professional color scheme
           User Experience
                 - Intuitive navigation
                 - Clear error/success messages
                 - Modal dialogs for payments and management
                 - Quick login options
                 - Form validation
          Security Features
                 - Client-side validation
                 - Password protection
                 - Session management
                  - Input sanitization
                 - Secure data storage in LocalStorage

 Admin Dashboard Features
            Flight Management
                    - Add new flights with complete details
                    - Update seat availability in real-time
                    - View all flight information
         Analytics & Reporting
                 - Total flights count
                 - Total bookings statistics
                 - Revenue calculations
                - Passenger registration metrics
                - Available seats overview


 Usage Instructions
         For Passengers
                 1. Register: Create a new passenger account
                 2. Login: Access your dashboard
                 3. Browse Flights: View available flights
                 4. Search: Find specific routes
                 5. Book: Select and pay for flights
                 6. Manage: View booking history
       For Administrators
               1. Login: Use admin credentials
               2. Add Flights: Create new flight routes
               3. Manage: Update seat availability
              4. Monitor: View all system bookings
              5. Analyze: Check system statistics
 

System Reset
        Administrators can reset the entire system using the "Reset System" button, which will:
                - Clear all passenger data
                - Remove all bookings
                - Reset flight data to default Ethiopian routes
               - Maintain admin credentials

 
Troubleshooting
         Common Issues
                 1. Data not saving: Check if LocalStorage is enabled in browser
                 2. Login issues: Verify correct credentials
                 3. Display problems: Ensure browser supports modern CSS features
                4. Language not switching: Refresh page after language change
Browser Requirements
              - JavaScript must be enabled
             - LocalStorage support required
             - Modern CSS support recommended
Future Enhancements
         Potential features for future versions:
             - Email notifications
            - Advanced payment integration
            - Flight cancellation features
            - Seat selection system
            - Flight status updates
           - Mobile app version
           - Backend database integration


 Contributing
        This is a standalone project. For modifications:
               1. Fork the project
               2. Make your changes
               3. Test thoroughly
              4. Submit improvements

License
       This project is for educational and demonstration purposes.

Note: This is a client-side application. For production use, consider implementing server-side validation and a proper database system.