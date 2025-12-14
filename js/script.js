$(function(){
// ヘッダーの高さ分だけコンテンツを下げる
// $(window).on('load resize', function(){
//   const height = $('#js-header').height();
//   $('main').css('margin-top', height);
// });

// ハンバーガーメニュー
const trigger = $('#js-openbtn');
const g_nav = $('#g-nav');
trigger.click(function () {
	$(this).toggleClass('active');
  g_nav.toggleClass('panelactive');
  $('body').toggleClass('fixed');
});
});