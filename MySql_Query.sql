SELECT * FROM stock_research.stocks;

select company_details.*, stocks.* from company_details left join stocks on company_details.c_id = stocks.c_id; 

select * from company_details;
select * from stocks;
select company_details.*, stocks.* from company_details left join stocks on company_details.c_id = stocks.c_id; 
select company_details.*, stocks.* from company_details right join stocks on company_details.c_id = stocks.c_id;
select company_details.*, stocks.* from company_details inner join stocks on company_details.c_id = stocks.c_id; 
select company_details.c_name, stocks.current_price from company_details inner join stocks on company_details.c_id = stocks.c_id; 
Alter table stocks ADD new_coloumn varchar(255) null after stock_name;
DELETE from stocks where s_id = 1;