Meteor.startup(function() {
  let rose = JSON.parse(Assets.getText('projects/chewse_dashboard/meta.json'));
  let companions = [rose];

  console.log(companions);

  _.each(companions, function(companion) {
    Projects.insert(companion);
  });

  console.log(Projects);
});
