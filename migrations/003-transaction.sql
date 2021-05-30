-- Up
CREATE TABLE transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    account_number TEXT NOT NULL,
    timestamp TEXT NOT NULL,
    action TEXT,
    description TEXT,
    amount INTEGER,
    currency TEXT
);


INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-789', '12 Dec 2020', "Debit", "***-789 AWS transaction Bill", -200 , 'HKD');

INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-789', '12 Dec 2020', "Debit", "***-789 Paid for purchase", -800 , 'HKD');

INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-789', '13 Dec 2020', "Credit", "***-789 Received credit", 800 , 'HKD');

INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-789', '1 Dec 2020', "Credit", "***-789 Received salary", 1000 , 'USD');



INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-788', '12 Dec 2020', "Debit", "***-788 Random Bill", -500 , 'HKD');

INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-788', '12 Dec 2020', "Debit", "***-788 Paid for purchase", -200 , 'HKD');

INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-788', '13 Dec 2020', "Credit", "***-788 Received credit", 500 , 'HKD');

INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-788', '1 Dec 2020', "Credit", "***-788 Received salary", 800 , 'USD');



INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-787', '12 Dec 2020', "Debit", "***-787 Random Bill", -500 , 'HKD');

INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-787', '12 Dec 2020', "Debit", "***-787 Paid for purchase", -200 , 'HKD');

INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-787', '13 Dec 2020', "Credit", "***-787 Received credit", 500 , 'HKD');

INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-787', '1 Dec 2020', "Credit", "***-787 Received salary", 800 , 'USD');



INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-786', '12 Dec 2020', "Debit", "***-786 Random Bill", -500 , 'HKD');

INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-786', '12 Dec 2020', "Debit", "***-786 Paid for purchase", -200 , 'HKD');

INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-786', '13 Dec 2020', "Credit", "***-786 Received credit", 500 , 'HKD');

INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-786', '1 Dec 2020', "Credit", "***-786 Received salary", 800 , 'USD');



INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-781', '12 Dec 2020', "Debit", "***-781 Random Bill", -500 , 'HKD');

INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-781', '12 Dec 2020', "Debit", "***-781 Paid for purchase", -200 , 'HKD');

INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-781', '13 Dec 2020', "Credit", "***-781 Received credit", 500 , 'HKD');

INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-781', '1 Dec 2020', "Credit", "***-781 Received salary", 800 , 'USD');



INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-782', '12 Dec 2020', "Debit", "***-782 Random Bill", -500 , 'HKD');

INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-782', '12 Dec 2020', "Debit", "***-782 Paid for purchase", -200 , 'HKD');

INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-782', '13 Dec 2020', "Credit", "***-782 Received credit", 500 , 'HKD');

INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-782', '1 Dec 2020', "Credit", "***-782 Received salary", 800 , 'USD');



INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-783', '12 Dec 2020', "Debit", "***-783 Random Bill", -500 , 'HKD');

INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-783', '12 Dec 2020', "Debit", "***-783 Paid for purchase", -200 , 'HKD');

INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-783', '13 Dec 2020', "Credit", "***-783 Received credit", 500 , 'HKD');

INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-783', '1 Dec 2020', "Credit", "***-783 Received salary", 800 , 'USD');


INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-784', '12 Dec 2020', "Debit", "***-784 Random Bill", -500 , 'HKD');

INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-784', '12 Dec 2020', "Debit", "***-784 Paid for purchase", -200 , 'HKD');

INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-784', '13 Dec 2020', "Credit", "***-784 Received credit", 500 , 'HKD');

INSERT INTO transactions (account_number, timestamp, action, description, amount, currency) values ('123-456-784', '1 Dec 2020', "Credit", "***-784 Received salary", 800 , 'USD');
-- Down
DROP TABLE transactions;