var currentTheme = window.localStorage.getItem('Theme')
document.body.setAttribute('class', currentTheme)
var changeBackgroundTheme = function () {
  // var currentTheme = window.localStorage.getItem('Theme')
  if (currentTheme === null) {
    currentTheme = 'day-theme'
    document.body.setAttribute('class', 'day-theme')
  } else {
    if (currentTheme === 'day-theme') {
      document.body.setAttribute('class', 'night-theme')
      currentTheme = 'night-theme'
    } else {
      document.body.setAttribute('class', 'day-theme')
      currentTheme = 'day-theme'
    }
  }
  window.localStorage.setItem('Theme', currentTheme)
}
document.getElementById('dayNightChange').addEventListener('click', changeBackgroundTheme)

var currentVisitTimes = window.localStorage.getItem('visitTime')
if (currentVisitTimes === null) {
  currentVisitTimes = 1
} else {
  currentVisitTimes = parseInt(currentVisitTimes)
}
var visitCount = document.getElementById('visitTimes')
visitCount.textContent = currentVisitTimes
currentVisitTimes = currentVisitTimes + 1
window.localStorage.setItem('visitTime', currentVisitTimes)

document.getElementById('reset').addEventListener('click', function () {
  window.localStorage.removeItem('Theme')
  window.localStorage.removeItem('visitTime')
  window.localStorage.clear()
})
