> :star: _Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s2e03-react-composition` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/)._

&nbsp;

# `#05` React: Kompozycja

W tym zadaniu w komponencie `<Textarea />` stworzysz pole tekstowe, które zwiększa swoją wysokość wraz z rosnącą liczbą wierszy.

Wysokość elementu `<textarea />` ma się zacząć zwiększać w momencie, w którym normalnie pojawiłby się pionowy pasek przewijania, i skończyć rosnąć przy wysokości `100px`.

Zauważ, że `state` przechowujący treść pola formularza jest w `<App />` i niech tak zostanie – zawartość komponentu `<Textarea />` ma być kontrolowana przez stan w `<App />`.

## Podpowiedź

Użyj metody `.getSnapshotBeforeUpdate()` – pozwoli to sprawdzić wysokość `<textarea />` (`.offsetHeight`) jeszcze przed aktualizacją danych. Zwróć w tej metodzie informacje, które będą określać, czy wysokość po aktualizacji ma zostać zmieniona (np. `{ resize: true }`).

W metodzie `.componentDidUpdate()` zmodyfikuj wysokość dla `<teaxtarea />`, jeśli `.offsetHeight < .scrollHeight` oraz gdy `snapshot.resize` jest równe `true`.

Aby móc sprawdzić wysokość `<textarea />`, musisz utworzyć referencję dla tego elementu.

&nbsp;

> :arrow_left: [_poprzednie zadanie_](./../04) | ~~_następne zadanie_~~ :arrow_right:
