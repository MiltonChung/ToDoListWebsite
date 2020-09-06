var addItem = document.getElementById('add-container');
var itemList = document.getElementById('itemList');
var list = document.getElementById('items');
var search = document.getElementById('search');
var newFilter = document.getElementById('new');
var oldFilter = document.getElementById('old');
var completedFilter = document.getElementById('complete');
var incompleteFilter = document.getElementById('incomplete');

// Form submit event
addItem.addEventListener('submit', addToList);
// Delete event
itemList.addEventListener('click', deleteItem);
// Search for items
search.addEventListener('keyup', searchItem);

// Filters:
newFilter.addEventListener('click', sortNew);
oldFilter.addEventListener('click', sortOld);
completedFilter.addEventListener('click', sortDone);
incompleteFilter.addEventListener('click', sortNotDone);



function addToList(e){
  e.preventDefault();
  
  var newItem = document.getElementById('addItem').value;
  if(newItem == ''){
    alert('Please put something');
  } else {
    var span = document.createElement('span');
    span.appendChild(document.createTextNode(newItem));

    var li = document.createElement('li');
    li.className = 'list-group-item mb-1';
    li.appendChild(span);

    var deletebtn = document.createElement('button');
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('x'));

    li.appendChild(deletebtn);
    itemList.appendChild(list).appendChild(li);

    // Clear input field after adding
    document.getElementById('addItem').value = '';

    // localStorage.setItem('1', newItem);
  }
}


function deleteItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm(`Are you sure you want to delete ${e.target.parentNode.querySelector('span').innerHTML}?`)){
      var li = e.target.parentElement;
      var list = document.getElementById('items');
      list.removeChild(li);
    }
  }
}



function searchItem(e){
  var request = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('li'); 
  
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(request) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}


function sortNew(e){
  console.log(1)
}


function sortOld(e){
  console.log(1)
}


function sortDone(e){
  console.log(1)
}


function sortNotDone(e){
  console.log(1)
}