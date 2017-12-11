// cookie 操作工具
var CookieUtil = {
  get: function (name) {
    var cookieName = encodeURIComponent(name)+'=',
    cookieStart = document.cookie.indexOf(cookieName),
    cookieValue = null;

    if (cookieStart > -1) {
      var cookieEnd = document.cookie.indexOf(';',cookieStart);
      if (cookieEnd == -1) {
        cookieEnd = document.cookie.length;
      }
      cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
    }
    return cookieValue;
  },
  set: function (name, value, expires, path, domain, secure) {
    var cookieText = encodeURIComponent(name) + '=' +encodeURIComponent(value);
    console.log('test');
    if (expires instanceof Date) {
      cookieText += '; expires=' + expires.toGMTString();
    }
    if (path) {
      cookieText += '; path=' + path;
    }
    if (domain) {
      cookieText += '; domain=' + domain;
    }
    if (secure) {
      cookieText += '; secure';
    }
    document.cookie = cookieText;
  },
  unset: function (name, path, domain, secure) {
    this.set(name, '', new Date(0), path, domain, secure);
  }
};
function tablePaging (table_id, total_page, page_num, pre_id, next_id, first_id, last_id, page_size) {
  var theTable = document.getElementById(table_id);
  var totalPage = document.getElementById(total_page);
  var pageNum = document.getElementById(page_num);

  var spanPre = document.getElementById(pre_id);
  var spanNext = document.getElementById(next_id);
  var spanFirst = document.getElementById(first_id);
  var spanLast = document.getElementById(last_id);

  var numberRowsInTable = theTable.rows.length;
  var pageSize = page_size;
  var page = 1;

  //下一页
  tablePaging.next = function(){
    tablePaging.hideTable();
    currentRow = pageSize * page;
    maxRow = currentRow + pageSize;
    if ( maxRow > numberRowsInTable ) maxRow = numberRowsInTable;
    for ( var i = currentRow; i< maxRow; i++ ){
      theTable.rows[i].style.display = '';
    }
    page++;
    if ( maxRow == numberRowsInTable ) { tablePaging.nextText(); tablePaging.lastText(); }
    tablePaging.showPage();
    tablePaging.preLink();
    tablePaging.firstLink();
  }

  //上一页
  tablePaging.pre = function(){
    tablePaging.hideTable();
    page--;
    currentRow = pageSize * page;
    maxRow = currentRow - pageSize;
    if ( currentRow > numberRowsInTable ) currentRow = numberRowsInTable;
    for ( var i = maxRow; i< currentRow; i++ ){
      theTable.rows[i].style.display = '';
    }
    if ( maxRow == 0 ){ tablePaging.preText(); tablePaging.firstText(); }
    tablePaging.showPage();
    tablePaging.nextLink();
    tablePaging.lastLink();
  }

  //首页
  tablePaging.first = function(){
    tablePaging.hideTable();
    page = 1;
    for ( var i = 0; i<pageSize; i++ ){
      theTable.rows[i].style.display = '';
    }
    tablePaging.showPage();
    tablePaging.preText();
    tablePaging.nextLink();
    tablePaging.lastLink();
    tablePaging.firstText();
  }

  //尾页
  tablePaging.last = function(){
    tablePaging.hideTable();
    page = tablePaging.pageCount();
    currentRow = pageSize * (page - 1);
    for ( var i = currentRow; i<numberRowsInTable; i++ ){
      theTable.rows[i].style.display = '';
    }
    tablePaging.showPage();
    tablePaging.preLink();
    tablePaging.nextText();
    tablePaging.firstLink();
    tablePaging.lastText();
  }

  tablePaging.hideTable = function(){
    for ( var i = 0; i<numberRowsInTable; i++ ){
      theTable.rows[i].style.display = 'none';
    }
  }

  tablePaging.showPage = function(){
    pageNum.innerHTML = page;
  }

  //总共页数
  tablePaging.pageCount = function(){
    var count = 0;
    if ( numberRowsInTable%pageSize != 0 ) count = 1;
    return parseInt(numberRowsInTable/pageSize) + count;
  }

  //显示链接
  tablePaging.preLink = function(){ spanPre.innerHTML = "<a href='javascript:tablePaging.pre();'>上一页</a>"; }
  tablePaging.preText = function(){ spanPre.innerHTML = "上一页"; }
  tablePaging.nextLink = function(){ spanNext.innerHTML = "<a href='javascript:tablePaging.next();'>下一页</a>"; }
  tablePaging.nextText = function(){ spanNext.innerHTML = "下一页"; }
  tablePaging.firstLink = function(){ spanFirst.innerHTML = "<a href='javascript:tablePaging.first();'>首页</a>"; }
  tablePaging.firstText = function(){ spanFirst.innerHTML = "首页"; }
  tablePaging.lastLink = function(){ spanLast.innerHTML = "<a href='javascript:tablePaging.last();'>尾页</a>"; }
  tablePaging.lastText = function(){ spanLast.innerHTML = "尾页"; }

  //隐藏表格
  tablePaging.hide = function(){
    for ( var i = pageSize; i<numberRowsInTable; i++ ){
      theTable.rows[i].style.display = 'none';
    }
    totalPage.innerHTML = tablePaging.pageCount();
    pageNum.innerHTML = '1';
    tablePaging.nextLink();
    tablePaging.lastLink();
  }
  tablePaging.hide();
}
// 翻页工具