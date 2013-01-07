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

function getVideoSuccess(mediaFiles) {
    var i, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        $('#popupMessage').html('Path: ' + mediaFile.fullPath + '<br/>Name: ' + mediaFile.name);
        $('#popupMessage').popup('open');       
    }       
}
function getVideoError(error) {
    $('#popupMessage').html('An error occurred during capture: ' + error.code);
    $('#popupMessage').popup('open');
}

function getVideo() {
    navigator.device.capture.captureVideo(captureSuccess, captureError, {limit: 2});
}

function onDeviceReady(){
    $('#cameraButton').bind('tap', getPicture);
    $('#accelerometerButton').bind('tap', getAccelerometerData);
    $('#videoButton').bind('tap',getVideo);
    $('#deviceButton').bind('tap', displayDeviceInformation);
    $('#contactsButton').bind('tap',getContacts);
    $('#compassButton').bind('tap',function(){alert('implement me!')});
    $('#connectionButton').bind('tap',function(){alert('implement me!')});
    $('#fileButton').bind('tap',function(){alert('implement me!')});
    $('#mediaButton').bind('tap',function(){alert('implement me!')});
    $('#notificationButton').bind('tap',displayNotification);    
    $('#storageButton').bind('tap',function(){alert('implement me!')});
}

function init(){
    document.addEventListener("deviceready", onDeviceReady,false);
}