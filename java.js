function maths(){
	var Subjects=parseInt(prompt("Enter number of subjects?"));
	//console.log(Subjects);
	var subjectCounter=1;
	grades=[];
	results=[];	
	avg=0;
	for(i=0;i<Subjects;i++){			
	    grades[i]= parseInt(prompt("Enter grade for subject "));
       avg=avg+grades[i];
	   if(grades[i]>=70 && grades[i]<=100){
			gradeLevel="A";
		}
		else if(grades[i]>=60 && grades[i]<70){
			gradeLevel="B";
		}
		else if(grades[i]>=50 && grades[i]<60){
			gradeLevel="C";
		}
		else if(grades[i]>=40 && grades[i]<50){
			gradeLevel="D";
		}
		else{
			gradeLevel="Fail";
		}
		results[i]=gradeLevel;
		subjectCounter++;
    }
	avg=avg/Subjects;
	alert(avg);
	for(i=0;i<Subjects;i++){
		document.getElementById("grades").append(grades[i]+", ");
		document.getElementById("results").append(results[i]+", ");		
	}
	document.getElementById("avg").append(avg);
}