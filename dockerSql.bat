 docker run --name mysql -p 3306:3306 -p 33060:33060 -e MYSQL_ROOT_PASSWORD=admin -d mysql

 # access mysql shell
 # docker exec -it mysql bash
 # mysql -uroot -p
 # create database bau_talentos;
 