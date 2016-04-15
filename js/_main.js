/* ==========================================================================
   Avoid 'console' errors in browsers that lack a console.
   ========================================================================== */
(function(){for(var a,b=function(){},c=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd",'timeline','timelineEnd',"timeStamp","trace","warn"],d=c.length,e=window.console=window.console||{};d--;)a=c[d],e[a]||(e[a]=b)})();


jQuery(document).ready(function($){

	// Menu plus icons
	$('.mainNavigation li ul').siblings('a').addClass('hasChildren').before('<a class="plus" href="#" />');
	$('.plus').on("click", function(e){
		var plus = $(this);
	    plus.toggleClass('plusOpen').siblings('ul').slideToggle('fast');
	    plus.parent('li').toggleClass('open');
	    e.preventDefault();
	});

    // Mobile menu toggle
    $('.menuToggle').on('click',function(e){
        $('.siteNavigation').slideToggle('fast');
        $(this).toggleClass('close');
        e.preventDefault();
    });

	// Open links with rel="external" in new window
    $('a[rel="external"]').on("click",function(e){
        window.open($(this).attr('href'));
        e.preventDefault();
    });

$("#gforms_reset_css-css").remove();
$("#gforms_formsmain_css-css").remove();
$("#gforms_ready_class_css-css").remove();
$("#gforms_browsers_css-css").remove();

});