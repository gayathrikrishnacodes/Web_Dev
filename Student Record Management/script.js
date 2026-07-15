const students=[];
const addStudentBtn=document.getElementById('addStudentBtn');
const studentForm=document.getElementById('studentForm');
const tableBody=document.getElementById('tableBody')
const nameInput=document.getElementById('nameInput');
const ageInput=document.getElementById('ageInput');
const studentInputId=document.getElementById('studentInputId');
const saveBtn=document.getElementById('saveBtn');
studentForm.style.display='none';

//show/hide
addStudentBtn.addEventListener('click',function(){
    if (studentForm.style.display==='none'){
        studentForm.style.display='block';
    }else
        studentForm.style.display='none';
});
saveBtn.addEventListener('click',function(event){
    event.preventDefault();
const name=nameInput.value;
const age= Number(ageInput.value);
const id= Number(studentInputId.value);
const student={name:name,age:age,id:id};
 students.push(student);
 displayStudent();
 console.log(students);
 });
 function displayStudent(){
    tableBody.innerHTML="";
    students.forEach(function(student){
    const row=document.createElement('tr');
    row.innerHTML =`<td>${student.name}</td>
    <td>${student.age}</td>
    <td>${student.id}</td> `;
tableBody.appendChild(row);
})
 }
