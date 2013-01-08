function onDeviceReady() {
    test('hello test', function () { ok(1 == '1', 'Should pass'); });

    test('getPicture-Success', function () {
        getPicture();
        ok($('#cameraImage').attr('src') != '#');
    });

    test('getAccelerometerData-Success', function () {
        getAccelerometerData();
        ok($('#popupMessage').html.contains('Acceleration X:'))
    });
}

$(document).ready(document.addEventListener("deviceready", onDeviceReady, false));

/*$.getScript("qunit-1.10.0.js", function (data, textStatus, jqxhr) {
    alert('loading qunit');
    console.log(data); //data returned   
    console.log(textStatus); //success   
    console.log(jqxhr.status); //200   
    console.log('Loaded Qunit');
    
    
});*/



