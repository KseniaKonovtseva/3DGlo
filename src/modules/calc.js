const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block')
  const calcType = document.querySelector('.calc-type')
  const calcSquare = document.querySelector('.calc-square')
  const calcCount = document.querySelector('.calc-count')
  const calcDay = document.querySelector('.calc-day')
  const total = document.getElementById('total')
  
  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value
    const calcSquareValue = calcSquare.value

    let totalValue = 0
    let calcCountValue = 1
    let calcDayValue = 1

    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10
    }

    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5
    }
    
    if(calcType.value && calcSquare.value) {
      totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue

      const totalAnimate = () => {
        const time = 2000
        const step = 100
        let start = 0
        const count = Math.round(time / (totalValue / step))
        
        const interval = setInterval(() => {

          if (start < totalValue) {
            start += step
            total.textContent = start
          } else {
            clearInterval(interval)
          }
        }, count)
      }
      totalAnimate()
    } else {
      totalValue = 0
    }
  }

  calcBlock.addEventListener('change', (e) => {
    countCalc()
  })
}

export default calc