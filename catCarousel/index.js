'use strict'
function thumbnailClicker() {
    $('.thumbnail').on('click', event => {
        event.preventDefault();
        const thumbSrc = $(event.currentTarget).find('img').attr('src');
        const thumbSrc = $(event.currentTarget).find('img').attr('alt');
        $('.hero img').attr('src', thumbSrc);
        $('.hero img').attr('alt', thumbAlt);
});
}
   thumbnailClicker();
  