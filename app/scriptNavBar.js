$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('#menu').addClass('fixed-top');
        }else {
            $('#menu').removeClass('fixed-top');
        }

        // if (this.scrollY > 20) {
        //     $('.NavBarMobile').addClass('fixed-top');
        // }else {
        //     $('.NavBarMobile').removeClass('fixed-top');
        // }
    })
})
