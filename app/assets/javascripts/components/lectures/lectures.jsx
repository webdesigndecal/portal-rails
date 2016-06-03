/**
 * @prop lectures - the list of lectures
 */
class Lectures extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      lectures: []
    };
  }

  componentDidMount() {
    this.fetchLectures();
  }

  fetchLectures() {
    const success = (data) => { this.setState({ lectures: data, isLoading: false }); }
    APIRequester.getJSON(APIConstants.lectures.collection, success);
  }

  render() {
    var lectures = this.state.lectures.map(function(lecture) {
      return (
        <Lecture lecture  = {lecture}
              key        = {lecture["id"]} assignment = {lecture.assignment} />
      );
    });

    let page;
    if (this.state.isLoading) {
      page = (
        <div className="spinner-container"></div>
      )
    } else {
      page = (
        <div className="row">
          <div className="col-md-8">
            <table className="table">
              <thead>
                <tr>
                  <th>Week</th>
                  <th>Date</th>
                  <th>Topic</th>
                  <th>Assignment</th>
                </tr>
              </thead>
              <tbody>
                {lectures}
              </tbody>
            </table>
          </div>
        </div>
      )
    }
    return (
      <div>
        {page}
        <button>Button</button>
        <button className="btn--blue">Button</button>
        <button className="btn--green">Button</button>
        <button className="btn--red">Button</button>
        <button className="btn--outline">Button</button>

        <button className="btn--green btn--sm">Button</button>
        <button className="btn--green btn--lg">Button</button>
        <br/>
        <div className="input-container" id="first-name">
          <input type="text" name="first-name" required/>
          <label for="first-name">First name</label>
        </div>
        <div className="input-container" id="last-name">
          <input type="text" name="last-name" required/>
          <label for="last-name">Last name</label>
        </div>
      </div>
    );
  }
}

/**
 * @prop lecture - the info about this lecture
 */
class Lecture extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>
          { this.props.lecture.week }
        </td>
        <td>
          { this.props.lecture.date }
        </td>
        <td>
          { this.props.lecture.topic }
        </td>
        <td>
          <a href={'/assignments/' + this.props.lecture.assignment.id}>
            { this.props.lecture.assignment.name }
          </a>
        </td>
      </tr>
    );
  }
}

Lecture.propTypes = { lecture: React.PropTypes.object.isRequired };
