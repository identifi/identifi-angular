const constraints = {
    video: true
}

var recordedChunks = [];
let mediaRecorder;
var speechDetected = true;

function isRecording() {
    if (mediaRecorder && mediaRecorder.state == "recording") {
        return true;
    } else {
        false;
    }
}

function pauseRecording() {
    stopWorker();
    mediaRecorder.stop();
}

function captureScreen(stream) {
    console.log("Capture");
    if (!mediaRecorder || mediaRecorder.state == "inactive") {
        recordStream(stream);
        if (SPEECH_DETECTION_ENABLED) {
            attachSpeechDetection(stream);
        }
    } else {
        stopWorker()
        mediaRecorder.stop();
    }
}

function recordStream(stream) {
    var options = {
        mimeType: MIMETYPE,
        audioBitsPerSecond : 6000,
        videoBitsPerSecond : 100000
    }
    mediaRecorder = new MediaRecorder(stream, options);
    mediaRecorder.ondataavailable = onDataAvailable;

    mediaRecorder.start(RECORD_TIME);
    startWorker();
    console.log("Media recorder initiated");
    // setInterval(myTimer, RECORD_TIME);
}

function myTimer() {
    if (mediaRecorder) {
        mediaRecorder.requestData()
    }
}

function startWorker() {
    if (typeof (Worker) !== "undefined") {
        if (typeof (w) == "undefined") {
            w = new Worker("js/parser_worker.js");
        }
        w.onmessage = e => {
            const message = e.data;
            writeToGun(message);
        };
    } else {
        console.log("Sorry! No Web Worker support.");
    }
}

function stopWorker() {
    w.terminate();
    w = undefined;
}

function onDataAvailable(blobEvent) {
    // console.log("Received data " + formatBytes(blobEvent.data.size));
    // addToAllRecordedChunks(blobEvent.data);
    if (blobEvent.data && blobEvent.data.size) {
        // useBlob(blobEvent.data);
        useString(blobEvent.data);
    } else {
        console.log("SKIP NO DATA?");
    }
}

function useBlob(blob) {
    onBlob(blob);
}

function useString(blob) {
    var response = new Response(blob).arrayBuffer().then(function (arrayBuffer) {
        blob = null;
        if (LOCAL) {
            // onString(base64String);
        } else {
            if (w != undefined) {
                w.postMessage(arrayBuffer);
            }
            // parseSelf(arrayBuffer);
            // var data = new Uint8Array(arrayBuffer)
            // window.cl.write(data);
            // data = null;
            // arrayBuffer = null;
        }
    });
    response = null;
}

// function useString(blob) {
//     var url = URL.createObjectURL(blob);
//     fetch(url).then(function (response) {
//         URL.revokeObjectURL(url);
//         return response.arrayBuffer();
//     }).then(function (arrayBuffer) {
//         // var base64String = btoa(
//         //     new Uint8Array(arrayBuffer)
//         //         .reduce((onData, byte) => onData + String.fromCharCode(byte), '')
//         // );
//         // console.log(buf2hex(arrayBuffer));
//         // console.log(Utf8ArrayToStr(new Uint8Array(arrayBuffer)));
//         if (LOCAL) {
//             // onString(base64String);
//         } else {
//             window.cl.write(new Uint8Array(arrayBuffer));
//             // writeToGun(base64String);
//         }
//         base64String = null;
//     });
// }

function Utf8ArrayToStr(array) {
    var out, i, len, c;
    var char2, char3;

    out = "";
    len = array.length;
    i = 0;
    while (i < len) {
        c = array[i++];
        switch (c >> 4) {
            case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
                // 0xxxxxxx
                out += String.fromCharCode(c);
                break;
            case 12: case 13:
                // 110x xxxx   10xx xxxx
                char2 = array[i++];
                out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
                break;
            case 14:
                // 1110 xxxx  10xx xxxx  10xx xxxx
                char2 = array[i++];
                char3 = array[i++];
                out += String.fromCharCode(((c & 0x0F) << 12) |
                    ((char2 & 0x3F) << 6) |
                    ((char3 & 0x3F) << 0));
                break;
        }
    }
    return out;
}

function buf2hex(buffer) { // buffer is an ArrayBuffer
    return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
}

let initialData;
function writeToGun(base64data) {
    console.log("Write to GUN::" + base64data.substring(0, 100));
    let lastUpdate = new Date().getTime();
    let user;
    if (initialData == undefined && base64data.startsWith(RECORD_PREFIX)) {
        console.log("INITIAL");
        var n = base64data.indexOf("wIEB");
        console.log("RAW::" + n + "::" + base64data.substring(0, 252));
        initialData = base64data.substring(0, 252);
    } else {
        var n = base64data.indexOf("H0O2dQH");
        console.log("RAW::" + n + "::" + base64data);
    }

    user = gunDB.get(streamId).put({ initial: initialData, name: base64data, id: streamId, timestamp: lastUpdate, isSpeaking: speechDetected }, ACK);
    gunDB.get(DB_RECORD).set(user);
}

function addToAllRecordedChunks(chunk) {
    recordedChunks.push(chunk);
    var superBuffer = new Blob(recordedChunks);
    console.log("Total data size " + formatBytes(superBuffer.size));
}

function formatBytes(bytes) {
    if (bytes < 1024) return bytes + " Bytes";
    else if (bytes < 1048576) return (bytes / 1024).toFixed(3) + " KB";
    else if (bytes < 1073741824) return (bytes / 1048576).toFixed(3) + " MB";
    else return (bytes / 1073741824).toFixed(3) + " GB";
};

function attachSpeechDetection(stream) {
    var options = {};
    var speechEvents = hark(stream, options);

    speechEvents.on('speaking', function () {
        if (SPEECH_DETECTION_ENABLED) {
            speechDetected = true;
            console.log('speaking');
        }
    });

    speechEvents.on('stopped_speaking', function () {
        if (SPEECH_DETECTION_ENABLED) {
            console.log('stopped_speaking');
            speechDetected = false;
        }
    });

}
