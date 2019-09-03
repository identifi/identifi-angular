var allClusterHex = "";
var initSegment = "";

function hex2buf(hex) {
    return new Uint8Array(hex.match(/[\da-f]{2}/gi).map(function (h) {
        return parseInt(h, 16)
    })).buffer
}

function parseSelf(arrayBuffer) {

    var hex = buf2hex(arrayBuffer);
    var initSeg;

    // console.log("ALL::\n" + hex);

    var ebmlIndex = hex.indexOf("1a45dfa3");
    var clusterIndex = hex.indexOf("1f43b675");
    var trackIndex = hex.indexOf("1654ae6b");
    var cuesIndex = hex.indexOf("1c53bb6b");
    var segmentIndex = hex.indexOf("18538067");
    var infoIndex = hex.indexOf("1549a966");
    var seekIndex = hex.indexOf("114d9b74");


    if (ebmlIndex == -1 && clusterIndex == -1 && trackIndex == -1 && cuesIndex == -1 && segmentIndex == -1 && infoIndex == -1 && seekIndex == -1) {
        allClusterHex += hex;
        // console.log("OTHER START::\n" + hex.substr(0,1000));
        // console.log("OTHER END  ::\n" + hex.substr(hex.length-1000,hex.length));
    }


    if (ebmlIndex != -1) {
        // console.log("INIT::\n" + hex.substring(ebmlIndex, clusterIndex));
        initSeg = hex.substring(ebmlIndex, clusterIndex);
        var initArray = new Uint8Array(hex2buf(initSeg));
        var base64String = btoa(
            new Uint8Array(initArray)
                .reduce((onData, byte) => onData + String.fromCharCode(byte), '')
        );
        // console.log("INIT::\n" + initSeg);
        // console.log("INIT\n");
        console.log("OTHER START::\n" + initSeg.substr(0, 1000));
        console.log("OTHER END  ::\n" + initSeg.substr(initSeg.length - 1000, initSeg.length));
        writeToGun(base64String);
    }

    if (clusterIndex != -1) {
        console.log("Cluster index::" + clusterIndex);
        if (allClusterHex.length != 0) {
            // if (initSeg != undefined) {
            //     allClusterHex += initSeg;
            // }
            allClusterHex += hex.substring(0, clusterIndex);
            // console.log("SEND::\n" + allClusterHex.substr(0,100));
            // console.log("SEND::\n" + allClusterHex.substr(allClusterHex.length-100,allClusterHex.length));
            var clusters = new Uint8Array(hex2buf(allClusterHex));
            // console.log("OTHER START::\n" + allClusterHex.substr(0, 1000));
            // console.log("OTHER END  ::\n" + allClusterHex.substr(allClusterHex.length - 1000, allClusterHex.length));
            var base64String = btoa(clusters.reduce((onData, byte) => onData + String.fromCharCode(byte), ''))
            console.log("OTHER START::\n" + allClusterHex.substr(0, 1000));
            console.log("OTHER END  ::\n" + allClusterHex.substr(allClusterHex.length - 1000, allClusterHex.length));
            console.log("OTHER LENGT::\n" + allClusterHex.length)
            allClusterHex = "";
            writeToGun(base64String);
        }
        var cluster = hex.substring(clusterIndex, hex.length);
        var dataIndex = cluster.indexOf("a3");
        var clusterStartString = cluster.substring(0, dataIndex + 2);
        allClusterHex += cluster;
        // var chunk = initSeg + cluster;

        var timeCodeIndex = cluster.indexOf("e7");
        var simpleBlockIndex = cluster.indexOf("a3");
        var BlockDurationIndex = cluster.indexOf("9b");
        // console.log("timeCodeIndex\n" + cluster.substring(timeCodeIndex, timeCodeIndex + 6));
        // console.log("BlockDurationIndex\n" + cluster.substring(BlockDurationIndex, BlockDurationIndex + 8));
        // console.log("simpleBlockIndex\n" + cluster.substring(simpleBlockIndex, simpleBlockIndex + 6));

        // var base64String = btoa(new Uint8Array(hex2buf(cluster)).reduce((onData, byte) => onData + String.fromCharCode(byte), ''))
        // writeToGun(base64String);
        // console.log('CLUSTER::\n' + cluster);
        // console.log('CLUSTER::\n');
    }

    if (trackIndex != -1) {
        // console.log("TRACK\n");
    }

    if (cuesIndex != -1) {
        // console.log("CUES\n");
    }

    if (segmentIndex != -1) {
        // console.log("SEGMENT\n");
    }

    if (infoIndex != -1) {
        // console.log("INFO\n");
        var durationIndex = cluster.indexOf("4489");
        // console.log("durationIndex\n" + cluster.substring(durationIndex, durationIndex + 8));
    }

    if (seekIndex != -1) {
        // console.log("SEEK\n");
    }


}
