function calculateResults(a, b){
    const n=document.getElementById("subjects").value;
     
    let total=0;
    let i;
    for(i=0;i<n;i++){
        let x= parseFloat(prompt("Enter the marks of subject "+(i+1)));
        total=total+x;
    }
    let average= total/n;
    let grade;
    if(average>=90){
        grade='A+';
    }
    else if(average>=80){
        grade="A";
    }
    else if(average>=60){
        grade="B";
    }
    else if(average>=50){
        grade="C";
    }
    else if(average>=40){
        grade="D";
    }   
    else{
        grade="F";
    }

    let r;
    if (average>40 )
        r="Pass";
    else
        r="Fail";
    
    let result=document.getElementById("result");
    result.innerHTML="Total Marks: "+total+"<br>"+"Average Marks: "+average+"<br>"+"Grade: "+grade+"<br>"+"Result: "+r;

}