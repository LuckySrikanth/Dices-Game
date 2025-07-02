## 🎲 Dice Duel

**Dice Duel** is a simple and fun browser-based dice game built with **JavaScript**, **HTML**, and **CSS**.
Players take turns rolling the dice — the first to accumulate the most sixes within the time limit wins!

---

### 📌 Features

✅ Roll a dice and switch between players
✅ Score points by rolling sixes
✅ Visual indicators for active player
✅ 30-second timer for each round
✅ Automatic winner detection
✅ New game reset

---

### 🛠 Tech Stack

* Vanilla JavaScript
* HTML / CSS
* Webpack or similar bundler (if using `import` for images)

---

### 🎮 Game Rules

* Players alternate turns by clicking the **Roll Dice** button.
* A six earns **1 point** for the active player.
* A red dot and background indicate the active player.
* The round ends automatically after **30 seconds**, and the winner is declared.
* Start a new round using the **New Game** button.

---

### 🗂 Project Structure (example)

```
src/
 ├── img/
 │    ├── dice-1.png
 │    ├── dice-2.png
 │    ├── dice-3.png
 │    ├── dice-4.png
 │    ├── dice-5.png
 │    └── dice-6.png
 ├── index.html
 ├── style.css
 └── game.js
```

---

### ⚠️ Notes

* Make sure the dice images are in the correct directory (`./img/`) if using `import`.
* You can enhance this game by adding sounds, animations, or multiplayer online functionality.

---

### 🙌 Credits

Made with ❤️ using plain JavaScript
