$(document).ready(function() {
    $('.mg-product-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        appendArrows: ('.mg-btn'),
        prevArrow: '<button type="button" class="slick-prev mg-pro-sider-btn"><img src="assets/images/icons/left-arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next mg-pro-sider-btn"><img src="assets/images/icons/right-arrow-2.png"></button>',
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }]
    });

    /*************************/
    /*
     * Quantity counter
     */
    $('.mg-qty-plus-btn').click(function(e) {
        e.preventDefault();
        var quantity = parseInt($(this).parents(".mg-quanitity-option-section").find('.mg-qty-number').val());
        $(this).parents(".mg-quanitity-option-section").find('.mg-qty-number').val(quantity + 1);
    });

    $('.mg-qty-minus-btn').click(function(e) {
        e.preventDefault();
        var quantity = parseInt($(this).parents(".mg-quanitity-option-section").find('.mg-qty-number').val());
        if (quantity > 1) {
            $(this).parents(".mg-quanitity-option-section").find('.mg-qty-number').val(quantity - 1);
        }
    });
    $('.mg-product-remove-btn').click(function(e) {
        e.preventDefault();
        $(this).parents(".mg-product-main").fadeOut('slow', function() {
            $(this).parents(".mg-product-main").remove();
        });
    });
    /*************************/
    var dropdown = document.getElementsByClassName("dropdown-item");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }
    /*************************/
});
/*************************/
/*Quantity counter
 */

/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */

/***********hide/show password**************/
function showhide() {
    var x = document.getElementById("mg-password-input");
    var y = document.getElementById("mg-eye-1");
    var z = document.getElementById("mg-eye-2");

    if (x.type === 'password') {
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    } else {
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}

/*************************/

/********applying coupan section*****************/

function ShowAndHide() {
    var x = document.getElementById('mg-coupan-section');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
/*************************/