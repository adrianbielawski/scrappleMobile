import i18n from 'i18next';
import i18nextReactNative from 'i18next-react-native-language-detector'
import { initReactI18next } from 'react-i18next';

const resources = {
  'en-GB': {
    translation: {
      "Language" : "Language",
      "Player's time limit" : "Player's time limit",
      "Add Player" : "Add Player",
      "Player" : "Player",
      "Start game" : 'Start game',
      "Finish the game" : "Finish the game",
      "Finish game" : "Finish game",
      "Show two-letter words" : "Show two-letter words",
      "Hide two-letter words" : "Hide two-letter words",
      "Check your word" : "Check your word",
      "Add points" : "Add points",
      "ItsTurnNow" : "It is <1>{{name}}</1>'s turn now",
      "Current score " : "Current score ",
      "All points" : "All points",
      "BestScoreNum" : "Best score: {{points}}",
      "RoundNum" : "Round {{num}}:",
      "PointsCount" : {
        "key": "{{count}} point",
        "key_plural": "{{count}} points",
      },
      "Game results" : "Game results",
      "Subtract points of unused letters" : "Subtract points of unused letters",
      "Exit" : "Exit",
      "Continue" : "Continue",
      "1st place" : "1st place",
      "2nd place" : "2nd place",
      "3rd place" : "3rd place",
      "Total" : "Total: ",
      "Best score" : "Best score: ",
      //Alerts
      "Yes" : "Yes",
      "No" : "No",
      "PlayerExists": "Player with name {{name}} already exists",
      "TypeName" : "Please type in player's name",
      "MaxPlayers" : "Max 4 players",
      "add2Players" : "Please add at least 2 players",
      "MinimumTimeLimit" : "Minimum player's time limit is 1 min",
      "FinishConfirmation" : "Are you sure you want to finish this game?",
    }
  },
  'pl-PL': {
    translation: {
      "Language" : 'Język',
      "Player's time limit" : 'Limit czasu',
      "Cancel" : "Wróć",
      "Ok" : "Ok",
      "Add Player" : 'Dodaj gracza',
      "Player" : 'Gracz',
      "Start game" : 'Start',
      "Finish the game" : "Zakończ grę",
      "Finish game" : "Zakończ grę",
      "Show two-letter words" : "Pokaż slowa dwuliterowe",
      "Hide two-letter words" : "Ukryj slowa dwuliterowe",
      "Check your word" : "Sprawdź słowo",
      "Add points" : "Dodaj punkty",
      "ItsTurnNow" : "Teraz gra <1>{{name}}</1>",
      "Current score " : "Suma punktów ",
      "All points" : "Punkty",
      "BestScoreNum" : "Nalepszy wynik: {{points}}",
      "RoundNum" : "Runda {{num}}:",
      "PointsCount" : {
        "key_0": "{{count}} punkt",
        "key_1": "{{count}} punkty",
        "key_2": "{{count}} punktów",
      },
      "Game results" : "Wyniki Gry",
      "Subtract points of unused letters" : "Odejmij wartość pozostałych liter",
      "Exit" : "Wyjdź",
      "Continue" : "Kontynuuj",
      "1st place" : "Pierwsze miejsce",
      "2nd place" : "Drugie miejsce",
      "3rd place" : "Trzecie miejsce",
      "4th place" : "Czwarte miejsce",
      "Total" : "Wynik: ",
      "Best score" : "Nalepszy wynik: ",
      //Alert
      "Yes" : "Tak",
      "No" : "Nie",
      "Value must be positive number" : "Value must be positive number",
      "PlayerExists" : "Gracz o imieniu {{name}} już istnieje",
      "TypeName" : "Proszę podać imię gracza",
      "MaxPlayers" : "Maksymalnie 4 graczy",
      "Please add at least 2 players" : "Proszę dodać co najmniej 2 graczy",
      "MinimumTimeLimit" : "Minimalny limit czasu to 1 min",
      "FinishConfirmation" : "Jesteś pewien, że chcesz zakończyć grę?",
    }
  }
};

i18n
  .use(i18nextReactNative)
  .use(initReactI18next)
  .init({
    resources,
    lang: 'en-GB',
    fallbackLng: 'en-GB',
    debug: false,
    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;