@echo off
setlocal
set PGPASSWORD=<databasepassword>
psql -h localhost -U postgres -f ./zpermission.sql
pause
endlocal
setlocal
set PGPASSWORD=rfc3q5t3g32d3rf
psql -h localhost -d postgres -U adminhk -f ./zzcreatedb.sql
pause
endlocal
cd ..
cd server
call npm run knex migrate:latest
pause
call npm run knex seed:run
pause
echo Database kuruldu...
pause