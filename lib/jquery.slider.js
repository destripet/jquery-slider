(function($){

  $.fn.slider = function(){

    return this.each(function(){

      var container  = $(this),
          slides     = $('> li', this),
          slideCount = slides.length;

      container.addClass('clearfix');
      container.wrap('<div class="slider"></div>');
      container.width(container.parent().width() * slideCount);
      slides.width(container.parent().width());

    });

    return this;

  };

}(jQuery));