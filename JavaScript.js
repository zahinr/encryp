function Encryptedcode () {
    var  peace = prompt ("Ready!! time to encode!!")
    var replace1 = peace.replace(/f/g,"Fenrir");
    var replace2 = replace1.replace(/k/g,"Kraken");
    var replace3 = replace2.replace(/l/g,"Linedworm");
    var replace4 = replace3.replace(/o/g,"Ogre");
    var replace5 = replace4.replace(/p/g,"Pegasus");
    var replace6 = replace5.replace(/t/g,"Trolls");
document.getElementById("codedmessage").innerHTML = replace6;
}
function Decrytedcoded (){
var out = prompt ("Ready to decode?? Letsssss goooo")
    var fly1 = out.replace(/Fenrir/g,"f");
    var fly2 = fly1.replace(/Kraken/g,"k");
    var fly3 = fly2.replace(/Ogre/g,"o");
    var fly4 = fly3.replace(/Pegasus/g,"p");
    var fly5 = fly4.replace(/Trolls/g,"t");
    var fly6 = fly5.replace(/Linedworm/g,"l")
document.getElementById("uncodedmessage").innerHTML = fly6;
}