CREATE DATABASE IF NOT EXISTS test_db;
USE test_db;

DROP TABLE Orders;
CREATE TABLE IF NOT EXISTS Orders (
	orderNo INT AUTO_INCREMENT,
	forename VARCHAR(20) NOT NULL,
    surname VARCHAR(20) NOT NULL,
    accNo VARCHAR(8) NOT NULL,
    supplier VARCHAR(20) NOT NULL,
    descrip VARCHAR(150),
    quantity INT NOT NULL,
    estCost DOUBLE,
    PRIMARY KEY (orderNo)
) ENGINE = INNODB;

INSERT INTO Orders(forename, surname, accNo, supplier, descrip, quantity, estCost)
	VALUES('John', 'Smith', '12345678', 'ASupplier', 'Description of the item to be ordered.', 5, 12.47);
    
SELECT * FROM Orders;