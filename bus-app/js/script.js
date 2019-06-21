$(function(){
	$('.star').click(function(){
		let num = $(this).attr('data-id').match(/\d+/)[0];
		for(let i = 1; i<=num; i++){
			$("#star"+i).css('color', '#B77656');
		}
	})
})


