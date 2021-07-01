# DASHBOARD
`/` 
- statystyki dzisiejszych zamówień (zdalne, lokalne)
- lista rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie
`/login`
- pola na login i hasło 
- guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików
`/tables`
- wybór daty i godziny
- tabela z listą rezerwacji oraz wydarzeń 
    - każda kolumna będzie jednym stolikiem,
    - każdy wiersz = 30 minut 
    - ma przypominać widok tygodnia w kalendarzu googla gdzie w kolumnach zamiast dni są różne stoliki, po kliknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółow
`/tables/booking/:id`
- zawiera wszystkie informacje dot. rezerwacji,
- umożliwia edycje i zapisanie zmian 
`/tables/booking/new`
- analogicznie do powyższej bez początkowych informacji
`/tables/events/:id`
- zawiera wszystkie informacje dot. rezerwacji,
- umożliwia edycje i zapisanie zmian 
`/tables/events/new`
- analogicznie do powyższej bez początkowych informacji


# Widok kelnera
`/waiter`
- tabela 
    - w wierszach stoliki,
    - w kolumnach różne rodzaje informacji (status, czas od ostatniej aktywności),
    - w ostatniej kolumnie dostępne akcje dla danego stolika
`/waiter/order/new`
- numer stolika (edytowalny)
- menu produktów
- opcje wybranego produktu
- zamówienie (zamówione produkty z opcjami i ceną)
- kwota zamówienia
`/waiter/order/:id`
- jak powyższa 

# Widok kuchni
`/kitchen`
- wyświetla listę zamówień w kolejności ich złożenia,
- lista musi zawierać nr stolika lub zamówienia zdalnego oraz pełne info dot. zamówionych dań
- na liście musi być możliwość oznaczenia zamówienia jako zrealizowane