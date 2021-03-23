import * as THREE from 'three';

export class App {

    constructor() {

        this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
        this.camera.position.z = 1;

        this.scene = new THREE.Scene();

        let geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
        let material = new THREE.MeshNormalMaterial();

        this.mesh = new THREE.Mesh( geometry, material );
        this.scene.add( this.mesh );

        this.renderer = new THREE.WebGLRenderer( { antialias: true } );
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.setAnimationLoop( (time) => { this._animation(time) } );

        document.body.appendChild( this.renderer.domElement );

    }

    _animation( time ) {

        this.mesh.rotation.x = time / 2000;
        this.mesh.rotation.y = time / 1000;

        this.renderer.render( this.scene, this.camera );

    }
}
