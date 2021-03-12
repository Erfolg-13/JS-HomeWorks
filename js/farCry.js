$("h1").css("color", "white");
$("h1").css("font-weight", "400");

(function ($) {
    $(function () {
        $("ul.tabs-title-list").on("click", ".tab:not(.active)", function () {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.wrapper")
                .find("div.tab-body")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
        });
    });
})(jQuery);