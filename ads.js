$(document).ready(function()
{
    console.log('jquery ready!');

	var popbox = `<div class="popbox hide" id="popbox"><div aria-label='Close' class="pop-overlay" role="button" tabindex="0"/><div class="pop-content"><div class="popcontent" align="center"> <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiA26U1gEIn5UlNRCpGK7xg2pyiLLNGfPHI4-SJgKs-bUPt81UCFyC_5TRPzauqZ2hcHEB5LBG8-C9SAGHtOFwUl2nQwVaM2ujHCSU9jceo5OVoPaMz7Z6U1sBEaOVeM1rgBtwiE_zrdfJ3-8uxd5g8xmxjBHN2ogZXk6RYo5IoQH7OM7GimNw_UpN1/w640-h192/shope%20mantul.jpg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" width="640" height="320" alt="" /> <button class='g_url btn btn-success btn-dwn m-2'>Confirm</button> <br/></div> <button class='g_url popbox-close-button'>&times;</button></div></div>`;

	$(document.body).append(popbox);

    if(['.google.', '.bing.', 'yandex.', 'facebook.', 'pinterest.','.yahoo.'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'twitter','yahoo'].some(s => navigator.userAgent.toLowerCase().includes(s)))
    {
		$(window).scroll(function (event) {
		    var scroll = $(window).scrollTop();
		    if (scroll >= 200) {
		        $('#popbox').removeClass('hide');
		    }
		    console.log('scroll..');                    
		});
    }

    $(document).on('click','.g_url',function(e)
    {
        e.preventDefault();            

        window.open(direct_link_ads,"_blank");
        window.location.href = go_current;
    });

});
