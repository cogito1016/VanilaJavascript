function makeWorker() {
    let name = "Pete";
  
    return function() {
      alert(name);
    };
  }//makeWorker() end
  
  let name = "John";
  
  // create a function
  let work = makeWorker();
  
  // call it
  work(); // what will it show?