# 🗂️ Projekt 1: TaskManager – zarządzanie zadaniami w rytmie pracy

## 📖 Historia projektu
Gdy zaczynałem pracę jako nauczyciel i programista, miałem rozpisane cele, pomysły, zadania — wszystko na papierze lub w kilku plikach tekstowych. Brakowało mi prostego narzędzia, które nie tylko pomogłoby mi wszystko uporządkować, ale również pasowałoby do mojego sposobu pracy: lista zadań, deadline, tagi, status, minimalny chaos. Postanowiłem więc napisać własne narzędzie — i wykorzystać przy tym solidne fundamenty architektury webowej.

## 🎯 Cel projektu
Celem TaskManagera jest stworzenie lekkiej aplikacji do zarządzania zadaniami, która:
* umożliwia rejestrowanie zadań z tagami, deadline'ami i statusem (do zrobienia, w trakcie, zrobione);
* pozwala każdemu użytkownikowi na dostęp tylko do własnych zadań;
* zapewnia solidne uwierzytelnienie (JWT) i REST API;
* uczy zasad modularnego projektowania aplikacji backendowych z NestJS.

To projekt idealny do nauki i pokazania znajomości:
* NestJS,
* PostgreSQL,
* JWT,
* architektury modularnej i testowalnej.

## ⚙️ Technologie i architektura
* NestJS – modularny framework
* PostgreSQL – relacyjna baza danych
* JWT – uwierzytelnianie
* Passport – integracja z NestJS
* Docker – konteneryzacja
* Swagger – dokumentacja API
* CQRS (opcjonalnie w wersji 2.0) – jako upgrade projektu

## 📁 Moduły i funkcje
| Moduł |	Funkcja |
|-------|---------|
| Users	| rejestracja, logowanie, token |
| Tasks | CRUD zadań: nazwa, opis, deadline, status |
| Tags  | tagi zadań (opcjonalnie przypisane wiele) |
| Auth  | ochrona endpointów i autoryzacja |

## Docker
```
docker-compose up -d
```