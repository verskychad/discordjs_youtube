# Discord.JS v14 BOT

Witaj, drogi widzu! Tutaj znajdziesz kod źródłowy bota, który jest pisany przeze mnie na YouTube. Ten kod nie posiada żadnych praw autorskich, więc możesz go używać w swoich projektach bez pozwolenia. Miło by było, gdybyś mógł/mogła dodać link do mojego kanału lub dodać mój nick "verskychad" w credits'ach w swoim projekcie.

## Spis treści

- [Wymagania](#wymagania)
- [Instalacja](#instalacja)
- [Konfiguracja](#konfiguracja)
- [Uruchamianie](#uruchamianie)

## Wymagania

- IDE (np. [Visual Studio Code](https://code.visualstudio.com))
- Node.js v20.15.0 (LTS) lub nowszy | [POBIERZ](https://nodejs.org)
- Token bota Discord (możesz uzyskać go z [Discord Developer Portal](https://discord.com/developers/applications))

## Instalacja

**Pobierz pliki bota:**

Wybierz wersję, którą chcesz pobrać. Wszystkie wersje znajdziesz w katalogu "BOT"

**Zainstaluj wymagane pakiety**

Te polecenie zainstaluje wszystkie potrzebne zależności bota, które znajdują się w pliku `package.json`

    ```sh
    npm install
    ```

## Konfiguracja

Edytuj plik `.env` znajdujący się w głównym katalogu projektu i dodaj swój token bota:

    ```env
    TOKEN=twoj-token
    ```

## Uruchamianie

Aby uruchomić bota, użyj poniższego polecenia:

```sh
node index.js
```

lub:

```sh
nodemon index.js
```

jeśli chcesz by bot restartował się po każdej zapisanej zmianie w kodzie
