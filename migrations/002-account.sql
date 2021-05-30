-- Up
CREATE TABLE accounts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_id INTEGER,
    account_number TEXT,
    account_type TEXT,
    balance INTEGER,
    UNIQUE (customer_id, account_number)
);
        

INSERT INTO accounts (customer_id, account_number, account_type, balance) values (12345, '123-456-789', 'Saving Account', 20000);
INSERT INTO accounts (customer_id, account_number, account_type, balance) values (12345, '123-456-788', 'Checking Account', 10000);
INSERT INTO accounts (customer_id, account_number, account_type, balance) values (12345, '123-456-787', 'Loan Account', -15000);
INSERT INTO accounts (customer_id, account_number, account_type, balance) values (12345, '123-456-786', 'MPF Account', 52000);



INSERT INTO accounts (customer_id, account_number, account_type, balance) values (67890, '123-456-781', 'Saving Account', 10000);
INSERT INTO accounts (customer_id, account_number, account_type, balance) values (67890, '123-456-782', 'Checking Account', 20000);
INSERT INTO accounts (customer_id, account_number, account_type, balance) values (67890, '123-456-783', 'Loan Account', -25000);
INSERT INTO accounts (customer_id, account_number, account_type, balance) values (67890, '123-456-784', 'MPF Account', 2000);


-- Down
DROP TABLE accounts;