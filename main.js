let addItem = document.getElementById('add-container');
let itemList = document.getElementById('itemList');
let list = document.getElementById('items');
let search = document.getElementById('search');
let newFilter = document.getElementById('new');
let oldFilter = document.getElementById('old');

let sortedByOld = false;

// Form submit event
addItem.addEventListener('submit', addToList);
// Delete event
itemList.addEventListener('click', deleteItem);
// Search for items
search.addEventListener('keyup', searchItem);
// Filters:
newFilter.addEventListener('click', sortNew);
oldFilter.addEventListener('click', sortOld);


function addToList(e){
  e.preventDefault();
  
  let newItem = document.getElementById('addItem').value;
  if(newItem == ''){
    alert('Please put something');
  } else {
    let span = document.createElement('span');
    span.appendChild(document.createTextNode(newItem));

    let li = document.createElement('li');
    li.className = 'list-group-item mb-1';
    li.appendChild(span);

    let deletebtn = document.createElement('button');
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('x'));

    li.appendChild(deletebtn);
    itemList.appendChild(list).appendChild(li);

    // Clear input field after adding
    document.getElementById('addItem').value = '';
  }
}


function deleteItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm(`Are you sure you want to delete ${e.target.parentNode.querySelector('span').innerHTML}?`)){
      let li = e.target.parentElement;
      list.removeChild(li);
    }
  }
}



function searchItem(e){
  let request = e.target.value.toLowerCase();
  let items = itemList.getElementsByTagName('li'); 
  
  Array.from(items).forEach(function(item){
    let itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(request) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}


function sortNew(){
  if(sortedByOld){
    // https://stackoverflow.com/questions/12539361/how-to-reverse-the-ordering-of-list-items-in-an-unordered-list#:~:text=You%20can%20do%20it%20like,append%20it%20to%20the%20list.
    let i = list.childNodes.length - 1;
 
    while (i >= 0){
      list.appendChild(list.childNodes[i]);
      i = i - 1;
    }
    sortedByOld = false;
    filterSelectedInd(newFilter);
  }
}


function sortOld(){
  if(!sortedByOld){
    let i = list.childNodes.length - 1;
 
    while (i >= 0){
      list.appendChild(list.childNodes[i]);
      i = i - 1;
    }
    sortedByOld = true;
    filterSelectedInd(oldFilter);
  }
}



function filterSelectedInd(name){
  newFilter.className = 'filter-btn';
  oldFilter.className = 'filter-btn';
  name.className = 'filter-btn filter-selected';
}