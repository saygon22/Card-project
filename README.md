# Card-project 🃏

Prosty i efektowny projekt front-endowy przedstawiający interaktywną talię kart. Głównym elementem strony jest animowany wachlarz – po najechaniu kursorem myszy na talię, karty płynnie rozsuwają się na boki, a wskazanie konkretnej karty wysuwa ją na pierwszy plan.

Projekt powstał w celach edukacyjnych na podstawie tutorialu z serwisu YouTube, a następnie został przeze mnie zmodyfikowany o własną zawartość tekstową oraz autorskie grafiki.

## 🚀 Funkcje i działanie

- **Efekt Rozsuwania (Fan-out):** Po najechaniu myszką na kontener `.deck`, przypisane do kart klasy (`.c1` do `.c5`) aktywują regułę `transform: translate()`, rozsuwając elementy symetrycznie w osi X.
- **Interaktywne Wyróżnienie:** Najechanie na pojedynczą kartę (`.card:hover`) zmienia jej kolor tła i dynamicznie wynosi ją na samą górę warstw za pomocą właściwości `z-index`.
- **Płynna Animacja:** Ruch kart sterowany jest zaawansowaną krzywą przejścia `transition: all 0.6s cubic-bezier(0.75, -0.5, 0.27, 1.55)`, co daje naturalny, lekko sprężysty efekt wizualny.
- **Centrowanie Flexbox:** Całość strony została idealnie wyśrodkowana w oknie przeglądarki przy użyciu nowoczesnego układu Flexbox.

## 🧠 Czego się nauczyłem?

Jako osoba stawiająca pierwsze kroki w HTML i CSS, podczas pracy nad tym projektem przeanalizowałem i zrozumiałem:
1. **Zasady działania warstw (`z-index`)** – jak kontrolować, które elementy na ekranie przykrywają inne.
2. **Transformacje CSS (`transform: translate`)** – przesuwanie elementów bez zaburzania struktury reszty strony.
3. **Przejścia i animacje (`transition`)** – jak zmieniać stany elementów w sposób płynny, a nie natychmiastowy.
4. **Pracę z grafiką (`object-fit: cover`)** – jak kontrolować zachowanie obrazków, aby idealnie wypełniały swoje kontenery bez zniekształcania proporcji.

## 🛠️ Użyte technologie

- **HTML5** – struktura strony (tekst, kontenery sekcji kart).
- **CSS3** – pozycjonowanie (Flexbox), style wizualne oraz animacje.

## 📁 Struktura plików

```text
Card-project/
├── index.html       # Główny plik z kodem HTML i sekcją stylów <style>
├── karta 1.png      # Grafika karty nr 1
├── karta 2.jpg      # Grafika karty nr 2
├── karta 3.jpg      # Grafika karty nr 3
├── karta 4.png      # Grafika karty nr 4
└── karta 5.webp     # Grafika karty nr 5
