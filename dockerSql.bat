 docker run --name mysql -p 3306:3306 -p 33060:33060 -e MYSQL_ROOT_PASSWORD=admin -d mysql

 # access mysql shell
 # docker exec -it mysql bash
 # mysql -uroot -p
 # create database bau_talentos;
 # use bau_talentos;
 # create table artigos(id integer primary key auto_increment,
 #  autor varchar(50),
 #  texto varchar(9000),
 #  data timestamp default current_timestamp);
 #  insert into artigos(autor, texto) values('Filipe', 'Sample Node using Mongo/Mysql/Redis');
 