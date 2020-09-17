"use strict";

$(document).ready(function(){
    $("#bull").click(function(){
       $("#content").load("./movies/florida.html");
        setCookie();
         getCookie();
    });

	 $("#good").click(function(){
        $("#content").load("./movies/goodfellas.html");
      setCookie();
		 getCookie();

	 });

$("#big").click(function(){
        $("#content").load("./movies/lebowski.html");
 setCookie();
 getCookie();
});

$("#boyz").click(function(){
        $("#content").load("./movies/boyz.html");
 setCookie();
 getCookie();
});

$("#casino").click(function(){
        $("#content").load("./movies/casino.html");
 setCookie();
 getCookie();
});
	$("#anchorman").click(function(){
        $("#content").load("./movies/anchorman.html");
     setCookie();
	 getCookie();
	});
	$("#dodge").click(function(){
        $("#content").load("./movies/dodgeball.html");
     setCookie();
	 getCookie();
	});
	$("#lord").click(function(){
        $("#content").load("./movies/fellowship.html");
     setCookie();
	 getCookie();
	});
	$("#toy").click(function(){
        $("#content").load("./movies/moonlight.html");
         setCookie();
	 getCookie();
	});
	$("#monsters").click(function(){
        $("#content").load("./movies/monsters.html");
    setCookie();
	 getCookie();

	});


function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}


});

/*********** HIGHCHARTS *******************/
$(function () {
           $('#goodfella_chart').highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Goodfellas Box Office:Budget'
    },

    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,

            }
        }
    },
    series: [{
        name: 'Box Office:Budget',
        colorByPoint: true,
        data: [{
            name: 'Budget',
            y: 25000000,
            sliced: true,
            selected: true
        }, {
            name: 'Box Office',
            y: 46879633

        }]
    }]
});

$('#florida_chart').highcharts({
chart: {
plotBackgroundColor: null,
plotBorderWidth: null,
plotShadow: false,
type: 'pie'
},
title: {
text: 'The Florida Project Budget:Box Office'
},

accessibility: {
point: {
 valueSuffix: '%'
}
},
plotOptions: {
pie: {
 allowPointSelect: true,
 cursor: 'pointer',
 dataLabels: {
     enabled: true,

 }
}
},
series: [{
name: 'Box Office:Budget',
colorByPoint: true,
data: [{
 name: 'Budget',
 y: 2000000,
 sliced: true,
 selected: true
}, {
 name: 'Box Office',
 y: 10971298
}]
}]
});

$('#moonlight_chart').highcharts({
chart: {
plotBackgroundColor: null,
plotBorderWidth: null,
plotShadow: false,
type: 'pie'
},
title: {
text: 'Moonlight Budget:Box Office'
},

accessibility: {
point: {
 valueSuffix: '%'
}
},
plotOptions: {
pie: {
 allowPointSelect: true,
 cursor: 'pointer',
 dataLabels: {
     enabled: true,

 }
}
},
series: [{
name: 'Box Office:Budget',
colorByPoint: true,
data: [{
 name: 'Budget',
 y: 4000000,
 sliced: true,
 selected: true
}, {
 name: 'Box Office',
 y: 65336603
}]
}]
});

$('#lebowski_chart').highcharts({
chart: {
plotBackgroundColor: null,
plotBorderWidth: null,
plotShadow: false,
type: 'pie'
},
title: {
text: 'The Big Lebowski Budget:Box Office'
},

accessibility: {
point: {
 valueSuffix: '%'
}
},
plotOptions: {
pie: {
 allowPointSelect: true,
 cursor: 'pointer',
 dataLabels: {
     enabled: true,

 }
}
},
series: [{
name: 'Box Office:Budget',
colorByPoint: true,
data: [{
 name: 'Budget',
 y: 15000000,
 sliced: true,
 selected: true
}, {
 name: 'Box Office',
 y: 46735469
}]
}]
});

$('#boyz_chart').highcharts({
chart: {
plotBackgroundColor: null,
plotBorderWidth: null,
plotShadow: false,
type: 'pie'
},
title: {
text: 'Boyz n the Hood Budget:Box Office'
},

accessibility: {
point: {
 valueSuffix: '%'
}
},
plotOptions: {
pie: {
 allowPointSelect: true,
 cursor: 'pointer',
 dataLabels: {
     enabled: true,

 }
}
},
series: [{
name: 'Box Office:Budget',
colorByPoint: true,
data: [{
 name: 'Budget',
 y: 6500000,
 sliced: true,
 selected: true
}, {
 name: 'Box Office',
 y: 57529070
}]
}]
});

$('#casino_chart').highcharts({
chart: {
plotBackgroundColor: null,
plotBorderWidth: null,
plotShadow: false,
type: 'pie'
},
title: {
text: 'Casino Budget:Box Office'
},

accessibility: {
point: {
 valueSuffix: '%'
}
},
plotOptions: {
pie: {
 allowPointSelect: true,
 cursor: 'pointer',
 dataLabels: {
     enabled: true,

 }
}
},
series: [{
name: 'Box Office:Budget',
colorByPoint: true,
data: [{
 name: 'Budget',
 y: 52000000,
 sliced: true,
 selected: true
}, {
 name: 'Box Office',
 y: 116112375
}]
}]
});

$('#anchor_chart').highcharts({
chart: {
plotBackgroundColor: null,
plotBorderWidth: null,
plotShadow: false,
type: 'pie'
},
title: {
text: 'Anchorman Budget:Box Office'
},

accessibility: {
point: {
 valueSuffix: '%'
}
},
plotOptions: {
pie: {
 allowPointSelect: true,
 cursor: 'pointer',
 dataLabels: {
     enabled: true,

 }
}
},
series: [{
name: 'Box Office:Budget',
colorByPoint: true,
data: [{
 name: 'Budget',
 y: 26000000,
 sliced: true,
 selected: true
}, {
 name: 'Box Office',
 y: 90649730
}]
}]
});


$('#dodgeball_chart').highcharts({
chart: {
plotBackgroundColor: null,
plotBorderWidth: null,
plotShadow: false,
type: 'pie'
},
title: {
text: 'Dodgeball Budget:Box Office'
},

accessibility: {
point: {
 valueSuffix: '%'
}
},
plotOptions: {
pie: {
 allowPointSelect: true,
 cursor: 'pointer',
 dataLabels: {
     enabled: true,

 }
}
},
series: [{
name: 'Box Office:Budget',
colorByPoint: true,
data: [{
 name: 'Budget',
 y: 20000000,
 sliced: true,
 selected: true
}, {
 name: 'Box Office',
 y: 168423227
}]
}]
});

$('#ring_chart').highcharts({
chart: {
plotBackgroundColor: null,
plotBorderWidth: null,
plotShadow: false,
type: 'pie'
},
title: {
text: 'Fellowship of the Ring Budget:Box Office'
},

accessibility: {
point: {
 valueSuffix: '%'
}
},
plotOptions: {
pie: {
 allowPointSelect: true,
 cursor: 'pointer',
 dataLabels: {
     enabled: true,

 }
}
},
series: [{
name: 'Box Office:Budget',
colorByPoint: true,
data: [{
 name: 'Budget',
 y: 93000000,
 sliced: true,
 selected: true
}, {
 name: 'Box Office',
 y: 887871915
}]
}]
});

$('#monster_chart').highcharts({
chart: {
plotBackgroundColor: null,
plotBorderWidth: null,
plotShadow: false,
type: 'pie'
},
title: {
text: 'Monsters Inc. Budget:Box Office'
},

accessibility: {
point: {
 valueSuffix: '%'
}
},
plotOptions: {
pie: {
 allowPointSelect: true,
 cursor: 'pointer',
 dataLabels: {
     enabled: true,

 }
}
},
series: [{
name: 'Box Office:Budget',
colorByPoint: true,
data: [{
 name: 'Budget',
 y: 115000000,
 sliced: true,
 selected: true
}, {
 name: 'Box Office',
 y: 632316649
}]
}]
});

});
