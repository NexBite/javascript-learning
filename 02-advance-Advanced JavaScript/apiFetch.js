async function getUser(){

}try {

  const response = await fetch (
    "https://jsonplaceholder.typicode.com/users"
  );
  if(!response.ok){
    throw new Error(
      `HTTP error! Status :${response.status}`
    )
  };

  const users = await response.json();
  users.forEach(users => {
    console.log(`Name: ${users.name}`);
    console.log(`Name: ${users.email}`);
  });
  
} catch (error) {
  // handle error

  console.error("Featch error : ",error.message);
} finally {
  // cleanup
  console.log("Request completed");
}
getUser();