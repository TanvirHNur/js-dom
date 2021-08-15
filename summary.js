console.log('This the from External Js file');
const blogs = document.getElementsByTagName('p')
for (const blog of blogs){
    console.log(blog)
    blog.style.backgroundColor = 'hotpink';
}

const kaka = document.getElementById('special-blog');
kaka.innerText = 'new kaka'

kaka.innerHTML = `
 <h2>Innet HTML</h2>
 <div>
 <ul>
 <li> Special </li>
 <li> Ordinary </li>
 </ul>
 </div>
`

// document.getElementsByClassName('')
// document.querySelector or   querySelector
// to get find node you have to write querySelector

const friends = document.getElementById('friends');
// console.log(friends);
const fifth = friends.children[4];
console.log(fifth);
friends.removeChild(fifth);