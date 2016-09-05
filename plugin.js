{
    "moduleId" : "mapman100/Here",
    "title" : "HERE",
    "subtitle" : "Map from here.com",
    
    "backButton" : true,
    "enableGPS" : false,
    "zoomControl" : false,
    "screenLockRot" : false,
    "reload" : true,
    
    "shouldOverrideUrlLoading1" : "http://m.here.com",
    "shouldOverrideUrlLoading2" : "https://m.here.com",

    "loadDataWithBaseUrl1" : "https://m.here.com",
    "loadDataWithBaseUrl3" : "text/html",
    "loadDataWithBaseUrl4" : "utf-8",
    "loadDataWithBaseUrl5" : null,
					
    "browserLaunchLink" : "http://www.here.com",
    
    "loadDataWithBaseUrl2" : 
"
<script type='text/javascript'>
    
    // localStorage.clear();
    document.cookie='USE_MOBILE=false; expires=Fri, 31 Dec 9999 23:59:59 GMT; domain=.here.com;';
    document.cookie='FORCE_MHERE=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; domain=.here.com;';
    
    if (localStorage.getItem('mh5-isFirstTime') === null) {
        // First time
        localStorage.setItem('mh5-isFirstTime', true);
        localStorage.setItem('b', true); 
        localStorage.setItem('t', true); 
        localStorage.setItem('nn', true); 
        var newSettings = {'trafficIncidentsEnabled':true,'mapSchema':'normal.day.traffic'};        
        localStorage.setItem('settings',JSON.stringify(newSettings));
    }
    
    // Set center and zoom
    var center = {latitude : #lat#, longitude : #lng#};
    localStorage.setItem('1html5-map-center', JSON.stringify(center));
    localStorage.setItem('1html5-map-zoom', '#zoom#');    
    window.location.href = 'http://m.here.com';

</script>   
"
    
}
