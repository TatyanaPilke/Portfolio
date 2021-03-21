const select = document.querySelector('select');
select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeURLLanguage(){
  let hash = window.location.hash;
  console.log (hash);
  changeURLLanguage();
}