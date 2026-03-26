function login() {
  let user = document.getElementById('user').value;
  localStorage.setItem('user', user);
  document.getElementById('output').innerHTML = 'Welcome ' + user;
}
if(document.getElementById('userInfo')){
  document.getElementById('userInfo').innerHTML = 'User: ' + localStorage.getItem('user');
}
function search() {
  let query = document.getElementById('search').value;
  document.getElementById('output').innerHTML = 'Results: ' + query;
}
function loadTransactions() {
  fetch('api/transactions.json')
    .then(res => res.json())
    .then(data => { document.getElementById('data').innerHTML = JSON.stringify(data,null,2); });
}
function transfer() {
  let to = document.getElementById('to').value;
  let amount = document.getElementById('amount').value;
  document.getElementById('output').innerHTML = 'Transferred $' + amount + ' to ' + to;
}
function saveConfig() {
  let config = document.getElementById('config').value;
  document.getElementById('output').innerHTML = 'Saved: ' + config;
}
function getUsers() {
  fetch('api/users.json')
    .then(res => res.json())
    .then(data => { document.getElementById('data').innerHTML = JSON.stringify(data,null,2); });
}
function runXSS() {
  let input = document.getElementById('xssInput').value;
  document.getElementById('xssOutput').innerHTML = input;
}
function fakeLogin() {
  localStorage.setItem('role','admin');
  alert('You are now admin');
}
const params = new URLSearchParams(window.location.search);
params.forEach((v,k)=>{ document.body.innerHTML += <p>: </p>; });
document.body.innerHTML += location.hash;
