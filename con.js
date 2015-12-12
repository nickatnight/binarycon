// add a key press event to the search box (cant be done inline in manifest
// version 2)
document.getElementById("userInput").addEventListener("keypress", function() {
  getInput(event);
});

function getInput(e){

    // only run if the user presses the enter key
    if(e.keyCode == 13){
        // validate input

        var userIn = document.getElementById("userInput").value;
        var soul = document.getElementById("sel");
        var vally = soul.options[soul.selectedIndex].value;
        var outFormat;

        if(document.getElementById("decimal").checked) outFormat = 10;
        else if(document.getElementById("hexidecimal").checked) outFormat = 16;
        else outFormat = 2;

        converter(vally, outFormat, userIn);
    }
};

function converter(val, format, userIn){

    var o;
    if(val == 'hex' && format == 2) o = hexToBin(userIn);
    else if(val == 'hex' && format==10) o = hexToDec(userIn);
    else if(val == 'dec' && format==16) o = decToHex(userIn);
    else if(val == 'dec' && format == 2) o = decToBin(userIn);
    else if(val == 'bin' && format == 10) o = binToDec(userIn);
    else if(val == 'bin' && format == 16) o = binToHex(userIn);

    document.getElementById("results").innerHTML = o;
};

function hexToDec(h){
    return parseInt(h, 16);
};

function decToHex(d){
    return parseInt(d,10).toString(16);
};

function hexToBin(h){
    return parseInt(h,16).toString(2);
};

function decToBin(d){
    return parseInt(d,10).toString(2);
};

function binToHex(b){
    return parseInt(b,2).toString(16);
};

function binToDec(b){
    return parseInt(b,2).toString(10);
};
