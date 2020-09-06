var addItem = document.getElementById('add-container');
var itemList = document.getElementById('itemList');
var search = document.getElementById('search');
var newFilter = document.getElementById('new');
var oldFilter = document.getElementById('old');
var completedFilter = document.getElementById('complete');
var incompleteFilter = document.getElementById('incomplete');

// Form submit event
addItem.addEventListener('submit', addToList);
// Delete event
itemList.addEventListener('click', deleteItem);



function addToList(e){
  e.preventDefault();
  
  var newItem = document.getElementById('addItem').value;
  console.log(newItem);

  var li = document.createElement('li');
  li.className = 'list-group-item mb-1';
  li.appendChild(document.createTextNode(newItem));

  var deletebtn = document.createElement('button');
  deletebtn.className = 'btn btn-danger btn-sm float-right delete';
  deletebtn.appendChild(document.createTextNode('x'));

  li.appendChild(deletebtn);
  itemList.appendChild(li);
}


function deleteItem(e){
  if(e.target.classList.contains('delete')){
    console.log(e.target.parentElement);
    if(confirm(`Are you sure you want to delete ${e.target.parentElement.value}`)){
      var li = e.target.parentElement;
      var list = document.getElementById('items');
      list.removeChild(li);
    }
  }
}