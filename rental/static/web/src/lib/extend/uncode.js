layui.define(function (exports) {


  let uncode = (entity) => {
    var div = document.createElement('div');
    div.innerHTML = entity;
    var res = div.innerText || div.textContent;
    return res;
  }

  // let uncode = (str) => {
  //   var s = "";
  //   if (str.length == 0) return "";
  //   s = str.replace(/&amp;/g, "&");
  //   s = s.replace(/&lt;/g, "<");
  //   s = s.replace(/&gt;/g, ">");
  //   s = s.replace(/&nbsp;/g, " ");
  //   s = s.replace(/&#39;/g, "\'");
  //   s = s.replace(/&quot;/g, "\"");
  //   return s;
  // }

  exports('uncode', uncode);
});