var projects = [
  {title: 'Playing with virtualization', link:'virtualizationPlayground.html'},
  {title: 'MICS Robotics (2014)', link:'mics2014.html'},
  {title: 'MICS Robotics (2015)', link:'mics2015.html'},
  {title: 'URSA Major', link: 'ursaMajor.html'},
  {title: 'Software Dev. Support', link: 'softwareDevSetup.html'}
];

// default project, and var to keep track of current project.
var currentProject = 'virtualizationPlayground';

var navHtml = "";

$.each(projects, function(index, value){
  var newItem = "<li><button id=\"" + value.link.split(".")[0] + "\" class=active-false>" + value.title + "</button></li>";
  navHtml += newItem;
});

function projectCallback( project ){
  return function(){
    $('#activeProject').load(project);
    $('#' + currentProject).attr('class', 'active-false');
    $('#' + project.split(".")[0]).attr('class', 'active-true');
    currentProject = project.split(".")[0];
  }
}

$(document).ready(function(){
  $("#projectList").html(navHtml);
  // Activate the first project by default
  // TODO: This is a bit messy, and I should clean it up later.
  $('#activeProject').load(currentProject + ".html");
  $('#' + currentProject).attr('class', 'active-true');

  $.each(projects, function(index, value){
      $('#' + value.link.split(".")[0]).click( projectCallback(value.link) );
  });
});
