let timer;
function search(){
  console.log("Searching ......");
}

function debounceSearch(){
  clearTimeout(timer);
  timer = setTimeout(() => {
    search();
    
  }, 500);
}