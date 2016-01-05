Form = React.createClass({
  handleSubmit(event) {
    event.preventDefault();

    var url = ReactDOM.findDOMNode(this.refs.urlInput).value.trim();

    Projects.insert({
      url: url,
    });

    console.log(Projects);
  },

  render() {
    return (
      <div>
        <h2>Go Back</h2>
        <button>
          <a href="/">Go back</a>
        </button>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Project url</label>
            <input type='text' ref="urlInput"/>
            <button type="submit">enter</button>
          </form>
        </div>
      </div>
    )
  }
})
