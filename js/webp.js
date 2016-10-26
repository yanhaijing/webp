var Promise = ES6Promise.Promise;

// check_webp_feature:
// 'feature' can be one of 'lossy', 'lossless', 'alpha' or 'animation'.
// 'callback(feature, result)' will be passed back the detection result (in an asynchronous way!)
function checkFeature(feature, callback) {
    callback = typeof callback === 'function' ? callback : function () {};
    return new Promise(function (resolve, reject) {
        var kTestImages = {
            lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
            lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
            alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
            animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
        };

        var img = new Image();
        img.onload = function () {
            var result = (img.width > 0) && (img.height > 0);
            callback(result);
            resolve(result);
        };
        img.onerror = function () {
            callback(false);
            resolve(false);
        };
        img.src = "data:image/webp;base64," + kTestImages[feature];
    });
}
