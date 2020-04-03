// 1. Создать страницу, которая выводит нумерованный список песен:
var playList = [
  {
    author: "LED ZEPPELIN",

    song: "STAIRWAY TO HEAVEN"
  },

  {
    author: "QUEEN",

    song: "BOHEMIAN RHAPSODY"
  },

  {
    author: "LYNYRD SKYNYRD",

    song: "FREE BIRD"
  },

  {
    author: "DEEP PURPLE",

    song: "SMOKE ON THE WATER"
  },

  {
    author: "JIMI HENDRIX",

    song: "ALL ALONG THE WATCHTOWER"
  },

  {
    author: "AC/DC",

    song: "BACK IN BLACK"
  },

  {
    author: "QUEEN",

    song: "WE WILL ROCK YOU"
  },

  {
    author: "METALLICA",

    song: "ENTER SANDMAN"
  }
];

document.write("<ol>");

for (let i = 0; i < playList.length; i++) {
  let listSong = `author: ${playList[i].author}  song: ${playList[i].song}`;
  document.write(`<li> ${listSong} </li>`);
}
document.write("</ol>");

// 2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть".
// Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.
