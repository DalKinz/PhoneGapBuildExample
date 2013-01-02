test( "hello test", function() {
    ok( 1 == "1", "Passed!" );
});

test( "getPicture-Success", function() {
    getPicture();
    ok($('#cameraImage').attr('src') == "1", "Passed!" );
});