# Analiza proiect

# Permisiuni

- Orice user poate crea un proiect

- Doar userul care a creat proiectul poate sa il editeze si sterge. Restul pot vedea doar lista de taskuri

# Delete Project

- Nu se poate sterge proiectul[Error: SQLITE_CONSTRAINT: FOREIGN KEY constraint failed]

# Edit task

- Eroare cand editezi un task

- project is not defined. ReferenceError: project is not defined

# Stergere incompleta a taskului

- Cand stergem un task, trebuie sa stergem si din tabela permissions unde am forResource id-ul taskului si la type am task

# Permisiuni pe task

- Nu inteleg despre ce este vorba

# Creare task

- Cand creez cel de al doilea task intr-un proiect cu acelasi user am eroare forbidden si dupa se creeaz un task aiurea

- Trebuie si al doilea create intr-un proiect de un user sa se faca iarasi insertul

# Taskurile unui proiect

- Cand facem un proiect nou nu se selecteaza corect taskurile

- Vad toate taskurile in toate proiectele. Nu se face fetchul corect

- getAllTasksForProject contine problema
