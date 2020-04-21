$("head").append('<link rel="stylesheet" href="https://f.easyuploader.app/eu-prd/upload/20200422000357_6b7877554f6b616e5a54.css">')


play_setting()
function play_setting(){
//lyrics_array変数が読み込まれたとき
var set = setInterval(function(){
if(typeof lyrics_array !== 'undefined'){

//        $(".share").get(0).scrollIntoView(true)
//        scrollBy(0, -70);
$("[value=sub],[value=type_sound],[value=miss_sound],[value=clear_sound],[value=combo_break_sound]").prop('checked', false)
$("[value=next_lyric_hidden],[value=eng_highlight],[value=letter_scroll],[value=first_letterred],[value=kpm]").prop('checked', true);

clearInterval(set);
}
})
}


window.AudioContext = window.AudioContext || window.webkitAudioContext;
var key_type_unte = new AudioContext();
var miss_type_unte = new AudioContext();
var clear_type_unte = new AudioContext();

key_type_unte_load();
function key_type_unte_load(){
var request_key_type_unte = new XMLHttpRequest();
request_key_type_unte.open('GET', "https://f.easyuploader.app/eu-prd/upload/20200421223620_566e326870656f666745.mp3", true);
request_key_type_unte.responseType = 'arraybuffer';
request_key_type_unte.onload = function() {
        key_type_unte.decodeAudioData(request_key_type_unte.response, function(buffer) {
                audio_buffer_key_type_unte = buffer;
        }, function(){
                //エラー
        }
        );
};
request_key_type_unte.send();
}
function key_type_unte_play(){
var key_type_unte_gain = key_type_unte.createGain();
var key_type_unte_source = key_type_unte.createBufferSource();
key_type_unte_source.buffer = audio_buffer_key_type_unte;
key_type_unte_source.connect(key_type_unte_gain);
key_type_unte_gain.connect(key_type_unte.destination);
if (is_played && !finished && player.getPlayerState() == 1) {
if($("[value=Interlocking_volume]").prop("checked")){
if($('#volume').text()){
key_type_unte_gain.gain.value = ($('#volume').text()/100)
}}
    else{
key_type_unte_gain.gain.value = $('[name="effect_volume_type"]').val()/100
}}
key_type_unte_source.start(0);
}
miss_type_unte_load();
function miss_type_unte_load(){
var request_miss_type_unte = new XMLHttpRequest();
request_miss_type_unte.open('GET', "https://f.easyuploader.app/eu-prd/upload/20200421224159_4f4a374f63746f4b4a51.mp3", true);
request_miss_type_unte.responseType = 'arraybuffer';
request_miss_type_unte.onload = function() {
        miss_type_unte.decodeAudioData(request_miss_type_unte.response, function(buffer) {
                audio_buffer_miss_type_unte = buffer;
        }, function(){
                //エラー
        }
        );
};
request_miss_type_unte.send();
}
function miss_type_unte_play(){
var miss_type_unte_gain = miss_type_unte.createGain();
var miss_type_unte_source = miss_type_unte.createBufferSource();
miss_type_unte_source.buffer = audio_buffer_miss_type_unte;
miss_type_unte_source.connect(miss_type_unte_gain);
miss_type_unte_gain.connect(miss_type_unte.destination);
if (is_played && !finished && player.getPlayerState() == 1) {
if($("[value=Interlocking_volume]").prop("checked")){
if($('#volume').text()){
miss_type_unte_gain.gain.value = ($('#volume').text()/100)
}}
    else{
miss_type_unte_gain.gain.value = $('[name="effect_volume_type"]').val()/100
}}
miss_type_unte_source.start(0);
}
clear_type_unte_load();
function clear_type_unte_load(){
var request_clear_type_unte = new XMLHttpRequest();
request_clear_type_unte.open('GET', "https://f.easyuploader.app/eu-prd/upload/20200421224839_7846314b464c624d7034.mp3", true);
request_clear_type_unte.responseType = 'arraybuffer';
request_clear_type_unte.onload = function() {
        clear_type_unte.decodeAudioData(request_clear_type_unte.response, function(buffer) {
                audio_buffer_clear_type_unte = buffer;
        }, function(){
                //エラー
        }
        );
};
request_clear_type_unte.send();
}
function clear_type_unte_play(){
var clear_type_unte_gain = clear_type_unte.createGain();
var clear_type_unte_source = clear_type_unte.createBufferSource();
clear_type_unte_source.buffer = audio_buffer_clear_type_unte;
clear_type_unte_source.connect(clear_type_unte_gain);
clear_type_unte_gain.connect(clear_type_unte.destination);
if (is_played && !finished && player.getPlayerState() == 1) {
if($("[value=Interlocking_volume]").prop("checked")){
if($('#volume').text()){
clear_type_unte_gain.gain.value = ($('#volume').text()/100)
}}
    else{
clear_type_unte_gain.gain.value = $('[name="effect_volume_type"]').val()/100
}}
clear_type_unte_source.start(0);
}



function typesound_and_miss_effect_unte(){
if(next_char[0]){
if (combo && !completed){//combo継続中
if (!$("[value=type_sound]").prop("checked")) {//打鍵音
key_type_unte_play()}
}else if(miss_combo){//ミス継続中
if(!$("[value=miss_sound]").prop("checked")) {//ミス音
if(!combo100){//ミス音

miss_type_unte_play()
}
}
}
}else if(!next_char[0]){
}if(!line_clear && completed){//ラインクリア。フラグON
 if(!$("[value=clear_sound]").prop("checked")){//クリア音
clear_type_unte_play()}



}
}

$(window).keydown(function(e){

if(is_played && !finished){

if(player.getPlayerState() == 1){

    switch(e.keyCode){//Typing Tubeで有効なキーコード
case 32://Space
case 65://a
case 66://b
case 67://c
case 68://d
case 69://e
case 70://f
case 71://g
case 72://h
case 73://i
case 74://j
case 75://k
case 76://l
case 77://m
case 78://n
case 79://o
case 80://p
case 81://q
case 82://r
case 83://s
case 84://t
case 85://u
case 86://v
case 87://w
case 88://x
case 89://y
case 90://z
case 48://0
case 49://1
case 50://2
case 51://3
case 52://4
case 53://5
case 54://6
case 55://7
case 56://8
case 57://9
//case 187://+
case 188://,
case 189://-(chrome)
case 190://.
//case 222://^
case 191:///
case 219://[
case 173://-(firefox)
//case 160://^(firefox)
//case 59://+(firefox)
/*
//かな入力
case 33:
case 34:
case 35:
case 36:
case 37:
case 38:
case 39:
case 40:
case 41:
case 113://9
case 119://9
case 101://9
case 114://9
case 116://9
case 121://9
case 117://9
case 105://9
case 111://9
case 112://9
case 64://9
case 97://9
case 115://9
case 100://9
case 102://9
case 103://9
case 104://9
case 106://9
case 107://9
case 108://9
case 122://9
case 120://9
case 99://9
case 118://9
case 98://9
case 110://9
case 109://9://9
case 64://9
//かな入力ここまで
*/
typesound_and_miss_effect_unte()
}
}}
})
