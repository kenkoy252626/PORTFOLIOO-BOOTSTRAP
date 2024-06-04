function showDiv(divId) {

    document.querySelectorAll('.container').forEach(function(el) {
        el.style.display = 'none';
    });

    document.getElementById(divId).style.display = 'block';
}