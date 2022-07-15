const batman = document.querySelector('.batman')
const pipe = document.querySelector('.pipe')
const jump = () => {
  batman.classList.add('jump')

  setTimeout(() => {
    batman.classList.remove('jump')
  }, 600)
}

const loop = setInterval(() => {
  console.log('loop')

  const pipePosition = pipe.offsetLeft
  const batmanPosition = +window
    .getComputedStyle(batman)
    .bottom.replace('px', '')

  if (pipePosition <= 190 && pipePosition > 0 && batmanPosition < 80) {
    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`

    batman.style.animation = 'none'
    batman.style.bottom = `${batmanPosition}px`

    batman.src = './img/fantasma.gif'
    batman.style.width = '250px'
    mario.style.marginLeft = '100px'

    clearInterval(loop)
  }
}, 10)

document.addEventListener('keydown', jump)
