var canvasFrame, scene, renderer;
var camera, trackball;
var object;

var main = function () {
    
    init();         // 基本的な設定を初期化
    init_camera();  // カメラを初期化
    init_object();  // オブジェクトを初期化
    animate();      // アニメーションを描画
};

function init() {
    // キャンバスフレームDOM要素の取得
    canvasFrame = document.getElementById('canvas_frame');
    // レンダラーを作成
    renderer = new THREE.WebGLRenderer();
    // canvas要素のサイズを設定
    renderer.setSize( window.innerWidth, window.innerHeight );
    // 背景色を設定
    renderer.setClearColor(0xEEEEEE, 1.0);
    // body要素にcanvas要素を追加
    document.body.appendChild( renderer.domElement );
    // シーンの作成
    scene = new THREE.Scene();
    // ウインドウサイズが変更された際のイベントを登録
    window.addEventListener( 'resize', onWindowResize, false );
}

function init_camera(){
    // カメラを作成
    camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 1000 );
    // カメラの位置を設定
    camera.position.set(100,100,100);
    // カメラの向きを設定
    camera.lookAt( {x: 0, y: 0, z: 0} );

    // トラックボールの作成
    trackball = new THREE.TrackballControls( camera );
    // 回転無効化と回転速度の設定
    trackball.noRotate = false; // false:有効 true:無効
    trackball.rotateSpeed = 1.0;
    // ズーム無効化とズーム速度の設定
    trackball.noZoom = false; // false:有効 true:無効
    trackball.zoomSpeed = 1.0;
    // パン無効化とパン速度の設定
    trackball.noPan = false; // false:有効 true:無効
    trackball.panSpeed = 1.0;
    // スタティックムーブの有効化
    trackball.staticMoving = true; // true:スタティックムーブ false:ダイナミックムーブ
    // ダイナミックムーブ時の減衰定数
    trackball.dynamicDampingFactor = 0.3;

}

function init_object(){
    // 立方体の作成
    var geometry = new THREE.BoxGeometry( 50, 50, 50 );
    // テクスチャの作成
    var texture = THREE.ImageUtils.loadTexture( 'textures/crate.gif' );
    texture.anisotropy = renderer.getMaxAnisotropy();
    // マテリアルオブジェクトを作成
    var material = new THREE.MeshBasicMaterial( { map: texture } );
    // オブジェクトを作成
    object = new THREE.Mesh( geometry, material );
    // シーンにオブジェクトを追加
    scene.add( object );
}

function onWindowResize() {
    // アスペクト比を設定
    camera.aspect = window.innerWidth / window.innerHeight;
    // カメラの設定を更新
    camera.updateProjectionMatrix();
    // canvas要素のサイズを設定
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {
    // アニメーション
    requestAnimationFrame( animate );
    // トラックボールによるカメラのプロパティの更新
    trackball.update();
    // レンダリング
    renderer.render( scene, camera );
}

window.addEventListener( 'DOMContentLoaded', main, false );