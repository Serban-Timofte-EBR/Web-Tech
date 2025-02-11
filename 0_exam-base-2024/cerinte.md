# Cerinte

## Logica de permisiuni:

### Projects:

- Oricine poate crea un proiect

- Doar cel care a creat proiectul poate sa il editeze sau sterge

- Ceilalti useri il pot vedea, dar pot naviga doar la pagina de taskuri

### Taskurile unui proiect:

- Daca proiectul nu este al userului logat, create task intoarce {"message":"Forbidden"}

## 1. Dashboard

- client/src/components/Dashboard/Dashboard.js

- Admin Dashboard

## 2. JWT token

- La login sa salvam JWT in localstorage

## 3. Tasks

- CRUD pe taskuri refactor total

- Cand dau create task imi creeaza mai multe taskuri cu acelasi nume si aceeasi descriere

- Cand dau edit eroare pe FE: project is not defined (probabil problema este mostenita de mai sus)

- O echipa noua are mereu un task in plus de la ultima echipa (filtrarea de taskuri dupa projectID nu functioneaza)

- Trebuie sa ne asiguram ca butonul de Task redirectioneaza corect la pagina de Tasks of a Project (ID matching)

## 5. Pagination pe pagina de projects

- Page size face cautare pe index

## 6. Task details

- Pagina de FE de task details este goala

- GETul pentru un task intoarce {"message":"Task not found"} - 404

## 7. Delete project

- Crapa delete project cu [Error: SQLITE_CONSTRAINT: FOREIGN KEY constraint failed]
