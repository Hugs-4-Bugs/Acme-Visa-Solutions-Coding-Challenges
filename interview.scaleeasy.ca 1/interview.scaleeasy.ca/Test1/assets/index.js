document.addEventListener("DOMContentLoaded", function() {
    begin();
    executeSequence();
});

function begin(){
    console.log('%cHey there stranger! This is not one of your typical interview tests. I have hidden a message for you on this page & your task is to find it. The hidden message is a full sentence and not just a single word', 'color: yellow; font-size: 20px; font-weight: bold; background-color: black; padding: 10px;');
}

function executeSequence() {
    var keys = ['\x77\x69\x6E\x64\x6F\x77', '\x73\x65\x74\x49\x74\x65\x6D', '\x6C\x6F\x67'];
    var data = ['\x61\x70\x65', '\x72\x69', '\x73\x6F', '\x6C\x76\x65'];
    var construct = function (i, offset) {
        i = i - 0x0;
        return data[i];
    };
    var secretData = construct('0x0') + construct('0x1') + construct('0x2') + construct('0x3');

    window['\x6C\x6F\x63\x61\x6C\x53\x74\x6F\x72\x61\x67\x65'][keys[1]]('\x73\x74\x6F\x72\x65\x64\x56\x61\x6C\x75\x65', secretData);
}