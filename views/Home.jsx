Home = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.projects
  getMeteorData() {
    return {
      projects: Projects.find({}).fetch()
    }
  },

  renderProjects() {
    return this.data.projects.map((project) => {
      return <img src={project.url}/>
    })
  },

  render() {
    return (
      <div>
        <h2>Go to project</h2>
        { this.renderProjects() }
        <button>
          <a href="/project/1">Go to project page</a>
        </button>
      </div>
    )
  }
});
