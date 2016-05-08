<?php

/** 
 *@author TSLEFK
 *
 *role:toppage layout
 *call back to: index.php file
 *
 *this file is in div.container Tag
 *コンテナークラスタグ内のタグ、indexのメインコンテンツ記述
 ***/
?>
<div id="main_canvas">
    <canvas></canvas>
</div>
<div id="menus">
    <div id="objects">
        <div id="add_obj_menu">
            <table class="table table-striped">
                <tr><th>Name</th><th>Age</th></tr>
                <tr><td>Yamada</td><td>16</td></tr>
                <tr><td>Suzuki</td><td>26</td></tr>
                <tr><td>Tanaka</td><td>36</td></tr>
            </table>
            <button class="btn btn-default">プレビュー</button>
        </div>
        <div id="obj_canvas">
            
        </div>
    </div>
    <div id="buttons">
        <button class="btn btn-default">反映</button>
        <button class="btn btn-default">インポート</button>
        <button class="btn btn-default">Default</button>
    </div>
</div>