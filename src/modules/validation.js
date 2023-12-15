const validation = (formId) => {
  const form = document.getElementById(formId)

  form.addEventListener('submit', (e) => {
      e.preventDefault()

      const formName = form.querySelector('.form-name')
      const formEmail = form.querySelector('.form-email')
      const formPhone = form.querySelector('.form-phone')
      const formMessage = form.querySelector('.mess')

      let isError = false

      if (!/[^а-яА-Я\s]/g.test(formName.value) && formName.value !== '') {
        isError = false
      } else {
        isError = true
      }

      if (formMessage) {
        if (!/[^а-яА-Я\-\s]/g.test(formMessage.value)) {
          isError = false
        } else {
          isError = true
        }
      }

      if (!/[^а-яА-Я\s\d\-\.\,\!\?\:]/g.test(formEmail.value) && formEmail.value !== '') {
        isError = false
      } else {
        isError = true
      }

      if (!/[^\d\(\)\-\+]/g.test(formPhone.value) && formPhone.value !== '') {
        isError = false
      } else {
        isError = true
      }

      if (isError === false) {
        form.classList.add('success')
      } else {
        form.classList.remove('success')
      }
      
    })

}

export default validation