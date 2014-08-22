$(function(){

	var weatherDiv = $('#weather'),
		scroller = $('#scroller'),
		location = $('p.location');

    weatherApi = {
	DEG : 'c',
	weatherIconMap : [
		'storm', 'storm', 'storm', 'lightning', 'lightning', 'snow', 'hail', 'hail',
		'drizzle', 'drizzle', 'rain', 'rain', 'rain', 'snow', 'snow', 'snow', 'snow',
		'hail', 'hail', 'fog', 'fog', 'fog', 'fog', 'wind', 'wind', 'snowflake',
		'cloud', 'cloud_moon', 'cloud_sun', 'cloud_moon', 'cloud_sun', 'moon', 'sun',
		'moon', 'sun', 'hail', 'sun', 'lightning', 'lightning', 'lightning', 'rain',
		'snowflake', 'snowflake', 'snowflake', 'cloud', 'rain', 'snow', 'lightning'
	],
	getWeather: function() {
	
	that = this;

	    var wsql = 'select * from weather.forecast where woeid=WID and u="'+this.DEG+'"',
	        weatherYQL = 'http://query.yahooapis.com/v1/public/yql?q='+encodeURIComponent(wsql)+'&format=json&callback=?',
	        code, city, results, woeid;
			
			woeid = '728884'
	    			
	            $.getJSON(weatherYQL.replace('WID',woeid), function(r){
	            	
	                if(r.query && r.query.count == 1){
	                	
	                    var item = r.query.results.channel.item.condition;
	                    
	                    if(!item){
	            
	                    	if (window.console && window.console.info){
						    	console.info("%s, %s; woeid: %d", city, code, woeid);
						    }
						    
						    return false;
	                    }
	                    
	                    that.addWeather(item.code, "Now", item.temp+'°'+that.DEG+'</b>');
						
	                            
	                }
	                else {
	                    console.log("Error retrieving weather data!");
	                }
	            });
	},
	addWeather: function(code, day, condition){
		
	    var markup = //'<li>'+
	    	'<img src="img/icons/'+ this.weatherIconMap[code] +'.png" />' +
	    	'</p> <p class="cond">'+ condition + '</p>'
	    
	    scroller.append(markup);
		//console.log(markup);
		$('#spinner').hide();
		$('.weather').append(markup);
	}
}

weatherApi.getWeather();

});