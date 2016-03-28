/**
 * Created by cmccl on 3/28/2016.
 */

$(document).ready(function changeTabs() {
	//Get the url of current page
	var title = $(location).attr('href');

	//Find all the tabs
	$('#header > .menu > ul > li > a').each(function(){

		//if url matches add class to selected tab
		if(this == title)
		{
			$(this).parent().addClass("selected-tab");

		}
	})
});