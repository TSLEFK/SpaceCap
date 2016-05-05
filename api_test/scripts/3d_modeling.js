var main = function () {
    //シーン作成
    var scene = new THREE.Scene();

    //カメラ作成
    var width  = 600;
    var height = 400;
    var fov    = 60;
    var aspect = width / height;
    var near   = 1;
    var far    = 1000;
    //画角,縦横比,nearより近い領域は表示されない,farより遠い領域は表示されない
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 50 );
    
    
    // トラックボールの作成
    trackball = new THREE.TrackballControls( camera );
    // 回転無効化と回転速度の設定
    trackball.noRotate = false; // false:有効 true:無効
    trackball.rotateSpeed = 1.0;
    // ズーム無効化とズーム速度の設定
    trackball.noZoom = false; // false:有効 true:無効
    trackball.zoomSpeed = 0.4;
    // パン無効化とパン速度の設定
    trackball.noPan = true; // false:有効 true:無効
    trackball.panSpeed = 1.0;
    // スタティックムーブの有効化
    trackball.staticMoving = false; // true:スタティックムーブ false:ダイナミックムーブ
    // ダイナミックムーブ時の減衰定数
    trackball.dynamicDampingFactor = 0.3;
    
    
    //レンダラーをDOMに設置
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );
    
    //光源追加
    //白色光
    var directionalLight = new THREE.DirectionalLight( 0xffffff );
    //光源の位置
    directionalLight.position.set( 1.0, 1.0, 1.0 );
    scene.add( directionalLight );
    
    //物体追加
    //ジオメトリー(形状)作成 (横幅,高さ,奥行き)
    var geometry = new THREE.CubeGeometry( 30, 30, 30 );
    //マテリアル(表面素材)
    //色指定
    //var material = new THREE.MeshPhongMaterial( { color: 0xff0000 } );
    var texture = THREE.ImageUtils.loadTexture( 'images/crate.gif' );
    texture.anisotropy = renderer.getMaxAnisotropy();
    var material = new THREE.MeshBasicMaterial( { map: texture } );
    //mesh(物体)作成
    var mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );
    
    //表示
    renderer.render( scene, camera );
    

    ( function renderLoop () {
        //requestAnimationFrame(自分自身を呼び出し続ける=レンダリングを繰り返す)
        requestAnimationFrame( renderLoop );
        mesh.rotation.set(
            0,
            mesh.rotation.y + 0.01,
            mesh.rotation.z + 0.01
        )
        // トラックボールによるカメラのプロパティの更新
        trackball.update();
        renderer.render( scene, camera );
    } )();


};
 
window.addEventListener( 'DOMContentLoaded', main, false );