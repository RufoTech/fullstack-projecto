const checkText = (length, value, currentLength) => {
  if (!/^[a-zA-Z]*$/g.test(value) || currentLength == length) {
    return false;
  }
  return true;
}

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const phonePattern = /^\+994\s\(\d{2}\)\s\d{3}\s\d{2}\s\d{2}$/;

const phoneCheck = (phoneNumberInput) => {
  phoneNumberInput.addEventListener('input', function (e) {
    let inputValue = this.value;

    inputValue = inputValue.replace(/\D/g, '');

    // Başına "+994" ekleyin sadece başlangıçta
    if (!inputValue.startsWith('994') && inputValue !== '') {
      inputValue = '994 ' + inputValue;
    }

    if (inputValue === '') {
      inputValue = '994 ';
    }

    // Telefon numarasını formatlayın: +994 (XX) XXX XX XX
    var x = inputValue.match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
    e.target.value =
      '+' +
      (!x[2] ? x[1] : '' + x[1]) +
      (x[2]
        ? ' (' +
          x[2] +
          (x[3]
            ? ') ' + x[3] + (x[4] ? ' ' + x[4] : '') + (x[5] ? ' ' + x[5] : '')
            : '')
        : '');
  });

  phoneNumberInput.addEventListener('focus', function () {
    // Eğer inputa odaklandığınızda "+" karakteri ekli değilse, ekleyin
    if (!this.value.startsWith('+994')) {
      this.value = '+994 ' + this.value;
    }

    if (this.value === '+994') {
      this.value = '+994 ';
    }
  });

  phoneNumberInput.addEventListener('blur', function () {
    // Eğer input alanı sadece "+994" ise, içeriği sıfırlayın
    if (this.value === '+994 ' || this.value === '+994') {
      this.value = '';
    }
  });
};

const inputCheckForLabel = (textInputs) => {
  textInputs.forEach((element) => {
    //console.log(element.closest('div').classList,'dsadssaads');
    element.addEventListener('input', function () {
      element.nextElementSibling.classList.add('active');
      element.closest('div').classList.add('input-active');
      if (element.value.trim() == '') {
        element.nextElementSibling.classList.remove('active');
        element.closest('div').classList.remove('input-active');
      }
    });
    element.addEventListener('focus', function () {
      element.nextElementSibling.classList.add('active');
      element.closest('div').classList.add('input-active');
    });
    element.addEventListener('blur', function () {
      element.nextElementSibling.classList.add('active');
      element.closest('div').classList.add('input-active');
      if (element.value.trim() == '') {
        element.nextElementSibling.classList.remove('active');
        element.closest('div').classList.remove('input-active');
      }
    });
  });
};
