
> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s2e03-react-composition` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#03` React: Kompozycja


Ponownie będziemy operować na produktach. Tym razem umożliwimy użytkownikowi wybór produktu do zakupu oraz jego usunięcie z koszyka.


Do zrealizowania zadania potrzebujemy 3 komponentów:
* `<Category />` – wyświetla listę dostępnych produktów. Produkty są renderwane dzięki komponentowi `<Product />`
* `<Cart />` – wyświetla listę produktów wybranych do zakupu. Produkty te są również renderowane przez komponent `<Product />`o
* `<Product />` – wyświetla informacje o produkcie.

## `<Product />`

Zauważ, że ten komponent jest wykorzystywany w dwóch różnych miejscach. 

W `<Category />` mamy mieć możliwość zakupu tego produktu, więc przydałby się przycisk „dodaj do koszyka”. Jeśli ten produkt został już dodany do koszyka, to przycisk powinien być nieaktywny (`disabled`).

Natomiast w `<Cart />` będzie potrzebny przycisk „usuń z koszyka”.

Obie akcje, tj. dodawanie i usuwanie, mają być realizowane na danych w `<App />`, dlatego to tam będziemy musieli zdefiniować odpowiednie metody i przekazać je do odpowiednich komponentów.

Aby w `<Product />` rozróżnić, które rozwiązanie (dla kategorii czy koszyka) ma być implementowane, można temu komponentowi przekazywać odpowiednie props, np. `<Product isCategory={ true } />` lub `<Product isCart={ true } />`.

Spróbuj renderować produkty między znacznikami rodzica, tj. jako dzieci tego komponentu:

```
<Category>
    <Product />
    <Product />
</Category>
```

lub

```
<Cart>
    <Product />
    <Product />
</Cart>
```

Możesz użyć do tego odpowiedniej zmiennej i metody `.map()`, np.:

```
const list = ... .map( ... );
<Category>
    { list }
</Category>
```
&nbsp;

> :arrow_left: [*poprzednie zadanie*](./../02) | [*następne zadanie*](./../04) :arrow_right:
