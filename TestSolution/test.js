describe("pow", function() {

    //방법1
    it("주어진 숫자의 n 제곱", function() {
      assert.equal(pow(2, 3), 8);
      assert.equal(pow(3,4), 81);
    });

    //방법2
    it("2의 3 제곱", function() {
        assert.equal(pow(2, 3), 8);
      }); 

    //방법2
    it("3의 4 제곱", function() {
    assert.equal(pow(3,4), 81);
    }); 
  
  });