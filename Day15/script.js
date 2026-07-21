const library=[{title:"JavaScript Basics", Author:"john",available:true},
    {title:"HTML",Author:"Emma",available:true},
{title:"React",Author:"David",available:false}
];

function borrowBook(title){
    const book=library.find(function(book){
        return book.title===title;});
if(!book){
    console.log('Book not found');
    return;
}if(book.available){
    book.available=false;
    console.log(`${book.title} has been borrowed`);
}else {
    console.log(`${book.title} is already borrowed`);
}
}
borrowBook('HTML');
borrowBook('python');
borrowBook('React');