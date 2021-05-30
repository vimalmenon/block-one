-- Up
CREATE TABLE customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    prefix TEXT NOT NULL,
    name TEXT,
    customer_id INTEGER UNIQUE,
    address TEXT,
    email_address TEXT,
    contact_no TEXT,
    UNIQUE(customer_id)
);


INSERT INTO customers (prefix, name, customer_id, address, email_address, contact_no) values ('Ms', 'Jane Doe', 12345, 'Kowloon, HK', 'jane.doe@example.com', '1234 7889');
INSERT INTO customers (prefix, name, customer_id, address, email_address, contact_no) values ('Mr', 'John Doe', 67890, 'Central, HK', 'john.doe@example.com', '7889 1234');


-- Down
DROP TABLE customers;