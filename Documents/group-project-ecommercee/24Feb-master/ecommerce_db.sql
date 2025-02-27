USE ecommerce_db;

-- Bookings Table
CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    booking_date DATE NOT NULL,
    booking_time TIME NOT NULL,
    stylist VARCHAR(255) NOT NULL,
    comments TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sample Bookings Data
INSERT INTO bookings (name, email, booking_date, booking_time, stylist, comments)
VALUES 
('John Doe', 'john@example.com', '2025-03-01', '14:00:00', 'Alice Johnson', 'Looking forward to my appointment.'),
('Jane Smith', 'jane@example.com', '2025-03-02', '16:30:00', 'David Brown', 'Please confirm my booking.');

-- Sample Contact Us Data
INSERT INTO messages (name, email, message)
VALUES 
('Michael Johnson', 'michael@example.com', 'Inquiry', 'Do you offer home visits?'),
('Sarah Lee', 'sarah@example.com', 'Feedback', 'Great service! Highly recommended.');