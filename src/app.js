import * as THREE from 'three';

export class App {

    constructor() {

        // camera
        this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
        this.camera.position.z = 5;

        // scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0xffffff );

        // mesh
        let geometry = new THREE.BoxGeometry( 1, 1, 1 );
        let material = new THREE.MeshPhongMaterial({
            color: 0x444444,
        });
        this.mesh = new THREE.Mesh( geometry, material );
        this.scene.add( this.mesh );

        // light
        const light = new THREE.DirectionalLight( 0xffffff, 1 ); // soft white light
        light.position.set(5, 5, 5);
        light.target.position.set(0, 0, 0);
        this.scene.add( light );
        this.scene.add( light.target );

        // renderer
        this.renderer = new THREE.WebGLRenderer( { antialias: true } );
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.setAnimationLoop( (time) => { this._animation(time) } );
        document.body.appendChild( this.renderer.domElement );

    }

    _animation( time ) {

        this.mesh.rotation.x = time / 3000;
        this.mesh.rotation.y = time / 2000;
        this.renderer.render( this.scene, this.camera );

    }
}
