async function getUsers(){
try{
  const response =  await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        if (! response.ok) {
          throw new Error(     `HTTP error! Status: ${response.status}`
            );
        }
        const users = await response.json();

        console.log(users);
         // Print name and email
        users.forEach(user => {
            console.log(`Name: ${user.name}`);
            console.log(`Email: ${user.email}`);
        });

}catch (Error){

console.error("Fetch error:", error.message);


}finally{
console.log("Request completed");
}
}
getUsers();