//Variable Scope
//let,var and const

        //Global Variable

        var global_Var=10;
        let global_Let=11;
        const gloabal_Const=12;

        document.write("var global_Var="+global_Var+"<br>")
        document.write("let global_Let="+global_Let+"<br>")
        document.write("const gloabal_Const="+gloabal_Const+"<br>")

        //Block 
        {
            var ts1=12;
            let ts2=84;
            const ts3=30;
            ts2=3
            console.log(ts1+ts2+ts3)
        }
        console.log(ts1)
        //console.log(ts2)  can't access b/c block level scope of let 
        //console.log(ts3)  can't access b/c block level scope of const

        //Function
        function testing(){
            var funVr1=99;
            let funVr2=88;
            const funVr3=77;

            let total= funVr1+funVr2+funVr3;
            console.log(total)

            document.write("<br> Changing Global Variable inside Function ")
            
            // Reassign Global Variable 
            global_Var=44;
            global_Let=55;
            
            document.write("<br>var global_Var="+global_Var+"<br>")
            document.write("let global_Let="+global_Let+"<br>")

            testing00=890
            document.write("<br> Declare Variable Without Type Create Global Variabel Even Inside Function  ")
            document.write("testing00="+testing00)

            // let funVr2=88; we can't re-declare let variabes but we can reassign them
        }
        
        testing()
        console.log('Accessing Testing Varaiable')
        console.log(testing00)

        console.log("If We try To access function Varaible then it wil give us Error")
        // console.log("var funVr1="+funVr1)
        // console.log("var funVr1="+funVr2)
        // console.log("var funVr1="+funVr3)
        

        document.write("<br>Changes Again Global Variable Values Outside of Function <br>");
        global_Var=00;
        global_Let=001;

        document.write("var global_Var="+global_Var+"<br>")
        document.write("let global_Var="+global_Let+"<br>")

        let datatype1="String";
        let datatype2=34;
        let datatype3=true;
        let datatype4;
        let datatype5=null;
        let datatype6=BigInt(7894557n)
        let datatype7=Symbol('testing');
        let z='';

        console.log('------Datatypes')
        
        console.log(typeof datatype1)
        console.log(typeof datatype2)
        console.log(typeof datatype3)
        console.log(typeof datatype4)
        console.log(typeof datatype5)
        console.log(typeof datatype6)
        console.log(typeof datatype7)
        console.log(typeof z);
        

        console.log('--------Non-Primitve dataypes')

        const obj1={
            
            name:"admin",
            code:"xc3v",
            color:"red",
            groups:["gr1","gr3","gr33","demo23"],
            idnumber:Number.MAX_SAFE_INTEGER,
            pass:true,
            accountNu:BigInt(1899n),
            sno:Symbol('demo_testing'),
        }
        obj1.func=function(){
               return "userName = "+this.name+" id= "+this.idnumber;
            }
        console.log(obj1)
        console.log(obj1.func())
        console.log(obj1.sno);

        const array1=[23,553,789,7,54,7893]
        console.log(typeof array1)
        console.log(array1)
        
        //trying to adding numbers & strings
        let a=3;
        let b='10';
        let c=2;
        console.log(a+b+c);
        console.log(a+c+b);
        console.log(b+a+c);

        //comaprison primitive and non-primitive
        const arr1=[12,89,1];
        const arr2=[12,89,1];
        let pre1="some random text";
        let pre2="some random text";
        
        //same value but reference are different
        console.log(pre1===pre2);
        console.log(arr1===arr2);
        
        //primitive are immutable
        pre1[0]="a";
        console.log(pre1)
        
        //non-primitive are mutable
        arr1[0]='55';
        console.log(arr1)


