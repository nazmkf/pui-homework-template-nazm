


// import user from "./recipes/recipe1.json" assert { type: 'json' };

// $("#flipbook").bind("zooming", function(event,  newZoomValue, currentZoomValue) {
//     alert("New zoom: "+currentZoomValue);
//   });

//  import $ from 'jquery';
//  import 'turn.js';


$('#flipbook').turn({
  width: 600,
  height: 400,
  page: 1,
  // autoCenter: true,
  duration: 2000
})






// flipbook.bind(($.isTouch) ? 'touchend' : 'click', zoomHandle);

// flipbook.turn({
//     elevation: 50,
//     acceleration: !isChrome(),
//     autoCenter: true,
//     gradients: true,
//     duration: 1000,
//     pages: 112,
//     when: {
//         turning: function(e, page, view) {
            
//             var book = $(this),
//                 currentPage = book.turn('page'),
//                 pages = book.turn('pages');

//             if (currentPage>3 && currentPage<pages-3) {
            
//                 if (page==1) {
//                     book.turn('page', 2).turn('stop').turn('page', page);
//                     e.preventDefault();
//                     return;
//                 } else if (page==pages) {
//                     book.turn('page', pages-1).turn('stop').turn('page', page);
//                     e.preventDefault();
//                     return;
//                 }
//             } else if (page>3 && page<pages-3) {
//                 if (currentPage==1) {
//                     book.turn('page', 2).turn('stop').turn('page', page);
//                     e.preventDefault();
//                     return;
//                 } else if (currentPage==pages) {
//                     book.turn('page', pages-1).turn('stop').turn('page', page);
//                     e.preventDefault();
//                     return;
//                 }
//             }

//             updateDepth(book, page);
            
//             if (page>=2)
//                 $('.sj-book .p2').addClass('fixed');
//             else
//                 $('.sj-book .p2').removeClass('fixed');

//             if (page<book.turn('pages'))
//                 $('.sj-book .p111').addClass('fixed');
//             else
//                 $('.sj-book .p111').removeClass('fixed');

//             Hash.go('page/'+page).update();
                
//         },

//         turned: function(e, page, view) {

//             var book = $(this);

//             if (page==2 || page==3) {
//                 book.turn('peel', 'br');
//             }

//             updateDepth(book);
            
//             $('#slider').slider('value', getViewNumber(book, page));

//             book.turn('center');

//         },

//         start: function(e, pageObj) {
    
//             moveBar(true);

//         },

//         end: function(e, pageObj) {
        
//             var book = $(this);

//             updateDepth(book);

//             setTimeout(function() {
                
//                 $('#slider').slider('value', getViewNumber(book));

//             }, 1);

//             moveBar(false);

//         },

//         missing: function (e, pages) {

//             for (var i = 0; i < pages.length; i++) {
//                 addPage(pages[i], $(this));
//             }

//         }
//     }
// });

