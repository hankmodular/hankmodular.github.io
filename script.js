const lightbox = document.getElementById('lightbox');
const popx = document.getElementById('popx');

const thumbs = document.querySelectorAll('.comicsgridthumb')
thumbs.forEach(thumb => {
  thumb.addEventListener('click', e => {
    /*lightbox.classList.add('active')*/
		var desc = thumb.getAttribute('desc')
		var pic = thumb.firstChild.getAttribute('src')
		document.getElementById('poptxt').innerHTML	= desc
		document.getElementById('popimg').src = pic
    lightbox.showModal()
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.close()
})

function closelightbox() {
  lightbox.close()
}

popx.addEventListener('click', closelightbox);