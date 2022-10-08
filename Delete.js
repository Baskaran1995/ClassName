var form = document.getElementById('add form');

var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);

function addItem(e){

e.preventDefault();

var newItem = document.getElementById('item').value;

var li= document.createElement('li');

li.className= 'list-group-item';

li.appendChild(document.createTextNode(newItem));

var deleteBtn= document.createElement('button');

deleteBtn.className = 'btn btn-danger btn-smfloat-right delete';

deleteBtn.appendChild(document.createTextNode('X'));

li.appendChild(deleteBtn);

itemList.appenChild(li);

}

function removeItem(e){

if(e.target.classList.contains('delete')){

if(confirm('Are You Sure?')){

var li = e.target.parentElement;

itemList.removeChild(li);