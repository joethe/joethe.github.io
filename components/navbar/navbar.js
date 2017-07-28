var navItems = [
  {title: 'Home', link:'index.html'},
  {title: 'Projects', link:'projects.html'},
  {title: 'Contact', link:'contact.html'}
];

var navHtml = "";

$.each(navItems, function(index, value){
  var newItem = "<li><a href=\""+ value.link + "\">" + value.title + "</a></li>";
  navHtml += newItem;
});

$("#navList").html(navHtml);
