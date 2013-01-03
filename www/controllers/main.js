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

function onQueryContactsSuccess(contacts) {
    for (var i=0; i<contacts.length; i++) {
        $('#popupMessage').html('Display Name = ' + contacts[i].displayName);
    }
    
    $('#popupMessage').popup('open');
}

function onQueryContactsError(){
    $('#popupMessage').html('Query Contacts error');
    $('#popupMessage').popup('open');
}

function queryContacts(){
    var options = new ContactFindOptions();
    options.filter="*"; 
    var fields = ["displayName", "name"];
    navigator.contacts.find(fields, onQueryContactsSuccess, onQueryContactsError, options);
}

function onDeviceReady(){
    $('#cameraButton').bind('tap', getPicture);
    $('#accelerometerButton').bind('tap', getAccelerometerData);
    $('#videoButton').bind('tap',function(){alert('implement me!')});
    $('#deviceButton').bind('tap', displayDeviceInformation);
    $('#contactsButton').bind('tap',function(){queryContacts()});
    $('#compassButton').bind('tap',function(){alert('implement me!')});
    $('#connectionButton').bind('tap',function(){alert('implement me!')});
    $('#fileButton').bind('tap',function(){alert('implement me!')});
    $('#geolocationButton').bind('tap',function(){alert('implement me!')});
    $('#mediaButton').bind('tap',function(){alert('implement me!')});
    $('#notificationButton').bind('tap',function(){alert('implement me!')});
    $('#splashScreenButton').bind('tap',function(){alert('implement me!')});
    $('#storageButton').bind('tap',function(){alert('implement me!')});
}

function init(){
    document.addEventListener("deviceready", onDeviceReady,false);
}