module.exports =  function (source) {
    let src = JSON.parse(source);

    for (var pr in src) {
        (parseInt(pr, 10))? delete (src[pr]) : false;
    }

    return JSON.stringify(src);
}