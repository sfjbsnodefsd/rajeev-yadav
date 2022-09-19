class Employee{
    constructor(eName,eAge){
        this.ename = eName;
        this.eage = eAge;
    }
    printEmp(){
        return "Emp Name :" + this.ename + " Emp Age : "+ this.eage;
    }
    work(){
        console.log("Employee is working")
    }
}

// let emp1 = new Employee("rajeev",35);
// let emp2 = new Employee("Deepak",36);
// let emp3 = new Employee("Vicky",38);

// emp1.printEmp();

class HR extends Employee{
    constructor(hName,hAge,hJob){
        super(hName,hAge);
        this.hJob = hJob;
    }
    hiring(){
        console.log("Hr is hiring")
    }
    hrDetails(){
        console.log(super.printEmp() + " Job is : "+ this.hJob);
    }

    work(){
        console.log("Hr is hirirng");
    }
    
}

let Hr1 = new HR("Ramesh",42,"hire");
// Hr1.hiring();
// Hr1.printEmp();
Hr1.hrDetails();
// Hr1.work();

// console.log(emp1)
// console.log(emp2)
// console.log(emp3)
function clickForName(){
    // alert("Hi");
}

function keydown(){
    // alert("Key press!");
}
function mousehover(){
    // alert("Mouse Hover!");
}

document.getElementById("cbtn").addEventListener("click",function(){
    document.getElementById("para").innerHTML = 'This is new text';
})