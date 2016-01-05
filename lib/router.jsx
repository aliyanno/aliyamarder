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

FlowRouter.route('/add-project', {
  action() {
    ReactLayout.render(App, {content: <Form />});
  }
});
