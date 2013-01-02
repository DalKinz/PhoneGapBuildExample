function onCameraSuccess(imageURI) {$('#cameraImage').attr('src', imageURI); }
function onCameraFail(message) {
    $('#popupMessage').html('Failed because: ' + message);
    $('#popupMessage').popup('open');
}

function getPicture(){
    navigator.camera.getPicture(onCameraSuccess, onCameraFail, { quality: 100, destinationType: Camera.DestinationType.FILE_URI});
}

function onAccelerometerSuccess(acceleration) {
    $('#popupMessage').html('Acceleration X: ' + acceleration.x + '<br />' + 'Acceleration Y: ' + acceleration.y + '<br />' + 'Acceleration Z: ' + acceleration.z + '<br />' + 'Timestamp: ' + acceleration.timestamp);
    $('#popupMessage').popup('open');
}

function onAccelerometerFail() {
    $('#popupMessage').html('Accelerometer error');
    $('#popupMessage').popup('open');
}

function getAccelerometerData(){
    navigator.accelerometer.getCurrentAcceleration(onAccelerometerSuccess, onAccelerometerFail);
}

function displayDeviceInformation(){
    $('#popupMessage').html('Device Name: ' + device.name     + '<br />' + 
                            'Device Cordova: ' + device.cordova + '<br />' + 
                            'Device Platform: ' + device.platform + '<br />' + 
                            'Device UUID: ' + device.uuid     + '<br />' + 
                            'Device Version: ' + device.version  + '<br />');
    $('#popupMessage').popup('open');
}

function onDeviceReady(){
    $('#cameraButton').bind('tap', getPicture);
    $('#accelerometerButton').bind('tap', getAccelerometerData);
    $('#videoButton').bind('tap', );
    $('#deviceButton').bind('tap', displayDeviceInformation);
    $('#contactsButton').bind('tap', );
    $('#compassButton').bind('tap', );
    $('#connectionButton').bind('tap', );
    $('#fileButton').bind('tap', );
    $('#geolocationButton').bind('tap', );
    $('#mediaButton').bind('tap', );
    $('#notificationButton').bind('tap', );
    $('#splashScreenButton').bind('tap', );
    $('#storageButton').bind('tap', );
}

//function init(){
//    document.addEventListener("deviceready", onDeviceReady,false);
//}



$(document).bind("deviceready", onDeviceReady);