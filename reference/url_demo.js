const url = require("url")

// const myUrl = new URL("http://www.mywebsite.com:8080/hello.html?id=100&status=active")
const myUrl = new URL("http://www.mywebsite.com/hello.html?id=100&status=active")

//Serialize url
console.log(myUrl.href)
console.log(myUrl)
console.log(myUrl.toString())

//host (root domain)
console.log(myUrl.host)

//host name (does not get port)
console.log(myUrl.hostname)

//pathname 
console.log(myUrl.pathname)

//Serialized query
console.log(myUrl.search)

//Params object
console.log(myUrl.searchParams)

//add params
myUrl.searchParams.append("abc", "123")
console.log(myUrl.searchParams)

//loop through the object
myUrl.searchParams.forEach((name, value) => 
    console.log(`${name} : ${value}`)
)

