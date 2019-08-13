/** @type {!Array} */
var _0x29a9 = ["0123456789abcdef", "", "charAt", "length", "charCodeAt", "What is the password", "aa42b234cb05915716c1434058fe1aee16c14340cb059157aa42b234", "submit as redpwnctf{PASSWORD}", ":("];
var hex_chr = _0x29a9[0];
/**
 * @param {number} num
 * @return {?}
 */
function rhex(num) {
  str = _0x29a9[1];
  /** @type {number} */
  j = 0;
  for (; j <= 3; j++) {
    str = str + (hex_chr[_0x29a9[2]](num >> j * 8 + 4 & 15) + hex_chr[_0x29a9[2]](num >> j * 8 & 15));
  }
  return str;
}
/**
 * @param {string} params
 * @return {?}
 */
function str2blks_MD5(params) {
  /** @type {number} */
  nblk = (params[_0x29a9[3]] + 8 >> 6) + 1;
  /** @type {!Array} */
  blks = new Array(nblk * 16);
  /** @type {number} */
  i = 0;
  for (; i < nblk * 16; i++) {
    /** @type {number} */
    blks[i] = 0;
  }
  /** @type {number} */
  i = 0;
  for (; i < params[_0x29a9[3]]; i++) {
    blks[i >> 2] |= params[_0x29a9[4]](i) << i % 4 * 8;
  }
  blks[i >> 2] |= 128 << i % 4 * 8;
  /** @type {number} */
  blks[nblk * 16 - 2] = params[_0x29a9[3]] * 8;
  return blks;
}
/**
 * @param {number} x
 * @param {number} y
 * @return {?}
 */
function add(x, y) {
  /** @type {number} */
  var uch = (x & 65535) + (y & 65535);
  /** @type {number} */
  var dwch = (x >> 16) + (y >> 16) + (uch >> 16);
  return dwch << 16 | uch & 65535;
}
/**
 * @param {number} num
 * @param {number} cnt
 * @return {?}
 */
function rol(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/**
 * @param {number} q
 * @param {number} a
 * @param {number} b
 * @param {number} x
 * @param {number} s
 * @param {number} t
 * @return {?}
 */
function cmn(q, a, b, x, s, t) {
  return add(rol(add(add(a, q), add(x, t)), s), b);
}
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @param {undefined} x
 * @param {number} s
 * @param {number} t
 * @return {?}
 */
function ff(a, b, c, d, x, s, t) {
  return cmn(b & c | ~b & d, a, b, x, s, t);
}
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @param {undefined} x
 * @param {number} s
 * @param {number} t
 * @return {?}
 */
function gg(a, b, c, d, x, s, t) {
  return cmn(b & d | c & ~d, a, b, x, s, t);
}
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @param {undefined} x
 * @param {number} s
 * @param {number} t
 * @return {?}
 */
function hh(a, b, c, d, x, s, t) {
  return cmn(b ^ c ^ d, a, b, x, s, t);
}
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @param {undefined} x
 * @param {number} s
 * @param {number} t
 * @return {?}
 */
function ii(a, b, c, d, x, s, t) {
  return cmn(c ^ (b | ~d), a, b, x, s, t);
}
/**
 * @param {string} str
 * @return {?}
 */
function calcMD5(str) {
  x = str2blks_MD5(str);
  /** @type {number} */
  a = 1732584193;
  /** @type {number} */
  b = -271733879;
  /** @type {number} */
  c = -1732584194;
  /** @type {number} */
  d = 271733878;
  /** @type {number} */
  i = 0;
  for (; i < x[_0x29a9[3]]; i = i + 16) {
    olda = a;
    oldb = b;
    oldc = c;
    oldd = d;
    a = ff(a, b, c, d, x[i + 0], 7, -680876936);
    d = ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = ff(c, d, a, b, x[i + 10], 17, -42063);
    b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = gg(b, c, d, a, x[i + 0], 20, -373897302);
    a = gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = hh(a, b, c, d, x[i + 5], 4, -378558);
    d = hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = hh(d, a, b, c, x[i + 0], 11, -358537222);
    c = hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = ii(a, b, c, d, x[i + 0], 6, -198630844);
    d = ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = add(a, olda);
    b = add(b, oldb);
    c = add(c, oldc);
    d = add(d, oldd);
  }
  return rhex(a) + rhex(b) + rhex(c) + rhex(d) + rhex(c) + rhex(b) + rhex(a);
}
;
