// Interface 
interface Response {
    statu: number // Some HTTP status code, such as 200
}

fetch('https://jameshenry.blog/foo/bar')
    .then((response: Response) => {
        console.log(response.statu)
    })
    
// Class
    class Respons {
        status: number // Some HTTP status code, such as 200
    }
    
    fetch('https://jameshenry.blog/foo/bar')
        .then((response: Respons) => {
            console.log(response.status)
        })   