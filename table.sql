CREATE TABLE orderDbG1
(
  orderid    SMALLINT(6) NOT NULL DEFAULT 0,    
name       VARCHAR(150) NOT NULL  DEFAULT '',    
Mail        VARCHAR(150) NOT NULL  DEFAULT '',    
Mobileno       VARCHAR(150) NOT NULL  DEFAULT '',    
Doorno       VARCHAR(150) NOT NULL  DEFAULT '',    
Addressline1       VARCHAR(150) NOT NULL  DEFAULT '',    
Addressline2       VARCHAR(150) NOT NULL  DEFAULT '',    
Pincode       VARCHAR(150) NOT NULL  DEFAULT '',    
City       VARCHAR(150) NOT NULL  DEFAULT '',    
State       VARCHAR(150) NOT NULL  DEFAULT '',    
Comments       VARCHAR(150) NOT NULL  DEFAULT '',    
status       VARCHAR(150) NOT NULL  DEFAULT '',    
paid       VARCHAR(150) NOT NULL  DEFAULT '',    
totalamt       VARCHAR(150) NOT NULL  DEFAULT '',    
pendingamt       VARCHAR(150) NOT NULL  DEFAULT '',    
imageLink1        VARCHAR(100) NOT NULL  DEFAULT '',    
imageHeading1       VARCHAR(150) NOT NULL  DEFAULT '',    
imagePrice1      VARCHAR(50) NOT NULL  DEFAULT '',    
frameSize1     VARCHAR(100) NOT NULL  DEFAULT '',    
Quantity1      VARCHAR(10) NOT NULL  DEFAULT '', 
custm1   VARCHAR(100) NOT NULL  DEFAULT '', 
imageLink2        VARCHAR(100) NOT NULL  DEFAULT '',    
imageHeading2       VARCHAR(150) NOT NULL  DEFAULT '',    
imagePrice2     VARCHAR(50) NOT NULL  DEFAULT '',    
frameSize2     VARCHAR(100) NOT NULL  DEFAULT '',    
Quantity2      VARCHAR(10) NOT NULL  DEFAULT '',
custm2   VARCHAR(100) NOT NULL  DEFAULT '',    
imageLink3        VARCHAR(100) NOT NULL  DEFAULT '',    
imageHeading3       VARCHAR(150) NOT NULL  DEFAULT '',    
imagePrice3     VARCHAR(50) NOT NULL  DEFAULT '',    
frameSize3     VARCHAR(100) NOT NULL  DEFAULT '',    
Quantity3      VARCHAR(10) NOT NULL DEFAULT '',  
custm3   VARCHAR(100) NOT NULL  DEFAULT '',      
imageLink4        VARCHAR(100) NOT NULL  DEFAULT '',    
imageHeading4       VARCHAR(150) NOT NULL  DEFAULT '',    
imagePrice4     VARCHAR(50) NOT NULL  DEFAULT '',    
frameSize4     VARCHAR(100) NOT NULL  DEFAULT '',    
Quantity4      VARCHAR(10) NOT NULL DEFAULT '', 
custm4   VARCHAR(100) NOT NULL  DEFAULT '',    
imageLink5        VARCHAR(100) NOT NULL  DEFAULT '',    
imageHeading5       VARCHAR(150) NOT NULL  DEFAULT '',    
imagePrice5     VARCHAR(50) NOT NULL  DEFAULT '',    
frameSize5     VARCHAR(100) NOT NULL  DEFAULT '',    
Quantity5      VARCHAR(10) NOT NULL DEFAULT '',    
custm5   VARCHAR(100) NOT NULL  DEFAULT '',   
imageLink6        VARCHAR(100) NOT NULL  DEFAULT '',    
imageHeading6       VARCHAR(150) NOT NULL  DEFAULT '',    
imagePrice6    VARCHAR(50) NOT NULL  DEFAULT '',    
frameSize6     VARCHAR(100) NOT NULL  DEFAULT '',    
Quantity6      VARCHAR(10) NOT NULL DEFAULT '',  
custm6   VARCHAR(100) NOT NULL  DEFAULT '', 
imageLink7       VARCHAR(100) NOT NULL  DEFAULT '',    
imageHeading7       VARCHAR(150) NOT NULL  DEFAULT '',    
imagePrice7     VARCHAR(50) NOT NULL  DEFAULT '',    
frameSize7     VARCHAR(100) NOT NULL  DEFAULT '',    
Quantity7      VARCHAR(10) NOT NULL DEFAULT '',  
custm7   VARCHAR(100) NOT NULL  DEFAULT '',         
imageLink8        VARCHAR(100) NOT NULL  DEFAULT '',    
imageHeading8       VARCHAR(150) NOT NULL  DEFAULT '',    
imagePrice8     VARCHAR(50) NOT NULL  DEFAULT '',    
frameSize8     VARCHAR(100) NOT NULL  DEFAULT '',    
Quantity8      VARCHAR(10) NOT NULL DEFAULT '',  
custm8   VARCHAR(100) NOT NULL  DEFAULT '',             
imageLink9        VARCHAR(100) NOT NULL  DEFAULT '',    
imageHeading9       VARCHAR(150) NOT NULL  DEFAULT '',    
imagePrice9     VARCHAR(50) NOT NULL  DEFAULT '',    
frameSize9     VARCHAR(100) NOT NULL  DEFAULT '',    
Quantity9      VARCHAR(10) NOT NULL DEFAULT '', 
custm9   VARCHAR(100) NOT NULL  DEFAULT '',     
collection      VARCHAR(10) NOT NULL DEFAULT '',  
lastUpdateTimestamp VARCHAR(30) NOT NULL DEFAULT '', 
orderDate VARCHAR(30) NOT NULL DEFAULT '', 
deliveryDate VARCHAR(30) NOT NULL DEFAULT '', 
PRIMARY KEY     (orderid)                       
);