const numberOfDrumButtons = document.querySelectorAll('.drum').length

for (i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    alert('Button pressed!')
  })
}
