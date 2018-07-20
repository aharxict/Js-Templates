$('.et_pb_row').each(function() {
      var $self = $(this);

      if ($self.find('> .et_pb_column').length === 2 && $self.find('> .et_pb_column img').length > 0) {
        $self.addClass("two-col-group");
      }
          
    });
    
    var columnDetect = function (selector) {
      selector.each(function() {
        var self = $(this);

        if (self.find('> div:first-child .et_pb_image_wrap img').length) {
          self.addClass('ks-row ks-row-first-img');
        } else {
          self.addClass('ks-row ks-row-last-img');
        }
      });
    };
    
    setTimeout(function() {
      columnDetect($('.et_pb_row.two-col-group'));
    }, 100);