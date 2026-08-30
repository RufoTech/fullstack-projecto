function formTest(
    questionsClass,
    questionEndInputsClass,
    questionEndInputsPage2Class,
    headerClass,
    corporate
  ) {
    //console.trace();
    const codeApplySelectOption = document.querySelectorAll(
      `${questionsClass} .code-apply-select-option`
    );
  
    let questions;
    //console.log(questionsClass,'dadas');console.trace();
    if(questionsClass === '.code-home-apply'){
      questions = document.querySelectorAll('.form-part');
    }else{
      questions = document.querySelectorAll(questionsClass);
    }
    questions[0].style.display = 'block';

    let textInputs = document.querySelectorAll(
      ' #page2 .code-apply-select input'
    );
    inputCheckForLabel(textInputs);
  
    questions.forEach((element, index) => {
      if (element.querySelectorAll('.variant').length !== 0) {
        element.querySelectorAll('.variant').forEach((variant) => {
          variant.addEventListener('click', function () {
            element
              .querySelectorAll('.next-btn')
              .forEach((e) => (e.disabled = false));
            element
              .querySelectorAll('.next-btn')
              .forEach((e) => e.classList.add('code-btn-base'));
            element
              .querySelectorAll('.next-btn')
              .forEach((e) => e.classList.add('active'));
            element
              .querySelectorAll('.next-btn')
              .forEach((e) =>
                e.classList.remove(
                  corporate ? 'code-btn-disabled-corporate' : 'code-btn-disabled'
                )
              );
            if (index + 1 < questions.length) {
              element.querySelectorAll('.next-btn').forEach((e) => {
                e.addEventListener('click', function () {
                  element.style.display = 'none';
                  questions[index + 1].style.display = 'block';
                });
              });
            }
          });
        });
      } else {
        phoneCheck(document.querySelector('input[type="tel"]'));
  
        element.querySelectorAll('input').forEach((input) => {
          input.addEventListener('input', function () {
            let allInputsFilled = true;
            element.querySelectorAll('input').forEach((inputEl) => {
              if (inputEl.value.trim() === '') {
                allInputsFilled = false;
              }
            });
            if (allInputsFilled) {
              element
                .querySelectorAll('.next-btn')
                .forEach((e) => (e.disabled = false));
              element
                .querySelectorAll('.next-btn')
                .forEach((e) => e.classList.add('code-btn-base'));
              element
                .querySelectorAll('.next-btn')
                .forEach((e) => e.classList.add('active'));
              element
                .querySelectorAll('.next-btn')
                .forEach((e) =>
                  e.classList.remove(
                    corporate
                      ? 'code-btn-disabled-corporate'
                      : 'code-btn-disabled'
                  )
                );
            } else {
              element
                .querySelectorAll('.next-btn')
                .forEach((e) => (e.disabled = true));
              element
                .querySelectorAll('.next-btn')
                .forEach((e) => e.classList.remove('code-btn-base'));
              element
                .querySelectorAll('.next-btn')
                .forEach((e) => e.classList.remove('active'));
              element
                .querySelectorAll('.next-btn')
                .forEach((e) =>
                  e.classList.add(
                    corporate
                      ? 'code-btn-disabled-corporate'
                      : 'code-btn-disabled'
                  )
                );
            }
          });
        });
        if (index + 1 < questions.length) {
          // Check input value and add validation . If all input true go next page . This happen in *else*
          element.querySelectorAll('.next-btn').forEach((e) => {
            e.addEventListener('click', function (e) {
              var emailInput = document.querySelector('input[type="email"]');
              var phoneInput = document.querySelector('input[type="tel"]');
              //let endTest =document.querySelector('.end')
              if (element.classList.contains('end')) {
                if (
                  !emailPattern.test(emailInput.value) ||
                  !phonePattern.test(phoneInput.value)
                ) {
                  if (!emailPattern.test(emailInput.value)) {
                    emailInput.parentElement.parentElement.classList.add('error');
                  } else {
                    emailInput.parentElement.parentElement.classList.remove(
                      'error'
                    );
                  }
                  if (!phonePattern.test(phoneInput.value)) {
                    phoneInput.parentElement.parentElement.classList.add('error');
                  } else {
                    phoneInput.parentElement.parentElement.classList.remove(
                      'error'
                    );
                  }
                } else {
                  element.style.display = 'none';
                  questions[index + 1].style.display = 'block';
                }
              } else {
                element.style.display = 'none';
                questions[index + 1].style.display = 'block';
              }
            });
          });
  
          // Form submit happen . If we haven't validation . go succes page .and start animation
          // !!!!!!!!There form is preventDefault()!!!!!!
  
          if (element.querySelector('button[type="submit"]')) {
            element.querySelectorAll('button[type="submit"]').forEach((btn) => {
              btn.addEventListener('click', (e) => {
                var emailInput = document.querySelector('input[type="email"]');
                var phoneInput = document.querySelector('input[type="tel"]');
                e.preventDefault();
  
                if (
                  (emailPattern.test(emailInput.value) &&
                    phonePattern.test(phoneInput.value)) ||
                  !element.classList.contains('end')
                ) {
                  
                  let _v2024_form_submit_test=v2024_form_submit(e);

                }
              });
            });
          }
        }
      }
    });
  
    if (codeApplySelectOption) {
      codeApplySelectOption.forEach((item) => {
        item.addEventListener('change', function () {
          codeApplySelectOption.forEach((option) => {
            option.classList.remove('active');
          });
          item.classList.add('active');
        });
      });
    }
  
    let questionEndInputs = document.querySelectorAll(questionEndInputsClass);
    let questionEndInputsPage2 = document.querySelectorAll(
      questionEndInputsPage2Class
    );
    //Appay part 2 Input is empaty or not .For this reason change label position top
    inputCheckForLabel(questionEndInputs);
    inputCheckForLabel(questionEndInputsPage2);
  }



function ca_open_tab(i) {
    jQuery(".catabs").hide();
    jQuery(".catab"+i).show();
    jQuery(".catabheads").removeClass("tactive");
    jQuery(".catabhead"+i).addClass("tactive");
    jQuery(".catabs").toggleClass("tactive");
}
jQuery(".catabs select").on("change",function(){
    if(!jQuery(this).parent().parent().hasClass("tactive"))return;
    if(jQuery(this).parent().parent().find(".hoursfield").val()!="" && jQuery(this).parent().parent().find(".hoursfield").val()!=""){
        jQuery(this).parent().parent().parent().find(".bsubmit").removeAttr("disabled");
        jQuery(this).parent().parent().parent().find(".bsubmit").removeClass("code-btn-disabled ");
        jQuery(this).parent().parent().parent().find(".bsubmit").addClass("code-btn-base");
    }
    else {
        jQuery(this).parent().parent().parent().find(".bsubmit").attr("disabled","disabled");
        jQuery(this).parent().parent().parent().find(".bsubmit").addClass("code-btn-disabled ");
        jQuery(this).parent().parent().parent().find(".bsubmit").removeClass("code-btn-base");
    }
    
});