function returnLargest(arr){
	max = arr[0];
	for (i=1;i<arr.length;i++){
		if (arr[i]>max){
			max=arr[i];
		}
	}
	return max;
}
describe("returnLargest", function() {
	it("should return 18, as it is the largest value", function() {
		expect(returnLargest([2,5,18,12])).toEqual(18);
	});
	it("should return -2, as it is the largest value", function() {
		expect(returnLargest([-10,-2,-8,-3])).toEqual(-2);
	});
});
