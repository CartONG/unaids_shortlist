define(["dojo/topic"], function(topic) {
	/*
	* Custom Javascript to be executed while the application is initializing goes here
	*/

	// The application is ready
	topic.subscribe("tpl-ready", function(){
		/*
		* Custom Javascript to be executed when the application is ready goes here
		*/
		var d1 = document.getElementsByClassName('mobileTitle');
		console.log(d1);
		d1[0].innerHTML = '<img class="logoImg" src="https://www.arcgis.com/sharing/rest/content/items/9164cefd02f841aa969380dc6b282a10/resources/sm_series_logo__1571825220888.png" alt="" style="outline: none;"><div>UNAIDS Story Map</div>'

	});

	// Tab navigation.  This is fired anytime the tab is selected/changed.
	topic.subscribe("story-tab-navigation", function(index){
		/*
		* Custom Javascript to be executed when a tab is selected goes here
		*/
	});
});
