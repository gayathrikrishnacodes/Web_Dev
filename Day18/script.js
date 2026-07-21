const library=[{title:"JavaScript Basics", Author:"john",available:true},
    {title:"HTML",Author:"Emma",available:true},
{title:"React",Author:"David",available:false}
];

function borrowBook(title){
    const book=library.find(book=> book.title===title);
if(!book){
    console.log('Book not found');
    return;
}
const {title:bookTitle,available}=book;
 if(available){
    book.available=false;
    console.log(`${bookTitle} has been borrowed`);
}else {
    console.log(`${bookTitle} is already borrowed`);
}
}
borrowBook('HTML');
library.forEach(({title,Author,available})=>{
    console.log(`${title} - ${Author} - ${available}`);
    const newLibrary=[...library,{title:'Node',Author:'Alex',available:true}];
    console.log(newLibrary);
});