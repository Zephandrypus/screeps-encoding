ArrayBuffer.prototype.encodeToString = function() {
    var view = new Uint16Array(this);
    var str = '';
    for (var i = 0; i < view.length; i++) {
        str += String.fromCharCode(view[i]);
    }
    return str;
}

String.prototype.toBuffer = function() {
    var buffer = new ArrayBuffer(this.length * 2);
    var view = new Uint16Array(buffer);
    for (var i = 0, strLen = this.length; i < strLen; i++) {
        view[i] = this.charCodeAt(i);
    }
    return buffer;
}
