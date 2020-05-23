describe("pow", function() {

    function makeTest(x) {
        let result = x*x*x;
        it(`${x}의 3제곱=${result}`, function() {
            assert.equal(pow(x, 3), result);
        }); 
    }//makeTest() end

    for(let i=1;i<=5;i++){
        makeTest(i);    
    }//for end

  
  });