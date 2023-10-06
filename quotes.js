let quoteText=document.getElementById('qoutes-location');
let quoteBody=document.getElementById('quoteBody');
// https://type.fit/api/quotes
let url='quotes.json'
let quotes="";
// console.log(url);

function newqote(){
    const qNum=quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.innerHTML= `" ${qNum.text} "`
    // console.log(quotes)
}

async function getData(){
    const response=await fetch(url);
    quotes= await response.json() //return JS object if we are sure api data will return in JSON formate
    newqote();
    
}
getData();

function genreate(){
    quoteBody.style.backgroundColor=`rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    newqote();
}
// API WOrk start here--------
console.log("New Json Here");

let showHTML=document.getElementById('listItems')
let newFile='file.json';
let newData="";

async function newGetData(){
    const response=await fetch(newFile);
    newData= await response.json() //return JS object if we are sure api data will return in JSON formate
    console.log(newData);
}
newGetData();
let jsonDATA=
[
            {
                "path": "/content/cpb/intranet/www-privatebank-citigroup-net/en/home/private-bank-resources/cpb-applications-directory",
                "title": "CPB Application directory",
                "childpages": [
                    {
                        "path": "/content/cpb/intranet/www-privatebank-citigroup-net/en/home/private-bank-resources/cpb-applications-directory/idea",
                        "title": "Idea",
                        "childpages": [
                            {
                                "path": "/content/cpb/intranet/www-privatebank-citigroup-net/en/home/private-bank-resources/cpb-applications-directory/idea-child",
                                "title": "Idea Child ",
                                "childpages": []
                            }
                        ]
                    },
                    {
                        "path": "/content/cpb/intranet/www-privatebank-citigroup-net/en/home/private-bank-resources/one-delivery",
                        "title": "One Delivery",
                        "childpages": []
                    },
                    {
                        "path": "/content/cpb/intranet/www-privatebank-citigroup-net/en/home/private-bank-resources/cpb-applications-directory/one-resource",
                        "title": "Onc resource",
                        "childpages": []
                    },
                    {
                        "path": "/content/cpb/intranet/www-privatebank-citigroup-net/en/home/private-bank-resources/cpb-applications-directory/view-all-application",
                        "title": "View all application",
                        "childpages": [
                            {
                                "path": "/content/cpb/intranet/www-privatebank-citigroup-net/en/home/private-bank-resources/cpb-applications-directory/view-all-application/business-intelligence",
                                "title": "Business intelligence",
                                "childpages": []
                            },
                            {
                                "path": "/content/cpb/intranet/www-privatebank-citigroup-net/en/home/private-bank-resources/cpb-applications-directory/view-all-application/citi-screening-worlflow--cw-",
                                "title": "Citi screening worlflow (Cw)",
                                "childpages": []
                            },
                            {
                                "path": "/content/cpb/intranet/www-privatebank-citigroup-net/en/home/private-bank-resources/cpb-applications-directory/view-all-application/citi-screening-worlflow-4-0--Cx-",
                                "title": "Citi screening worlflow 4.0 (Cx)",
                                "childpages": []
                            },
                            {
                                "path": "/content/cpb/intranet/www-privatebank-citigroup-net/en/home/private-bank-resources/cpb-applications-directory/view-all-application/document-management-system",
                                "title": "Document management system (DMS)",
                                "childpages": []
                            }
                        ]
                    }
                ]
            },
            {
                "path": "/content/cpb/intranet/www-privatebank-citigroup-net/en/home/private-bank-resources/learning-accelerator",
                "title": "Learning accelerator",
                "childpages": []
            },
            {
                "path": "/content/cpb/intranet/www-privatebank-citigroup-net/en/home/private-bank-resources/learning---development",
                "title": "Learning development",
                "childpages": []
            },
            {
                "path": "/content/cpb/intranet/www-privatebank-citigroup-net/en/home/private-bank-resources/content-library",
                "title": "Content library",
                "childpages": [
                    {
                        "path": "/content/cpb/intranet/www-privatebank-citigroup-net/en/home/private-bank-resources/events-library",
                        "title": "library 1",
                        "childpages": []
                    },
                    {
                        "path": "/content/cpb/intranet/www-privatebank-citigroup-net/en/home/private-bank-resources/events-library",
                        "title": "library 2",
                        "childpages": []
                    },
                    {
                        "path": "/content/cpb/intranet/www-privatebank-citigroup-net/en/home/private-bank-resources/events-library",
                        "title": "library 3",
                        "childpages": []
                    }
                ]
            },
            {
                "path": "/content/cpb/intranet/www-privatebank-citigroup-net/en/home/private-bank-resources/events-library",
                "title": "Events library",
                "childpages": []
            },
            {
                "path": "/content/cpb/intranet/www-privatebank-citigroup-net/en/home/private-bank-resources/risk-management",
                "title": "Risk management",
                "childpages": []
            },
            {
                "path": "/content/cpb/intranet/www-privatebank-citigroup-net/en/home/private-bank-resources/tax",
                "title": "tax",
                "childpages": []
            },
            {
                "path": "/content/cpb/intranet/www-privatebank-citigroup-net/en/home/private-bank-resources/operations---technology",
                "title": "Operations technology",
                "childpages": []
            },
            {
                "path": "/content/cpb/intranet/www-privatebank-citigroup-net/en/home/private-bank-resources/office-locations",
                "title": "Office locations",
                "childpages": []
            }
        ]

var insideObj=[]
jsonDATA.filter(item=>{
    recursion(item)
})

function recursion(obj){
    for(prop in obj){
        if(typeof(obj[prop])== "object" )
        {   
            // showHTML.innerHTML+=`<li>  -${obj[prop]}</li><br>`
            // console.log(prop.toUpperCase() + ":" +obj[prop]);
            insideObj.push()
            recursion(obj[prop])

        }
        else{
            if(prop =="title"){
            showHTML.innerHTML+=`<li>${obj[prop]}</li><br>`
            // console.log(prop.toUpperCase() + ":" +obj[prop]);
            }
        }
    }
}

console.log(insideObj);
