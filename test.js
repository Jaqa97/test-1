const { fromEuroToDollar, fromDollarToYen, fromYanToPound } = require('./app.js')

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("one dollar should be 106 yens", function(){
    let total = fromDollarToYen(1);
    expect(total).toBe(106);
});


test("one yan should be 1 pound", function(){
    let total = fromYanToPound(127,9);
    expect(total).toBe(1);
})