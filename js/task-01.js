const categoryList = document.querySelector('#categories');
const numberOfCategories = `Number of categories: ${categoryList.children.length}`;
console.log(numberOfCategories);


const differentCategories = document.querySelectorAll('.item');

for (let i = 0; i < differentCategories.length; i += 1) {
    console.log('Category: ' + differentCategories[i].firstElementChild.textContent);
    console.log('Elements: ' + differentCategories[i].lastElementChild.children.length);
    
}