Projects = new Mongo.Collection("projects");
// project collection of names and ids
//

if (Meteor.isClient) {
  Meteor.startup(function () {
    // code to run on client at startup
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    // check all the projects in server/projects
    // if a project id is not in the collection Projects, insert it in
  });

  // if received a call for home data, return home collection
  // if received a call for project data, return project data according to id and server file structure
}
