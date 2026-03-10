-- ================================================
-- AgriConnect Database DDL
-- ================================================
-- Workflow:
--   1. Edit this file with your DDL changes
--   2. Run: ./db-sync.sh
-- ================================================

CREATE TABLE IF NOT EXISTS `user` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    passwd VARCHAR(255) NOT NULL,
    profile VARCHAR(500),
    is_verified BOOLEAN NOT NULL DEFAULT FALSE,
    type ENUM('farmer', 'wholesaler', 'admin') NOT NULL
);

CREATE TABLE IF NOT EXISTS harvest_category (
    category VARCHAR(100) PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS harvest (
    id INT AUTO_INCREMENT PRIMARY KEY,
    quantity INT NOT NULL,
    unit VARCHAR(20) NOT NULL,
    owner_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (owner_id) REFERENCES `user`(id),
    FOREIGN KEY (category) REFERENCES harvest_category(category)
);

CREATE TABLE IF NOT EXISTS harvest_image (
    id INT AUTO_INCREMENT PRIMARY KEY,
    harvest_id INT NOT NULL,
    img_url VARCHAR(500) NOT NULL,
    FOREIGN KEY (harvest_id) REFERENCES harvest(id)
);

CREATE TABLE IF NOT EXISTS chat_room (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user1 INT NOT NULL,
    user2 INT NOT NULL,
    FOREIGN KEY (user1) REFERENCES `user`(id),
    FOREIGN KEY (user2) REFERENCES `user`(id)
);

CREATE TABLE IF NOT EXISTS message (
    id INT AUTO_INCREMENT PRIMARY KEY,
    chat_room_id INT NOT NULL,
    sender_id INT NOT NULL,
    recipient_id INT NOT NULL,
    text TEXT NOT NULL,
    `read` BOOLEAN NOT NULL DEFAULT FALSE,
    received BOOLEAN NOT NULL DEFAULT FALSE,
    reply_to_id INT,
    FOREIGN KEY (chat_room_id) REFERENCES chat_room(id),
    FOREIGN KEY (sender_id) REFERENCES `user`(id),
    FOREIGN KEY (recipient_id) REFERENCES `user`(id),
    FOREIGN KEY (reply_to_id) REFERENCES message(id)
);
