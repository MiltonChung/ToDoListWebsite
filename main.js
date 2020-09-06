var addItem = document.getElementById('add-container');
var itemList = document.getElementById('itemList');
var search = document.getElementById('search');
var newFilter = document.getElementById('new');
var oldFilter = document.getElementById('old');
var completedFilter = document.getElementById('complete');
var incompleteFilter = document.getElementById('incomplete');


// Form submit event
addItem.addEventListener('submit', addToList);




function addToList(e){
  e.preventDefault();
  console.log('hi');
}