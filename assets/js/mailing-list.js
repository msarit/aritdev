document.addEventListener("DOMContentLoaded", function() {
  const mailingListBtn = document.querySelector('.cta-open');
  const toggleForm = document.querySelector('.toggle-form');
  const formWrap = document.querySelector('.formwrap');
  const toggleBg = document.querySelector('.toggle-bg');
  const formIcon = document.querySelector('.icon-close');

  mailingListBtn.onclick = (e) => {
    e.preventDefault();
    toggleForm.classList.add('active');
    formWrap.classList.add('active');
    toggleBg.classList.add('active');
    formIcon.classList.add('open');
  };

  formIcon.onclick = (e) => {
    e.preventDefault();
    toggleForm.classList.remove('active');
    formWrap.classList.remove('active');
    toggleBg.classList.remove('active');
    formIcon.classList.remove('open');
  };
});