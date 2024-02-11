$(() => {
  let noClicks = 0, i = 0;
  $('#btn-si').on('click', () => {
    $('body').html(/*html*/`
    <img src="https://media.tenor.com/NsouEvrISgQAAAAi/love.gif" alt="Gif" width="200" height="200">
    <h1 class="animate">¡AAAAAAH MUERO DE AMOR!</h1>
  `)
  })
  $('#btn-no').on('click', () => {
    $('#gif').html(/*html*/`<img src=${gifsTristes[i]} alt="Gif" width="200" height="200">`)
    i++;
    if (i >= gifsTristes.length) i = 0;
    $("#btn-no").text(frases[noClicks]);
    noClicks++;
    if (noClicks >= frases.length) noClicks = 0;
    $("#btn-si").css('font-size', `${16 + noClicks * 10}px`)
  })
})