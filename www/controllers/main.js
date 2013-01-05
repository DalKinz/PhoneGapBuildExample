//Camera
function onCameraSuccess(imageURI) {$('#cameraImage').attr('src', imageURI); }
function onCameraFail(message) {
    $('#popupMessage').html('Failed because: ' + message);
    $('#popupMessage').popup('open');
}

function getPicture(){
    navigator.camera.getPicture(onCameraSuccess, onCameraFail, { quality: 100, destinationType: Camera.DestinationType.FILE_URI});
}

//Accelerometer
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

//
function displayDeviceInformation(){
    $('#popupMessage').html('Device Name: ' + device.name     + '<br />' + 
                            'Device Cordova: ' + device.cordova + '<br />' + 
                            'Device Platform: ' + device.platform + '<br />' + 
                            'Device UUID: ' + device.uuid     + '<br />' + 
                            'Device Version: ' + device.version  + '<br />');
    $('#popupMessage').popup('open');
}

function displayNotification(){
    navigator.notification.alert('Message','Title','Done');
    navigator.notification.beep(3);
    navigator.notification.vibrate(2000);
}


function onGetContactsSuccess(contacts) {
    var contactsString;
    for (var i=0; i<contacts.length; i++) {
        contactsString += 'Display Name = ' + contacts[i].displayName + '<br />';
    }
    
    $('#popupMessage').html(contactsString);
    $('#popupMessage').popup('open');
}

function onGetContactsError(){
    $('#popupMessage').html('Query Contacts error');
    $('#popupMessage').popup('open');
}

function getContacts(){
    var options = new ContactFindOptions();
    options.filter='';
    options.multiple=true;
    var fields = ['displayName', 'name'];
    navigator.contacts.find(fields, onGetContactsSuccess, onGetContactsError, options);
}

function onDeviceReady(){
    $('#cameraButton').bind('tap', getPicture);
    $('#accelerometerButton').bind('tap', getAccelerometerData);
    $('#videoButton').bind('tap',function(){alert('implement me!')});
    $('#deviceButton').bind('tap', displayDeviceInformation);
    $('#contactsButton').bind('tap',function(){getContacts()});
    $('#compassButton').bind('tap',function(){alert('implement me!')});
    $('#connectionButton').bind('tap',function(){alert('implement me!')});
    $('#fileButton').bind('tap',function(){alert('implement me!')});
    $('#mediaButton').bind('tap',function(){alert('implement me!')});
    $('#notificationButton').bind('tap',displayNotification);
    $('#splashScreenButton').bind('tap',function(){alert('implement me!')});
    $('#storageButton').bind('tap',function(){alert('implement me!')});
}

function init(){
    document.addEventListener("deviceready", onDeviceReady,false);
}