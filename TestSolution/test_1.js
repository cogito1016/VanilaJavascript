describe("pow", function() {

    describe("정수를 3제곱합니다",function() {

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

    describe("'음수'번을 제곱려고하면 IsNan을 반환합니다",function() {

        it("2를 -1번 제곱하려고 할때",function() {
            assert.isNaN(pow(2,-1),NaN);
        });
    });
  
  });