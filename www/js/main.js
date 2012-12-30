function onCameraSuccess(imageURI) {$('#cameraImage').attr('src', imageURI); }
function onCameraFail(message) {
    $('#popupMessage').html('Failed because: ' + message);
    $('#popupMessage').popup('open');
}

function onAccelerometerSuccess(acceleration) {
    $('#popupMessage').html('Acceleration X: ' + acceleration.x + '\n' + 'Acceleration Y: ' + acceleration.y + '\n' + 'Acceleration Z: ' + acceleration.z + '\n' + 'Timestamp: ' + acceleration.timestamp + '\n');
    $('#popupMessage').popup('open');
}
function onAccelerometerFail() {
    $('#popupMessage').html('Accelerometer error');
    $('#popupMessage').popup('open');
}

function onDeviceReady(){
    alert('deviceready');
    $('#cameraButton').bind('tap', function () {alert('clicked camera');
    navigator.camera.getPicture(onCameraSuccess, onCameraFail, { quality: 100, destinationType: Camera.DestinationType.FILE_URI});});

    $('#accelerometerButton').bind('tap', function () { alert('clicked accelerometer');
    navigator.accelerometer.getCurrentAcceleration(onAccelerometerSuccess, onAccelerometerFail);})
}

function init(){
    alert('loading');
    document.addEventListener("deviceready", onDeviceReady,false);
    app.initialize();
    alert('done loading');
}



/*$(document).bind("deviceready", function () {
    alert('deviceready');
    alert(  'Device Name: '     + device.name     + '<br />' + 
            'Device Cordova: '  + device.cordova + '<br />' + 
            'Device Platform: ' + device.platform + '<br />' + 
            'Device UUID: '     + device.uuid     + '<br />' + 
            'Device Version: '  + device.version  + '<br />');
});*/