;(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(function($) {

  $.fn.binds = function(obj) {
    return this.each(function() {
      for (var event in obj) {
        if (typeof obj[event] === 'object') {
          for (var select in obj[event]) {
            if (select === 'self') {
              $(this).on(event, obj[event][select]);
            } else {
              $(this).on(event, select, obj[event][select]);
            }
          }
        } else {
          $(this).on(event, obj[event]);
        }
      }
    });
  };

  $.fn.serializeObject = function() {
    var obj = {};
    var arr = this.serializeArray();

    $.each(arr, function() {
      var name = this.name,
          value = this.value || '';
      if (name in obj) {
        if (!('push' in obj[name]) || typeof obj[name].push !== 'function') {
          obj[name] = [obj[name]];
        }

        obj[name].push(value);
      } else {
        obj[name] = value;
      }
    });

    return obj;
  };

  $.fn.hasAttr = function(attr) {
    var dom = $(this)[0];
    if ('hasAttribute' in dom) {
      return dom.hasAttribute[attr];
    } else {
      return dom.getAttribute(attr) != null;
    }
  };
}));
