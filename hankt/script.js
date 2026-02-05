const lightbox = document.getElementById('lightbox');

const thumbs = document.querySelectorAll('.clickthumb')
thumbs.forEach(thumb => {
  thumb.addEventListener('click', e => {
    lightbox.classList.add('active')
		var popcontent = thumb.getAttribute('popcontent')
		document.getElementById('popcontainer').innerHTML	= popcontent
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})