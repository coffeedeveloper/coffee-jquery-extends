$.fn.binds = function (obj) {
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
};

$.fn.serializeObject = function () {
  var obj = {};
  var arr = this.serializeArray();
  $.each(arr, function () {
    var name = this.name,
        value = this.value || '';
    if (name in obj) {
      if(!('push' in obj[name]) || typeof obj[name].push !== 'function') {
        obj[name] = [obj[name]];
      }
      obj[name].push(value);
    } else {
      obj[name] = value;
    }
  });
  return obj;
};
