const resumeForm=document.getElementById('resumeForm')as HTMLInputElement | null;
const resumeOutput=document.getElementById('resumeOutput')as HTMLInputElement | null;

function generateResume(data:{
    name:string,
    age:string,
    gender:string,
    email:string,
    phone:string,
    city:string,
    education:string,
    skills:string,
    experience:string
    
}) {
    return `
    <h2> Generate Resume </h2>
    <p> <strong> Name:</strong> ${data.name} </p>
    <p> <strong> Age:</strong> ${data.age} </p>
    <p> <strong> Gender:</strong> ${data.gender} </p>
    <p> <strong> Email:</strong> ${data.email} </p>
    <p> <strong> Phone:</strong> ${data.phone} </p>
    <p> <strong> City:</strong> ${data.city} </p>
    <p> <strong> Education:</strong> ${data.education} </p>
    <p> <strong> Experience:</strong> ${data.experience} </p>
    <p> <strong> Skills:</strong> ${data.skills} </p>
    <button id="editResume">Edit Resume </button>

    `;
}

if(resumeForm && resumeOutput ){
    resumeForm.addEventListener('submit',(event)=>{
        event.preventDefault();

    const name=(document.getElementById('name')as HTMLInputElement).value;
    const age=(document.getElementById('age')as HTMLInputElement).value;
    const gender=(document.getElementById('gender')as HTMLInputElement).value;
    const email=(document.getElementById('email')as HTMLInputElement).value;
    const phone=(document.getElementById('phone')as HTMLInputElement).value;
    const city=(document.getElementById('city')as HTMLInputElement).value;
    const education=(document.getElementById('education')as HTMLInputElement).value;
    const experience=(document.getElementById('experience')as HTMLInputElement).value;
    const skills=(document.getElementById('skills')as HTMLInputElement).value;
    

    resumeOutput.innerHTML =generateResume({name,age,gender,email,phone,city,education,experience,skills});
    const editButton=document.getElementById('editResume') as HTMLButtonElement;
    if(editButton){
        editButton.addEventListener('click',()=>{
        (document.getElementById('name')as HTMLInputElement).value=name;
        (document.getElementById('age')as HTMLInputElement).value=age;
        (document.getElementById('gender')as HTMLInputElement).value=gender;
        (document.getElementById('email')as HTMLInputElement).value=email;
        (document.getElementById('phone')as HTMLInputElement).value=phone;
        (document.getElementById('education')as HTMLInputElement).value=education;
        (document.getElementById('experience')as HTMLInputElement).value=experience;
        (document.getElementById('skills')as HTMLInputElement).value=skills;
       
        window.scrollTo({top:0,behavior:'smooth'});

        });
    } 
});
 } else{
        console.log("Form or output div not found in the DOM");
}
