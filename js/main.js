var camera, scene, renderer;
var controls;
var blocker = document.getElementById( 'blocker' );
var instructions = document.getElementById( 'instructions' );

var havePointerLock = 'pointerLockElement' in document || 
    'mozPointerLockElement' in document || 
    'webkitPointerLockElement' in document;

if ( havePointerLock ) {

    var element = document.body;

    var pointerlockchange = function ( event ) {
        if ( document.pointerLockElement === element ||
             document.mozPointerLockElement === element || 
             document.webkitPointerLockElement === element ) {
            
            controls.enabled = true;
            blocker.style.display = 'none';
        
        } else {
        
            controls.enabled = false;
            blocker.style.display = '-webkit-box';
            blocker.style.display = '-moz-box';
            blocker.style.display = 'box';
            instructions.style.display = '';
        
        }
    }

    var pointerlockerror = function ( event ) {
        instructions.style.display = '';
    }

    // Hook pointer lock state change events
    document.addEventListener( 'pointerlockchange', pointerlockchange, false );
    document.addEventListener( 'mozpointerlockchange', pointerlockchange, false );
    document.addEventListener( 'webkitpointerlockchange', pointerlockchange, false );
    document.addEventListener( 'pointerlockerror', pointerlockerror, false );
    document.addEventListener( 'mozpointerlockerror', pointerlockerror, false );
    document.addEventListener( 'webkitpointerlockerror', pointerlockerror, false );

    instructions.addEventListener( 'click', function ( event ) {
 
        instructions.style.display = 'none';

        // Ask the browser to lock the pointer
        element.requestPointerLock = element.requestPointerLock ||
                                     element.mozRequestPointerLock ||
                                     element.webkitRequestPointerLock;

        if ( /Firefox/i.test( navigator.userAgent ) ) {

            var fullscreenchange = function ( event ) {

                if ( document.fullscreenElement === element || document.mozFullscreenElement === element || document.mozFullScreenElement === element ) {
                    document.removeEventListener( 'fullscreenchange', fullscreenchange );
                    document.removeEventListener( 'mozfullscreenchange', fullscreenchange );
                    element.requestPointerLock();
                }

            }

            document.addEventListener( 'fullscreenchange', fullscreenchange, false );
            document.addEventListener( 'mozfullscreenchange', fullscreenchange, false );
            element.requestFullscreen = element.requestFullscreen || element.mozRequestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullscreen;
            element.requestFullscreen();
        } else {
            element.requestPointerLock();
        }

    }, false );

} else {

    instructions.innerHTML = 'Your browser doesn\'t seem to support Pointer Lock API';

}


init();
animate();

function init() {

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    renderer.setClearColor(0xAFEEEE, 1);

    scene = new THREE.Scene();

    scene.fog = new THREE.FogExp2( 0xcccccc, 0.010 );

    camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 1, 1000 );
    controls = new THREE.PointerLockControls( camera );
    scene.add( controls.getObject() );

    light = new THREE.PointLight(0x4C4D4D);
    light.position.set(-170.204, -170.204, 127.653);
    scene.add(light);

    light = new THREE.PointLight(0x4C4C4C);
    light.position.set(0.000, 170.204, 170.204);
    scene.add(light);

    light = new THREE.AmbientLight( 0x7c7e70 ); 
    scene.add(light);

    create_geometry_0(scene);
    create_geometry_1(scene);
    create_geometry_2(scene);
    create_geometry_3(scene);
    create_geometry_4(scene);
    create_geometry_5(scene);
    create_geometry_6(scene);
    create_geometry_7(scene);
    create_geometry_8(scene);
    create_geometry_9(scene);
    create_geometry_10(scene);

    window.addEventListener('resize', onWindowResize, false);

}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}

function animate(){
    requestAnimationFrame(animate);
    controls.update();                
    renderer.render(scene, camera);
}

function render(){
    renderer.render(scene, camera);
}