FlowRouter.route('/', {
  action() {
    ReactLayout.render(App, {content: <Home />});
  }
});

FlowRouter.route('/project/:id', {
  action() {
    ReactLayout.render(App, {content: <Project />});
  }
});
