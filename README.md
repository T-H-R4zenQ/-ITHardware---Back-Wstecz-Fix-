# ITHardware Navigation Fix

Rozszerzenie do przeglądarek Firefox i Chrome, które naprawia problem z przyciskiem "wstecz" na stronie ithardware.pl.

## Problem

Na stronie ithardware.pl podczas czytania artykułu i scrollowania treści, strona dodaje dodatkowe wpisy do historii przeglądarki. Skutkuje to tym, że:
- Pierwszy raz wciśnięcie "wstecz" - wraca na początek artykułu
- Drugi raz wciśnięcie "wstecz" - ponownie wraca na początek artykułu
- Trzeci raz wciśnięcie "wstecz" - dopiero teraz wraca do poprzedniej strony

## Rozwiązanie

Rozszerzenie przechwytuje próby dodawania nowych wpisów do historii podczas scrollowania i zamienia je na `replaceState`, które modyfikuje aktualny wpis zamiast dodawać nowy. Dzięki temu przycisk "wstecz" działa natychmiast.

## Instalacja

### Firefox
Wystarczy pobrać rozszerzenie na stronie firefox addons:
https://addons.mozilla.org/pl/firefox/addon/ithardware-back-wstecz-fix/

### Chrome/Edge/Brave (niestety nie mam konta deva za które się płaci, aby wrzucić na store chrome to rozszerzenie)

0. Pobieramy pliki rozszerzenia z github ->  (Zielony button) <> Code --> Download Zip --> i po pobraniu rozpakowujemy pliki do dowolnego folderu.
1. Otwórz Chrome
2. W pasku adresu wpisz: `chrome://extensions/`
3. Włącz "Tryb programisty" (Developer mode) w prawym górnym rogu
4. Kliknij "Załaduj rozpakowane" (Load unpacked)
5. Wybierz folder z rozszerzeniem
6. Rozszerzenie jest zainstalowane!

## Struktura plików

```
ithardware-fix/
├── manifest.json          # Konfiguracja rozszerzenia
├── content-inject.js      # Główny skrypt naprawiający nawigację
├── icon.png              # Ikona rozszerzenia
└── README.md             # Ten plik
```

## Jak to działa?

Rozszerzenie:
1. Ładuje się automatycznie tylko na stronach ithardware.pl
2. Wstrzykuje kod bezpośrednio do kontekstu strony (przed innymi skryptami)
3. Przechwytuje wywołania `history.pushState()`
4. Jeśli wykryje próbę dodania wpisu na tej samej stronie (pathname się nie zmienia), zamienia `pushState` na `replaceState`
5. To zapobiega dodawaniu niepotrzebnych wpisów do historii przeglądarki

## Zakres działania

Rozszerzenie działa **wyłącznie** na stronie ithardware.pl i nie ma żadnego wpływu na inne strony.

## Licencja

MIT License - możesz swobodnie używać i modyfikować.
