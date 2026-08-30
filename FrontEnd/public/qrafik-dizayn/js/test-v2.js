function v2024_getCookie(name) {
  let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : '';
}


function v2024_whichcourse_submit(){
  if (typeof grecaptcha !== 'undefined') {
    grecaptcha.ready(function() {
      grecaptcha.execute('6Ld6qEgeAAAAALMvz7viItqI3T8ezM2b2h0XpLW3', {action: 'submit'}).then(function(token) {
          jQuery(".recaptoken").val(token);
          document.querySelector(".code-which-course-main form").submit();
      });
    });
  } else {
    document.querySelector(".code-which-course-main form").submit();
  }
}

window.code_site_url='https://code.edu.az/';
window._page_load_time = Date.now();

  function v2024_form_submit(e,_this){
  e.preventDefault();

  if(Date.now() - window._page_load_time < 7000) return;

  if(window.form_submitted_new==1)return;

  window.form_submitted_new=1;
  setTimeout(function(){window.form_submitted_new='';},10000);

  console.log('submitted');
  
  function executeFormSubmit(token) {
      let _formselector='.ca_form';
      if(window.ca_subform!='' && window.ca_subform!=undefined)_formselector=window.ca_subform;

      var formData = new FormData();
      formData.append('ad', jQuery(_formselector + " #input-name").val());
      formData.append('soyad', jQuery(_formselector + " #input-surname").val());
      
      let proqramname=jQuery(_formselector+" [name='apply']:checked").val();
      if(proqramname==undefined)proqramname=jQuery(_formselector + " [name='apply']").val();
      console.log('proqname',proqramname);
      
      formData.append('proqram',proqramname);


      formData.append('telefon', jQuery(_formselector + " #input-phone").val());
      formData.append('email', jQuery(_formselector + " #input-mail").val());

      formData.append('ca_nonce', jQuery(_formselector + " #ca_nonce").val());

      if(jQuery(_formselector + " #company").val()!=undefined)
      formData.append('company', jQuery(_formselector + " #company").val());
      

      if(token) formData.append('token', token);
          //formData.append('rawdata',jQuery(_formselector).serializeArray());
          
          
          formData.append('1stvis', v2024_getCookie('ca_1stvis'));
          formData.append('lastvis', v2024_getCookie('ca_lastvis'));


          if(jQuery(_formselector+'[name="text"]').val()){
            formData.append('comment',jQuery(_formselector+' [name="text"]').val());
          }

          if(jQuery(_formselector+' [name="entered_otp_code"]').val()){
            formData.append('entered_otp_code',jQuery(_formselector+' [name="entered_otp_code"]').val());
          }

          if(jQuery(_formselector+' [name="consultation_day"]').val()){
            formData.append('consultation_day',jQuery(_formselector+' [name="consultation_day"]').val());
          }
          if(jQuery(_formselector+' [name="consultation_time"]').val()){
            formData.append('consultation_time',jQuery(_formselector+' [name="consultation_time"]').val());
          }
          if(jQuery(_formselector+' [name="callme_day"]').val()){
            formData.append('callme_day',jQuery(_formselector+' [name="callme_day"]').val());
          }
          if(jQuery(_formselector+' [name="callme_time"]').val()){
            formData.append('callme_time',jQuery(_formselector+' [name="callme_time"]').val());
          }

          var urlParams = new URLSearchParams(window.location.search);
          if(urlParams.get('utm_source')) formData.append('utm_source', urlParams.get('utm_source'));
          if(urlParams.get('utm_campaign')) formData.append('utm_campaign', urlParams.get('utm_campaign'));
          if(urlParams.get('utm_education')) formData.append('utm_education', urlParams.get('utm_education'));

          formData.append('rawdata', JSON.stringify(jQuery(_formselector).serializeArray()));


          jQuery.ajax( {
              url: window.code_site_url+"/wp-json/app/v1/muraciet_et",
              method: 'POST',
              data:formData,
              contentType: false,
              processData: false
          } ).done( function ( response ) { 
              if(response[0]=='failed'){
                  jQuery("#subresult").html("<div style='color:red;'>"+response[1]
                    +" <a href='javascript://' onclick='ca_reset_otp_message()'> - <b>Yenidən cəhd edin</b>.</a></div>");
                  
                    if(window.ca_subform==undefined)window.ca_subform='.ca_form';
                    jQuery(window.ca_subform+' [type="submit"]').removeAttr("disabled");
              }
              else{
                  if(window.contactformname==undefined)window.contactformname='general';
                  //console.log(response);
                  let winhref="https://code.edu.az/thankyou?frm="+window.contactformname;
                  if(response[2]!=undefined){
                    winhref+="&contactid="+response[2];
                  }
                  window.location.href=winhref;
                  //jQuery("#subresult").html("<div style='background:green;'>"+response[1]+"</div>");
                  //jQuery("#apply-form").trigger("reset");
              }
          } );

          return true;
  }

  if (typeof grecaptcha !== 'undefined') {
    grecaptcha.ready(function() {
        grecaptcha.execute('6Ld6qEgeAAAAALMvz7viItqI3T8ezM2b2h0XpLW3', {action: 'submit'}).then(function(token) {
            executeFormSubmit(token);
        });
    });
  } else {
    executeFormSubmit('');
  }
  return true;
}


function ca_reset_otp_message(){
  window.location.reload();
  /*
  if(jQuery("#page4").html()!=undefined){
    jQuery("#page3").show();jQuery("#page4").hide();
  }
  else {
    jQuery("#page2").show();jQuery("#page3").hide();
  }
  jQuery("#subresult").html("");
  */
}


const homePage = document.querySelector('.code-home-main');
const educationPage2 = document.querySelector('.code-education-main');

const studentPage1 = document.querySelector('.code-student-main');
const scholarPage = document.querySelector('.code-scholar-main');
const technestPage2 = document.querySelector('.code-technest-main');
const caScholarshipPage2 = document.querySelector('.code-ca-scholarship-main');
const codeForFutePage2 = document.querySelector('.code-code-for-future-main');
const whichCourse = document.querySelector('.code-which-course-main');
const applyCourse = document.querySelector('.code-apply-main');
const applyMasterClassCourse = document.querySelector(
  '.code-apply-masterclass-main'
);
const applySpecificDateCourse = document.querySelector(
  '.code-apply-specific-date-main'
);
const corporateApplySpecificDateCourse = document.querySelector(
  '.code-corporate-apply-specific-date-main'
);
const corporateApplyPartnership = document.querySelector(
  '.code-corporate-apply-partnership-main'
);
const eventPage2 = document.querySelector('.code-event-main');
const vacansyPage2 = document.querySelector('.code-vacancy-main');
const vacansyInnerPage2 = document.querySelector('.code-vacancy-inner-main');
const corporateEducationPage2 = document.querySelector(
  '.code-corporate-education-main'
);
let corporateEducationDesginPage2 = document.querySelector(
  '.code-corporate-education-desgin-main'
);
let corporateGameEducation = document.querySelector(
  '.code-corporate-education-game-main'
);
let corporateVirtuPage2 = document.querySelector(
  '.code-corporate-education-virtu-main'
);

const surnames = document.querySelectorAll('[name="surname"]');
const names = document.querySelectorAll('[name="name"]');

surnames?.forEach((elem) => {
  elem.addEventListener('input', function (e) {
    if(!checkText(20, e.target.value, e.target.value.length )){
      elem.value = e.target.value.slice(0, -1);
    };
  });
});

names?.forEach((elem) => {
  elem.addEventListener('input', function (e) {
    if(!checkText(15, e.target.value, e.target.value.length )){
      elem.value = e.target.value.slice(0, -1);
    };
  });
});


//HOME SUBMIT FORM
if (homePage || studentPage1) {
  formTest('.code-home-apply', '.code-home-apply.end input', '#page2 .code-home-apply input', '.apply-header', false)
} 


//EDU SINGLE SUBMIT FORM
else if (
  educationPage2 
) {
  const codeApplySelectOption = document.querySelectorAll(
    '.code-education-apply .code-apply-select-option'
  );

  let textInputsMeeting = document.querySelectorAll(
    '.code-education-arrange-meeting .code-apply-select input'
  );

  let textInputsApplay = document.querySelectorAll(
    '.code-education-apply .code-apply-select input'
  );
  let textInputsFind = document.querySelectorAll(
    '.code-education-find-sector .code-apply-select input'
  );

  let formPart = document.querySelectorAll(
    '.code-education-arrange-meeting-form .form-part'
  );

  let formPart2 = document.querySelectorAll('.code-education-apply .form-part');
  let formPart3 = document.querySelectorAll(
    '.code-education-find-sector .form-part'
  );

  formPart[0].style.display = 'block';
  if(formPart2[0]){
    formPart2[0].style.display = 'block'; 
  }
  if(formPart3[0]){
    formPart3[0].style.display = 'block';
  }

  formPart.forEach((element, index) => {
    //If input type radio in page:true
    phoneCheck(document.querySelector('input[type="tel"]'));

    element.querySelectorAll('input').forEach((input) => {
      input.addEventListener('input', function () {
        let allInputsFilled = true;

        //Check input is epamty or not
        element.querySelectorAll('input').forEach((inputEl) => {
          if (inputEl.value.trim() === '') {
            allInputsFilled = false;
          }
        });
        //Change next button for input stuation
        if (allInputsFilled) {
          element.querySelector('.next-btn').disabled = false;
          element.querySelector('.next-btn').classList.add('code-btn-base');
          element
              .querySelector('.next-btn')
              .classList.add('code-btn-hover-dark');
          
          element.querySelector('.next-btn').classList.add('active');
          element
            .querySelector('.next-btn')
            .classList.remove('code-btn-disabled');
        } else {
          element.querySelector('.next-btn').disabled = true;
         
          element
            .querySelector('.next-btn')
            .classList.remove('code-btn-base');
          element
            .querySelector('.next-btn')
            .classList.remove('code-btn-hover-dark');
          
          element.querySelector('.next-btn').classList.remove('active');
          element.querySelector('.next-btn').classList.add('code-btn-disabled');
        }
      });
    });
    //If have next page
    if (index + 1 < formPart.length) {
      // Check input value and add validation . If all input true go next page . This happen in *else*
      element
        .querySelector('.next-btn')
        .addEventListener('click', function (e) {
          var emailInput = document.querySelector('input[type="email"]');
          var phoneInput = document.querySelector('input[type="tel"]');
          if (
            !emailPattern.test(emailInput.value) ||
            !phonePattern.test(phoneInput.value)
          ) {
            if (!emailPattern.test(emailInput.value)) {
              emailInput.parentElement.parentElement.classList.add('error');
            } else {
              emailInput.parentElement.parentElement.classList.remove('error');
            }
            if (!phonePattern.test(phoneInput.value)) {
              phoneInput.parentElement.parentElement.classList.add('error');
            } else {
              phoneInput.parentElement.parentElement.classList.remove('error');
            }
          } else {
            element.style.display = 'none';
            formPart[index + 1].style.display = 'block';
          }
        });

      // Form submit happen . If we haven't validation . go succes page .and start animation
      // !!!!!!!!There form is preventDefault()!!!!!!

      if (element.querySelector('button[type="submit"]')) {
        element
          .querySelector('button[type="submit"]')
          .addEventListener('click', (e) => {
            var emailInput = document.querySelector('input[type="email"]');
            var phoneInput = document.querySelector('input[type="tel"]');
            e.preventDefault();

            if (
              emailPattern.test(emailInput.value) &&
              phonePattern.test(phoneInput.value)
            ) {

              confettipage='page2';
              if(document.getElementById('page3')!=null)confettipage='page3';

              const canvas = document.getElementById(confettipage);

              if(!v2024_form_submit(e))return;

            }
          });
      }
    }
  });

  formPart2.forEach((element, index) => {
    //If input type radio in page:true
    if (element.querySelectorAll('input[type="radio"]').length !== 0) {
      element.querySelectorAll('input[type="radio"]').forEach((variant, i) => {
        variant.addEventListener('click', function () {
          element.querySelector('.next-btn').disabled = false;
          
            element.querySelector('.next-btn').classList.add('code-btn-base');
            element
              .querySelector('.next-btn')
              .classList.add('code-btn-hover-dark');
          
          element
            .querySelector('.next-btn')
            .classList.remove('code-btn-disabled');
          // For Change checked radio input bg color
          codeApplySelectOption.forEach((x) => {
            x.classList.remove('active');
          });
          codeApplySelectOption[i].classList.add('active');
          if (index + 1 < formPart2.length) {
            element
              .querySelector('.next-btn')
              .addEventListener('click', function () {
                element.style.display = 'none';
                formPart2[index + 1].style.display = 'block';
              });
          }
        });
      });
    } //If input type radio in page:flase (input text or ecs.)
    else {
      phoneCheck(
        document.querySelector('.code-education-apply input[type="tel"]')
      );

      element.querySelectorAll('input').forEach((input) => {
        input.addEventListener('input', function () {
          let allInputsFilled = true;

          //Check input is epamty or not
          element.querySelectorAll('input').forEach((inputEl) => {
            if (inputEl.value.trim() === '') {
              allInputsFilled = false;
            }
          });
          //Change next button for input stuation
          if (allInputsFilled) {
            element.querySelector('.next-btn').disabled = false;
           
              element.querySelector('.next-btn').classList.add('code-btn-base');
              element
                .querySelector('.next-btn')
                .classList.add('code-btn-hover-dark');
            
            element.querySelector('.next-btn').classList.add('active');
            element
              .querySelector('.next-btn')
              .classList.remove('code-btn-disabled');
          } else {
            element.querySelector('.next-btn').disabled = true;
           
              element
                .querySelector('.next-btn')
                .classList.remove('code-btn-base');
              element
                .querySelector('.next-btn')
                .classList.remove('code-btn-hover-dark');
            
            element.querySelector('.next-btn').classList.remove('active');
            element
              .querySelector('.next-btn')
              .classList.add('code-btn-disabled');
          }
        });
      });
      //If have next page
      if (index + 1 < formPart2.length) {
        // Check input value and add validation . If all input true go next page . This happen in *else*
        element
          .querySelector('.next-btn')
          .addEventListener('click', function (e) {
            var emailInput2 = document.querySelector(
              '.code-education-apply input[type="email"]'
            );
            var phoneInput2 = document.querySelector(
              '.code-education-apply input[type="tel"]'
            );
            if (
              !emailPattern.test(emailInput2.value) ||
              !phonePattern.test(phoneInput2.value)
            ) {
              if (!emailPattern.test(emailInput2.value)) {
                emailInput2.parentElement.parentElement.classList.add('error');
              } else {
                emailInput2.parentElement.parentElement.classList.remove(
                  'error'
                );
              }
              if (!phonePattern.test(phoneInput2.value)) {
                phoneInput2.parentElement.parentElement.classList.add('error');
              } else {
                phoneInput2.parentElement.parentElement.classList.remove(
                  'error'
                );
              }
            } else {
              element.style.display = 'none';
              formPart2[index + 1].style.display = 'block';
            }
          });

        // Form submit happen . If we haven't validation . go succes page .and start animation
        // !!!!!!!!There form is preventDefault()!!!!!!

        if (element.querySelector('button[type="submit"]')) {
          element
            .querySelector('button[type="submit"]')
            .addEventListener('click', (e) => {
              var emailInput2 = document.querySelector(
                ' .code-education-apply input[type="email"]'
              );
              var phoneInput2 = document.querySelector(
                ' .code-education-apply input[type="tel"]'
              );
              e.preventDefault();

              if (
                emailPattern.test(emailInput2.value) &&
                phonePattern.test(phoneInput2.value)
              ) {
                const canvas = document.querySelector(
                  '.code-education-apply #page3'
                );
                if(!v2024_form_submit(e))return;

              }
            });
        }
      }
    }
  });

  formPart3.forEach((element, index) => {
    phoneCheck(document.querySelector('input[type="tel"]'));

    //If input type radio in page:true
    element.querySelectorAll('input').forEach((input) => {
      input.addEventListener('input', function () {
        let allInputsFilled = true;

        //Check input is epamty or not
        element.querySelectorAll('input').forEach((inputEl) => {
          if (inputEl.value.trim() === '') {
            allInputsFilled = false;
          }
        });
        //Change next button for input stuation
        if (allInputsFilled) {
          element.querySelector('.next-btn').disabled = false;
         
            element.querySelector('.next-btn').classList.add('code-btn-base');
            element
              .querySelector('.next-btn')
              .classList.add('code-btn-hover-dark');
          
          element.querySelector('.next-btn').classList.add('active');
          element
            .querySelector('.next-btn')
            .classList.remove('code-btn-disabled');
        } else {
          element.querySelector('.next-btn').disabled = true;
          
            element
              .querySelector('.next-btn')
              .classList.remove('code-btn-base');
            element
              .querySelector('.next-btn')
              .classList.remove('code-btn-hover-dark');
          
          element.querySelector('.next-btn').classList.remove('active');
          element.querySelector('.next-btn').classList.add('code-btn-disabled');
        }
      });
    });
    //If have next page
    if (index + 1 < formPart3.length) {
      // Check input value and add validation . If all input true go next page . This happen in *else*
      element
        .querySelector('.next-btn')
        .addEventListener('click', function (e) {
          var emailInput = document.querySelector(
            '.code-education-find-sector input[type="email"]'
          );
          if (!emailPattern.test(emailInput.value)) {
            if (!emailPattern.test(emailInput.value)) {
              emailInput.parentElement.parentElement.classList.add('error');
            } else {
              emailInput.parentElement.parentElement.classList.remove('error');
            }
          } else {
            element.style.display = 'none';
            formPart3[index + 1].style.display = 'block';
          }
        });

      // Form submit happen . If we haven't validation . go succes page .and start animation
      // !!!!!!!!There form is preventDefault()!!!!!!

      if (element.querySelector('button[type="submit"]')) {
        element
          .querySelector('button[type="submit"]')
          .addEventListener('click', (e) => {
            var emailInput = document.querySelector(
              '.code-education-find-sector input[type="email"]'
            );
            e.preventDefault();

            if (emailPattern.test(emailInput.value)) {
              const canvas = document.querySelector(
                '.code-education-find-sector #page2'
              );

              (async () => {
                // you should  only initialize a canvas once, so save this function
                // we'll save it to the canvas itself for the purpose of this demo
                //start confetti animation
                canvas.confetti =
                  canvas.confetti ||
                  (await confetti.create(canvas, { resize: true }));

                confettiFunction(canvas);
              })();
            }
          });
      }
    }
  });

  //Appay part 2 Input is empaty or not .For this reason change label position top
  inputCheckForLabel(textInputsMeeting);
  inputCheckForLabel(textInputsApplay);
  inputCheckForLabel(textInputsFind);
}  



else if (scholarPage) {
  const codeApplySelectOption = document.querySelectorAll(
    '.code-scholar-apply .code-apply-select-option'
  );
  let textInputs = document.querySelectorAll(
    '.code-scholar-apply #page2 .code-apply-select input'
  );

  let formPart = document.querySelectorAll('.code-scholar-apply .form-part');
  formPart[0].style.display = 'block';

  formPart.forEach((element, index) => {
    //If input type radio in page:true
    if (element.querySelectorAll('input[type="radio"]').length !== 0) {
      element.querySelectorAll('input[type="radio"]').forEach((variant, i) => {
        variant.addEventListener('click', function () {
          element.querySelector('.next-btn').disabled = false;
          element.querySelector('.next-btn').classList.add('code-btn-base');
          element
            .querySelector('.next-btn')
            .classList.remove('code-btn-disabled');
          // For Change checked radio input bg color
          codeApplySelectOption.forEach((x) => {
            x.classList.remove('active');
          });
          codeApplySelectOption[i].classList.add('active');
          if (index + 1 < formPart.length) {
            element
              .querySelector('.next-btn')
              .addEventListener('click', function () {
                element.style.display = 'none';
                formPart[index + 1].style.display = 'block';
              });
          }
        });
      });
    } //If input type radio in page:flase (input text or ecs.)
    else {
      phoneCheck(document.querySelector('input[type="tel"]'));

      element.querySelectorAll('input').forEach((input) => {
        input.addEventListener('input', function () {
          let allInputsFilled = true;

          //Check input is epamty or not
          element.querySelectorAll('input').forEach((inputEl) => {
            if (inputEl.value.trim() === '') {
              allInputsFilled = false;
            }
          });
          //Change next button for input stuation
          if (allInputsFilled) {
            element.querySelector('.next-btn').disabled = false;
            element.querySelector('.next-btn').classList.add('code-btn-base');
            element.querySelector('.next-btn').classList.add('active');
            element
              .querySelector('.next-btn')
              .classList.remove('code-btn-disabled');
          } else {
            element.querySelector('.next-btn').disabled = true;
            element
              .querySelector('.next-btn')
              .classList.remove('code-btn-base');
            element.querySelector('.next-btn').classList.remove('active');
            element
              .querySelector('.next-btn')
              .classList.add('code-btn-disabled');
          }
        });
      });
      //If have next page
      if (index + 1 < formPart.length) {
        // Check input value and add validation . If all input true go next page . This happen in *else*
        element
          .querySelector('.next-btn')
          .addEventListener('click', function (e) {
            var emailInput = document.querySelector(
              '.code-scholar-apply input[type="email"]'
            );
            var phoneInput = document.querySelector(
              '.code-scholar-apply input[type="tel"]'
            );
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
              formPart[index + 1].style.display = 'block';
            }
          });

        // Form submit happen . If we haven't validation . go succes page .and start animation
        // !!!!!!!!There form is preventDefault()!!!!!!

        if (element.querySelector('button[type="submit"]')) {
          element
            .querySelector('button[type="submit"]')
            .addEventListener('click', (e) => {
              var emailInput = document.querySelector(
                '.code-scholar-apply input[type="email"]'
              );
              var phoneInput = document.querySelector(
                '.code-scholar-apply input[type="tel"]'
              );
              e.preventDefault();

              if (
                emailPattern.test(emailInput.value) &&
                phonePattern.test(phoneInput.value)
              ) {
                const canvas = document.getElementById('page3');
                if(!v2024_form_submit(e))return;

              }
            });
        }
      }
    }
  });

  //Appay part 2 Input is empaty or not .For this reason change label position top
  inputCheckForLabel(textInputs);
} 

else if (technestPage2) {
  const codeApplySelectOption = document.querySelectorAll(
    '.code-technest-apply .code-apply-select-option'
  );
  let textInputs = document.querySelectorAll(
    '.code-technest-apply #page2 .code-apply-select input'
  );

  let formPart = document.querySelectorAll('.code-technest-apply .form-part');
  formPart[0].style.display = 'block';

  formPart.forEach((element, index) => {
    //If input type radio in page:true
    if (element.querySelectorAll('input[type="radio"]').length !== 0) {
      element.querySelectorAll('input[type="radio"]').forEach((variant, i) => {
        variant.addEventListener('click', function () {
          element.querySelector('.next-btn').disabled = false;
          element.querySelector('.next-btn').classList.add('code-btn-base');
          element
            .querySelector('.next-btn')
            .classList.remove('code-btn-disabled');
          // For Change checked radio input bg color
          codeApplySelectOption.forEach((x) => {
            x.classList.remove('active');
          });
          codeApplySelectOption[i].classList.add('active');
          if (index + 1 < formPart.length) {
            element
              .querySelector('.next-btn')
              .addEventListener('click', function () {
                element.style.display = 'none';
                formPart[index + 1].style.display = 'block';
              });
          }
        });
      });
    } //If input type radio in page:flase (input text or ecs.)
    else {
      phoneCheck(document.querySelector('input[type="tel"]'));

      element.querySelectorAll('input').forEach((input) => {
        input.addEventListener('input', function () {
          let allInputsFilled = true;

          //Check input is epamty or not
          element.querySelectorAll('input').forEach((inputEl) => {
            if (inputEl.value.trim() === '') {
              allInputsFilled = false;
            }
          });
          //Change next button for input stuation
          if (allInputsFilled) {
            element.querySelector('.next-btn').disabled = false;
            element.querySelector('.next-btn').classList.add('code-btn-base');
            element.querySelector('.next-btn').classList.add('active');
            element
              .querySelector('.next-btn')
              .classList.remove('code-btn-disabled');
          } else {
            element.querySelector('.next-btn').disabled = true;
            element
              .querySelector('.next-btn')
              .classList.remove('code-btn-base');
            element.querySelector('.next-btn').classList.remove('active');
            element
              .querySelector('.next-btn')
              .classList.add('code-btn-disabled');
          }
        });
      });
      //If have next page
      if (index + 1 < formPart.length) {
        // Check input value and add validation . If all input true go next page . This happen in *else*
        element
          .querySelector('.next-btn')
          .addEventListener('click', function (e) {
            var emailInput = document.querySelector(
              '.code-technest-apply input[type="email"]'
            );
            var phoneInput = document.querySelector(
              '.code-technest-apply input[type="tel"]'
            );
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
              formPart[index + 1].style.display = 'block';
            }
          });

        // Form submit happen . If we haven't validation . go succes page .and start animation
        // !!!!!!!!There form is preventDefault()!!!!!!

        if (element.querySelector('button[type="submit"]')) {
          element
            .querySelector('button[type="submit"]')
            .addEventListener('click', (e) => {
              var emailInput = document.querySelector(
                '.code-technest-apply input[type="email"]'
              );
              var phoneInput = document.querySelector(
                '.code-technest-apply input[type="tel"]'
              );
              e.preventDefault();

              if (
                emailPattern.test(emailInput.value) &&
                phonePattern.test(phoneInput.value)
              ) {
                const canvas = document.getElementById('page3');
                if(!v2024_form_submit(e))return;

              }
            });
        }
      }
    }
  });

  //Appay part 2 Input is empaty or not .For this reason change label position top
  inputCheckForLabel(textInputs);
} 


else if (caScholarshipPage2) {
  const codeApplySelectOption = document.querySelectorAll(
    '.code-ca-scholarship-apply .code-apply-select-option'
  );
  let textInputs = document.querySelectorAll(
    '.code-ca-scholarship-apply #page2 .code-apply-select input'
  );

  let formPart = document.querySelectorAll(
    '.code-ca-scholarship-apply .form-part'
  );
  formPart[0].style.display = 'block';

  formPart.forEach((element, index) => {
    //If input type radio in page:true
    if (element.querySelectorAll('input[type="radio"]').length !== 0) {
      element.querySelectorAll('input[type="radio"]').forEach((variant, i) => {
        variant.addEventListener('click', function () {
          element.querySelector('.next-btn').disabled = false;
          element.querySelector('.next-btn').classList.add('code-btn-base');
          element
            .querySelector('.next-btn')
            .classList.remove('code-btn-disabled');
          // For Change checked radio input bg color
          codeApplySelectOption.forEach((x) => {
            x.classList.remove('active');
          });
          codeApplySelectOption[i].classList.add('active');
          if (index + 1 < formPart.length) {
            element
              .querySelector('.next-btn')
              .addEventListener('click', function () {
                element.style.display = 'none';
                formPart[index + 1].style.display = 'block';
              });
          }
        });
      });
    } //If input type radio in page:flase (input text or ecs.)
    else {
      phoneCheck(document.querySelector('input[type="tel"]'));

      element.querySelectorAll('input').forEach((input) => {
        input.addEventListener('input', function () {
          let allInputsFilled = true;

          //Check input is epamty or not
          element.querySelectorAll('input').forEach((inputEl) => {
            if (inputEl.value.trim() === '') {
              allInputsFilled = false;
            }
          });
          //Change next button for input stuation
          if (allInputsFilled) {
            element.querySelector('.next-btn').disabled = false;
            element.querySelector('.next-btn').classList.add('code-btn-base');
            element.querySelector('.next-btn').classList.add('active');
            element
              .querySelector('.next-btn')
              .classList.remove('code-btn-disabled');
          } else {
            element.querySelector('.next-btn').disabled = true;
            element
              .querySelector('.next-btn')
              .classList.remove('code-btn-base');
            element.querySelector('.next-btn').classList.remove('active');
            element
              .querySelector('.next-btn')
              .classList.add('code-btn-disabled');
          }
        });
      });
      //If have next page
      if (index + 1 < formPart.length) {
        // Check input value and add validation . If all input true go next page . This happen in *else*
        element
          .querySelector('.next-btn')
          .addEventListener('click', function (e) {
            var emailInput = document.querySelector(
              '.code-ca-scholarship-apply input[type="email"]'
            );
            var phoneInput = document.querySelector(
              '.code-ca-scholarship-apply input[type="tel"]'
            );
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
              formPart[index + 1].style.display = 'block';
            }
          });

        // Form submit happen . If we haven't validation . go succes page .and start animation
        // !!!!!!!!There form is preventDefault()!!!!!!

        if (element.querySelector('button[type="submit"]')) {
          element
            .querySelector('button[type="submit"]')
            .addEventListener('click', (e) => {
              var emailInput = document.querySelector(
                '.code-ca-scholarship-apply input[type="email"]'
              );
              var phoneInput = document.querySelector(
                '.code-ca-scholarship-apply input[type="tel"]'
              );
              e.preventDefault();

              if (
                emailPattern.test(emailInput.value) &&
                phonePattern.test(phoneInput.value)
              ) {
                const canvas = document.getElementById('page3');

                if(!v2024_form_submit(e))return;
              }
            });
        }
      }
    }
  });

  //Appay part 2 Input is empaty or not .For this reason change label position top
  inputCheckForLabel(textInputs);
} 

else if (
  corporateEducationPage2
) {
  let textInputsFind = document.querySelectorAll(
    '.code-corporate-education-applay .code-apply-select input,.code-corporate-education-applay .code-apply-select textarea'
  );

  let formPart3 = document.querySelectorAll(
    '.code-corporate-education-applay .form-part'
  );
  formPart3[0].style.display = 'block';
  formPart3.forEach((element, index) => {
    //If input type radio in page:true
    phoneCheck(document.querySelector('input[type="tel"]'));

    element.querySelectorAll('input').forEach((input) => {
      input.addEventListener('input', function () {
        let allInputsFilled = true;

        //Check input is epamty or not
        element.querySelectorAll('input').forEach((inputEl) => {
          if (inputEl.value.trim() === '') {
            allInputsFilled = false;
          }
        });
        //Change next button for input stuation
        if (allInputsFilled) {
          element.querySelector('.next-btn').disabled = false;
          
          element.querySelector('.next-btn').classList.add('code-btn-base');
            element
              .querySelector('.next-btn')
              .classList.add('code-btn-hover-dark');

          
          element.querySelector('.next-btn').classList.add('active');
          element
            .querySelector('.next-btn')
            .classList.remove('code-btn-disabled');
        } else {
          element.querySelector('.next-btn').disabled = true;
          

          element
          .querySelector('.next-btn')
          .classList.remove('code-btn-base');
        element
          .querySelector('.next-btn')
          .classList.remove('code-btn-hover-dark');

          element.querySelector('.next-btn').classList.remove('active');
          element.querySelector('.next-btn').classList.add('code-btn-disabled');
        }
      });
    });
    //If have next page
    if (index + 1 < formPart3.length) {
      // Check input value and add validation . If all input true go next page . This happen in *else*
      element
        .querySelector('.next-btn')
        .addEventListener('click', function (e) {
          var emailInput = document.querySelector(
            '.code-corporate-education-applay input[type="email"]'
          );
          var phoneInput = document.querySelector(
            '.code-corporate-education-applay input[type="tel"]'
          );
          if (
            !emailPattern.test(emailInput.value) ||
            !phonePattern.test(phoneInput.value)
          ) {
            if (!emailPattern.test(emailInput.value)) {
              emailInput.parentElement.parentElement.classList.add('error');
            }
            if (!phonePattern.test(phoneInput.value)) {
              phoneInput.parentElement.parentElement.classList.add('error');
            } else {
              phoneInput.parentElement.parentElement.classList.remove('error');
            }
          } else {
            element.style.display = 'none';
            formPart3[index + 1].style.display = 'block';
          }
        });

      // Form submit happen . If we haven't validation . go succes page .and start animation
      // !!!!!!!!There form is preventDefault()!!!!!!

      if (element.querySelector('button[type="submit"]')) {
        element
          .querySelector('button[type="submit"]')
          .addEventListener('click', (e) => {
            var emailInput = document.querySelector(
              '.code-corporate-education-applay input[type="email"]'
            );
            var phoneInput = document.querySelector(
              '.code-corporate-education-applay input[type="tel"]'
            );

            e.preventDefault();

            if (
              emailPattern.test(emailInput.value) &&
              phonePattern.test(phoneInput.value)
            ) {
              const canvas = document.querySelector(
                '.code-corporate-education-applay #page2'
              );

              console.log('done');
              if(!v2024_form_submit(e))return;

  
            }
          });
      }
    }
  });

  //Appay part 2 Input is empaty or not .For this reason change label position top
  inputCheckForLabel(textInputsFind);
} 


else if (whichCourse) {
  let questions = document.querySelectorAll('.code-which-course-test');
  questions[0].style.display = 'block';
  questions.forEach((element, index) => {
    if (element.querySelectorAll('.variant').length !== 0) {
      element.querySelectorAll('.variant').forEach((variant) => {
        variant.addEventListener('click', function () {
          element.querySelector('.next-btn').disabled = false;
          element.querySelector('.next-btn').classList.add('code-btn-base');
          element.querySelector('.next-btn').classList.add('active');
          element
            .querySelector('.next-btn')
            .classList.remove('code-btn-disabled');
          if (index + 1 < questions.length) {
            element
              .querySelector('.next-btn')
              .addEventListener('click', function () {
                element.style.display = 'none';
                questions[index + 1].style.display = 'block';
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
            element.querySelector('.next-btn').disabled = false;
            element.querySelector('.next-btn').classList.add('code-btn-base');
            element.querySelector('.next-btn').classList.add('active');
            element
              .querySelector('.next-btn')
              .classList.remove('code-btn-disabled');
          } else {
            element.querySelector('.next-btn').disabled = true;
            element
              .querySelector('.next-btn')
              .classList.remove('code-btn-base');
            element.querySelector('.next-btn').classList.remove('active');
            element
              .querySelector('.next-btn')
              .classList.add('code-btn-disabled');
          }
        });
      });
      if (index + 1 < questions.length) {
        // Check input value and add validation . If all input true go next page . This happen in *else*
        element
          .querySelector('.next-btn')
          .addEventListener('click', function (e) {
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

        // Form submit happen . If we haven't validation . go succes page .and start animation
        // !!!!!!!!There form is preventDefault()!!!!!!

        if (element.querySelector('button[type="submit"]')) {
          element
            .querySelector('button[type="submit"]')
            .addEventListener('click', (e) => {
              var emailInput = document.querySelector('input[type="email"]');
              var phoneInput = document.querySelector('input[type="tel"]');
              e.preventDefault();

              const canvas = document.querySelector("#page11 .result");

              if (
                (emailPattern.test(emailInput.value) &&
                  phonePattern.test(phoneInput.value)) ||
                !element.classList.contains('end')
              ) {
                let header = document.querySelector('.which-course-header');
                header.style.display = 'none';

                (async () => {
                  // you should  only initialize a canvas once, so save this function
                  // we'll save it to the canvas itself for the purpose of this demo
                  //start confetti animation
                  canvas.confetti =
                    canvas.confetti ||
                    (await confetti.create(canvas, { resize: true }));

                  confettiFunction(canvas);
                })();
              }
            });
        }
      }
    }
  });

  let questionEndInputs = document.querySelectorAll(
    '.code-which-course-test.end input'
  );
  let questionEndInputsPage2 = document.querySelectorAll(
    '#page2.code-which-course-test input'
  );
  //Appay part 2 Input is empaty or not .For this reason change label position top
  inputCheckForLabel(questionEndInputs);
  inputCheckForLabel(questionEndInputsPage2);
} 


else if (applyCourse) {
  formTest(
    '.code-apply-test',
    '.code-apply-test.end input',
    '#page2.code-apply-test input',
    '.apply-header',
    false
  );

  // Show checked program label in page2
  var _programLabel = document.querySelector('.page1_checked_program_label');
  document.querySelectorAll('#page1 input[name="apply"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
      if (_programLabel) _programLabel.textContent = this.value;
    });
  });
  if (_programLabel) _programLabel.textContent = document.querySelector('#page1 input[name="apply"]:checked')?.value || '';

  // Auto-select radio and skip to page2 if education_group param matches
  var _egParams = new URLSearchParams(window.location.search);
  var _egValue = _egParams.get('education_group');
  if (_egValue) {
    var _radios = document.querySelectorAll('#page1 input[name="apply"]');
    _radios.forEach(function(radio) {
      if (radio.value === _egValue) {
        radio.checked = true;
        if (_programLabel) _programLabel.textContent = radio.value;
        document.querySelector('#page1').style.display = 'none';
        document.querySelector('#page2').style.display = 'block';
      }
    });
  }
} 

else if (applyMasterClassCourse) {
  formTest(
    '.code-apply-masterclass-test',
    '.code-apply-masterclass-test.end input',
    '#page2.code-apply-masterclass-test input',
    '.apply-masterclass-header',
    false
  );
} 

else if (applySpecificDateCourse) {
  formTest(
    '.code-apply-specific-date-test',
    '.code-apply-specific-date-test.end input',
    '#page2.code-apply-specific-date-test input',
    '.apply-specific-date-header',
    false
  );
} 

else if (corporateApplySpecificDateCourse) {
  formTest(
    '.code-corporate-apply-specific-date-test',
    '.code-corporate-apply-specific-date-test.end input',
    '#page2.code-corporate-apply-specific-date-test input',
    '.apply-corporate-specific-date-header',
    true
  );
} 

else if (corporateApplyPartnership) {
  formTest(
    '.code-corporate-apply-partnership-test',
    '.code-corporate-apply-partnership-test.end input,.code-corporate-apply-partnership-test.end textarea',
    '#page2.code-corporate-apply-partnership-test input',
    '.apply-corporate-partnership-header',
    true
  );
}


jQuery(document).ready(function($) {
  $('.daysfield').on('change', function() {
      var selectedOption = $(this).find(':selected');
      var selectedDate = selectedOption.val();
      var dataBron = selectedOption.attr('data_bron') || "";
      var hoursField = $('.hoursfield');

      $('.daysfield').not(this).val("");
      
      // Reset callme_time to the first empty option
      hoursField.val("");
      
      // Disable all options if no day is selected
      if (!selectedOption.val()) {
          hoursField.find('option').prop('disabled', true);
          return;
      }

      // Enable all options first
      hoursField.find('option').prop('disabled', false);

      // Disable options that match data_bron
      if (dataBron) {
          var disabledHours = dataBron.split(',');
          disabledHours.forEach(function(hour) {
              hoursField.find('option[value="' + hour + '"]').prop('disabled', true);
          });
      }

       // Get today's date in YYYY-MM-DD format
       var today = new Date();
       var todayFormatted = ('0' + today.getDate()).slice(-2) + '.' + 
                             ('0' + (today.getMonth() + 1)).slice(-2) + '.' + 
                             today.getFullYear();

       // Disable past hours if the selected date is today
       if (selectedDate === todayFormatted) {
           var currentHour = today.getHours();
           hoursField.find('option').each(function() {
               var optionHour = parseInt($(this).val());
               if (optionHour <= currentHour) {
                   $(this).prop('disabled', true);
               }
           });
       }
  });

  // Ensure all options are disabled if no day is selected on load
  if (!$('.daysfield').val()) {
      $('.hoursfield').find('option').prop('disabled', true);
  }
});