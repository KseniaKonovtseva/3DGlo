const validation = (formId) => {
  const form = document.getElementById(formId)

  form.addEventListener('submit', (e) => {
      e.preventDefault()

      const formName = form.querySelector('.form-name')
      const formEmail = form.querySelector('.form-email')
      const formPhone = form.querySelector('.form-phone')
      const formMessage = form.querySelector('.mess')

      let isError = false
      
      if (/[^а-яА-ЯёЁ\s]/g.test(formName.value) && formName.value !== '') {
        isError = true
      }

      if (/[w\s\-\.\,\!\?\:]/g.test(formEmail.value) && formEmail.value !== '') {
        isError = true
      }

      if (/[^\d\(\)\-\+]/g.test(formPhone.value) && formPhone.value !== '') {
        isError = true
      }

      if (formMessage) {
        if (/[^а-яА-Я\-\s]/g.test(formMessage.value)) {
          isError = true
        }
      }

      if (isError === false) {
        form.classList.add('success')
      } else {
        form.classList.remove('success')
      }
      
    })

}

export default validation