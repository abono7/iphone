<script type="text/javascript">
<!--
var swidth = localStorage.getItem(saved);
if (swidth !== null) {
    swidth = swidth * 1;
    $("#intro").fadeOut(0);
    $(".comments").fadeOut(0);
    $("#share").fadeIn(0);
    $("#percentage2").text(width + "%");
    // إعادة التوجيه بعد فترة زمنية معينة، مثل 5000 مللي ثانية (5 ثوانٍ)
    setTimeout(function() {
        window.location.href = 'https://www.ylasot.com/'; // يرجى استبدال 'https://www.ylasot.com/' بالعنوان الذي ترغب في التوجيه إليه
    }, 5000);
} else {
    width = 0;
}
$("#whatsapp").click(function () {
    window.location.href = share + "https://www.ylasot.com/";
});
$("#offers").click(function () {
    window.open(cpa, "_blank");
});
$("#offerss").click(function () {
    window.open(cpa1, "_blank");
});
$("#offersss").click(function () {
    window.open(cpa2, "_blank");
});
function tipn() {
    Swal.fire({
        icon: 'error',
        title: 'Unfortunately...',
        text: 'To Receive Your Prize, You have to share with friends about our event. Share until the blue bar is full!',
    });
}
</script>
