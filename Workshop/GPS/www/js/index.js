function abc()
{
    var watchID=navigator.geolocation.getCurrentPosition(onSuccess,onError);
    function onSuccess(position)
    {
        alert('Latitude: '+position.coords.latitude+'\n'+'Longitude :'+position.coords.longitude+'\n');
        var x = position.coords.latitude;
        var y = position.coords.longitude;
        window.location.href="https://www.latlong.net/c/?lat="+x+"&long="+y;
    }
    function onError(error)
    {
        alert('code: '+ error.code+'\n'+'message: '+error.message+'\n');
    }
}