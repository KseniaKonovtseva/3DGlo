const validation = () => {
  const numInputs = document.querySelectorAll('.calc-block input')
  const forms = document.querySelectorAll('[name="user_form"]')

  numInputs.forEach(el => {
    el.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D+/, "")
    })
  })

  forms.forEach(el => {
    el.addEventListener('input', (e) => {
      e.preventDefault()

      const formName = el.querySelector('.form-name')
      const formEmail = el.querySelector('.form-email')
      const formPhone = el.querySelector('.form-phone')
      const formMessage = el.querySelector('.mess')

      let isError = false

      if (!/[^а-яА-Я\s]/g.test(formName.value) && formName.value !== '') {
        console.log('okName');
      } else {
        isError = true
      }

      if (formMessage) {
        if (!/[^а-яА-Я\-\s]/g.test(formMessage.value)) {
          console.log('okMes');
        } else {
          isError = true
        }
      }

      if (!/[^а-яА-Я\s\d\-\.\,\!\?\:]/g.test(formEmail.value) && formEmail.value !== '') {
        console.log('okEmail');
      } else {
        isError = true
      }

      if (!/[^\d\(\)\-\+]/g.test(formPhone.value) && formPhone.value !== '') {
        console.log('okTel');
      } else {
        isError = true
      }

    })
  })

}

export default validation