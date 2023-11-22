const validation = () => {
  const numInputs = document.querySelectorAll('.calc-block input')
  const forms = document.querySelectorAll('[name="user_form"]')
  // const formName = document.querySelectorAll('.form-name')
  // const formEmail = document.querySelectorAll('.form-email')
  // const formPhone = document.querySelectorAll('.form-phone')
  // const formMessage = document.querySelector('.mess')

  numInputs.forEach(el => {
    el.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D+/, "")
    })
  })

  forms.forEach(el => {
    el.addEventListener('submit', (e) => {
      e.preventDefault()

      const formName = el.querySelectorAll('.form-name')
      const formEmail = el.querySelectorAll('.form-email')
      const formPhone = el.querySelectorAll('.form-phone')
      const formMessage = el.querySelector('.mess')

      let isError = false

      if (!/[^а-яА-Я]/g.test(formName.value)) {
        console.log('okName');
      } else {
        console.log('noName');
      }

      if (formMessage) {
        if (!/[^а-яА-Я\-\s]/g.test(formMessage.value)) {
          console.log('okMes');
        } else {
          console.log('noMes');
        }
      }

      if (!/[^\w\@\-\_\.\!\~\*\']/g.test(formEmail.value)) {
        console.log('okEmail');
      } else {
        console.log('noEmail');
      }

      if (!/[^\d\(\)\-]/g.test(formPhone.value)) {
        console.log('okTel');
      } else {
        console.log('noTel');
      }

    })
  })

  // formName.forEach(el => {
  //   el.addEventListener('input', (e) => {
  //     e.target.value = e.target.value.replace(/[^а-яА-Я]/g, "")
  //   })
  // })

  // formMessage.addEventListener('input', (e) => {
  //   e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]/g, "")
  // })

  // formEmail.forEach(el => {
  //   el.addEventListener('input', (e) => {
  //     e.target.value = e.target.value.replace(/[^\w\@\-\_\.\!\~\*\']/g, "")
  //   })
  // })

  // formPhone.forEach(el => {
  //   el.addEventListener('input', (e) => {
  //     e.target.value = e.target.value.replace(/[^\d\(\)\-]/g, "")
  //   })
  // })

}

export default validation