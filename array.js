
        const array1=[1,2,5,8,54,75,90,12,34,467,87];
        document.write(`Length of Array = ${array1.length}<br>`)
        const sortArr=array1.sort(function(a,b){return a-b})

        document.write(`Sorted Array <br>`)
        for (let index = 0; index < sortArr.length; index++) {
            document.write(sortArr[index]+"<br>")   
        }

        //splice() and slice()
        const demoArr=['a','d','e','g','h','k']
        const removedArr=demoArr.splice(2,3,"b","c","v")
        console.log(`Removed Array = ${removedArr}`)
        console.log(`Array Ate`)

        // finding max in array
        document.write(`MAX in Array is = ${findMax(sortArr)} <br>`)
        function findMax(arr){
            return Math.max.apply(null,arr)
        }
        // finding min in array
        document.write(`MIN in Array is = ${findMin(sortArr)} <br>`)
        function findMin(arr){
            return Math.min.apply(null,arr)
        }

        const fruits=["Apple","Orange","Banana"];
        document.write(`${fruits}<br>`)

        fruits.unshift("Mango")
        fruits.push("fruit3")
        document.write(`${fruits}<br>`)

    //forEach 
    var tem=" ";

    fruits.forEach((value)=>{return  tem+=value+" "})
    console.log(tem);

    //map()
    const ar3=[20,10,34,22,67,97,88,24,65,86,97]
    console.log(`Array Before Map Method ${ar3}`)
    const ar3Map=ar3.map((value)=>{return value*2})
    console.log(`Array After Multi by 2 =  ${ar3Map}`)

    //filter()
    const ar3Filter=ar3.filter((value)=>{return value > 30})
    console.log(`Array Greater than 30 = ${ar3Filter}`)

    console.log(ar3)
    //reduce()
    console.log(`Reduce Method, Total Sum of Array = ${ar3.reduce((total,value)=>{return total + value})}`)

    // every() & some()
    console.log(`Every Method = ${ar3.every((value)=>{return value > 40})}`)

    console.log(`Some Method = ${ar3.some((value)=>{return value > 40})}`)

    //indexOf() 
    console.log( "97 At Position "+ar3.indexOf(97)+1) 
    
    //find()
    console.log( "Value Greater Than 45 =  "+ar3.find((value)=>{return value >45}) )

    // findIndex()
    console.log( "Value Greater Than 45 Index =  "+ar3.findIndex((value)=>{return value >45}) )
    
    //Array.keys()
    ar3Keys="";
    keys=ar3.keys();
    for (let x of keys) {
        ar3Keys += x +" ";
    }
    console.log( "Keys Of Array =  " + ar3Keys)


