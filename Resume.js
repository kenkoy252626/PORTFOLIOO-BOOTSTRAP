function showDiv(divId) {

    document.querySelectorAll('.container-fluid').forEach(function(el) {
        el.style.display = 'none';
    });

    document.getElementById(divId).style.display = 'block';
}