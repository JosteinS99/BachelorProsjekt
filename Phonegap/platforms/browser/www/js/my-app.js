// Initialize your app
var myApp = new Framework7({
   modalTitle: 'My app',
   
   pushState: true,
   material: true,

   onAjaxStart: function(xhr) {
    myApp.showIndicators();
   },
   onAjaxComplete:function (xhr) {
       myApp.hideIndicator();
   }       
  
});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
   domCache:true,
})






$$(document).on('pageInit', function(e){
  //do something here when page loaded and initialized
var page = e.detail.page;
if (page.name === 'index') {
  //showpop
    $$( "#showPop" ).click(function() {
     mainView.router.loadContent($$('#ourNewPage').html());
    });
  }
});

// $$(document).on('pageInit','.page[data-page="about"]', function(e){
//     //do anything
//         alert("do something");

// });

// $$(document).on('onPageInit'), function(e){
//     //do anything

// };



// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}