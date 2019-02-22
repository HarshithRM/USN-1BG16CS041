//decision making
var age=18;
if (age<18){
    console.log("minor");
}
else if(age >= 18){
    console.log("major");
}
//cond?true:false
age>=18?console.log("major"):console.log("minor");
//function
function name(firstname,lastname){
    console.log(firstname+'-'+lastname);
}
name("Harshith","RM");
//array
var names=["harshith's","abhishek",'jairaj',"Bipin"];
console.log(names[0]);//iterator
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
//push,pop,unshift
names.push("Me");
console.log(names);
names.pop();
console.log(names);
names.unshift("Me");
console.log(names);
//challenge 2
var i=0;
var tip=new Array;
var amount=new Array;
var bill=[124,48,268]
for(i=0;i<bill.length;i++){
    if(bill[i]<50){
        tip[i]=bill[i] * 0.2;
       amount[i]= bill[i] + tip[i];
    }
    if(bill[i]>50 && bill[i]<=200){
        tip[i]=bill[i]*0.15;
        amount[i]=bill[i] + tip[i];
    }
    if(bill[i]>200){
        tip[i]=bill[i]*0.1;
        amount[i]=bill[i]+tip[i];
    }
        console.log("tip : "+tip+"| Amount : "+amount);
}