CREATE TABLE nasabah(id SERIAL PRIMARY KEY, account_id VARCHAR(255));
CREATE TABLE transactions(id SERIAL PRIMARY KEY, account_id INT, account_transaction VARCHAR(255), descriptions VARCHAR(255), debit_credit VARCHAR(255), amount INT);
CREATE TABLE check_points(id SERIAL PRIMARY KEY, account_id VARCHAR(255), nasabah_name VARCHAR(255), total_point INT);
CREATE TABLE print_report(id SERIAL PRIMARY KEY, account_id INT, account_transaction VARCHAR(255), descriptions VARCHAR(255), amount INT);

-- inserting into table transactions
INSERT INTO transactions(account_id, account_transaction, descriptions, debit_credit, amount) VALUES (1,'2017-01-02','Beli Pulsa','C',100000);
INSERT INTO transactions(account_id, account_transaction, descriptions, debit_credit, amount) VALUES (1,'2017-01-02','Beli Pulsa','D',150000);
INSERT INTO transactions(account_id, account_transaction, descriptions, debit_credit, amount) VALUES (1,'2017-01-05','Bayar Listrik','C',100000);
INSERT INTO transactions(account_id, account_transaction, descriptions, debit_credit, amount) VALUES (2,'2017-02-05','Bayar Listrik','D',100000);
INSERT INTO transactions(account_id, account_transaction, descriptions, debit_credit, amount) VALUES (2,'2017-02-29','Bayar Listrik','D',780000);
INSERT INTO transactions(account_id, account_transaction, descriptions, debit_credit, amount) VALUES (3,'2017-03-01','Bayar Listrik','C',78000);
INSERT INTO transactions(account_id, account_transaction, descriptions, debit_credit, amount) VALUES (4,'2017-02-29','Bayar Listrik','D',780000);
INSERT INTO transactions(account_id, account_transaction, descriptions, debit_credit, amount) VALUES (4,'2017-03-01','Beli Pulsa','C',79000);


-- inserting check points
INSERT INTO check_points(account_id, nasabah_name, total_point) VALUES (1, 'Taylor Swift', 1300);
INSERT INTO check_points(account_id, nasabah_name, total_point) VALUES (2, 'Nikola Tesla', 100);
INSERT INTO check_points(account_id, nasabah_name, total_point) VALUES (3, 'Mark Zuckeberg', 1000);
INSERT INTO check_points(account_id, nasabah_name, total_point) VALUES (3, 'Maggie Rogers', 970);

-- inserting print report
INSERT INTO print_report(account_id, account_transaction, descriptions, amount) VALUES (1,'2017-01-02','Beli Pulsa',100000);
INSERT INTO print_report(account_id, account_transaction, descriptions, amount) VALUES (1,'2017-01-02','Beli Pulsa',150000);
INSERT INTO print_report(account_id, account_transaction, descriptions, amount) VALUES (1,'2017-01-05','Bayar Listrik',100000);
INSERT INTO print_report(account_id, account_transaction, descriptions, amount) VALUES (2,'2017-02-05','Bayar Listrik',100000);
INSERT INTO print_report(account_id, account_transaction, descriptions, amount) VALUES (2,'2017-02-29','Bayar Listrik',780000);
INSERT INTO print_report(account_id, account_transaction, descriptions, amount) VALUES (3,'2017-03-01','Bayar Listrik',78000);
INSERT INTO print_report(account_id, account_transaction, descriptions, amount) VALUES (4,'2017-02-29','Bayar Listrik',780000);
INSERT INTO print_report(account_id, account_transaction, descriptions, amount) VALUES (4,'2017-03-01','Beli Pulsa',79000);

