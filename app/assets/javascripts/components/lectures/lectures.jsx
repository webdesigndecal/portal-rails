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
    console.log(this.state)
    var lectures = this.state.lectures.map(function(lecture) {
      return (
        <Lecture lecture  = {lecture}
               key        = {lecture["id"]} 
               assignment = {lecture.assignment} />
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
      )
    }
    return (
      <div>
        {page}
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
    let assignmentName;
    if (this.props.lecture.assignment) {
      assignmentName = (
          <a className="btn btn--blue" href={'/assignments/' + this.props.lecture.assignment.id}>
            View Assignment
          </a>
        )
    } else {
      assignmentName = <p>No assignment</p>
    }

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
          { assignmentName }
        </td>
      </tr>
    );
  }
}

Lecture.propTypes = { lecture: React.PropTypes.object.isRequired };
