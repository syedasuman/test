// Write all your Javascript here!
function initilize(){
}
$.ajax({
	url:`https://techkaro-test.herokuapp.com/api/v1/getdata`,
	success:function (data){
		console.log(data);

	}
})
