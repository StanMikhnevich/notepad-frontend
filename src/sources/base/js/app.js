require('./angular-1/angular-app');

window.noteDropdown = false;
$(document).on('click', function () {
    if(!window.noteDropdown) $('.note-dropdown').addClass('invisible');
    window.noteDropdown = false;
});

$('[data-fancybox]').fancybox({
    toolbar  : false,
    smallBtn : true,
    iframe : {
        css : {
            width : '600px'
        }
    }
})