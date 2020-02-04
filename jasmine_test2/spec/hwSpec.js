function Sum1toN(n){
	sum = 0;
	for (i=0;i<=n;i++){
		sum+=i;
	}
	return sum;
}

function sumFirstLast(arr){
	sum = arr[0]+arr[arr.length-1];
	return sum;
}
    
describe("Sum1toN", function() { 
	    it("should return 3 when we pass 2 as an argument", function() { 
		            expect(Sum1toN(2)).toEqual(3); 
		        }); 
	    it("should return 6 when we pass 3 as an argument", function() { 
		            expect(Sum1toN(3)).toEqual(6); 
		        }); 
	    it("should return 10 when we pass 4 as an argument", function() { 
		            expect(Sum1toN(4)).toEqual(10); 
		        }); 
});
    
describe("sumFirstLast", function() { 
	    it("should return 3 when we pass [1,2] as an argument", function() { 
		            expect(sumFirstLast([1,2])).toEqual(3); 
		        }); 
	    it("should return 10 when we pass [2,3,8] as an argument", function() { 
		            expect(sumFirstLast([2,3,8])).toEqual(10); 
		        }); 
	    it("should return -10 when we pass [-6,23,3,-4] as an argument", function() { 
		            expect(sumFirstLast([-6,23,3,-4])).toEqual(-10); 
		        }); 
});
