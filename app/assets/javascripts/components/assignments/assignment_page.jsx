/**
 * @prop assignment - the info about this assignment
 */
class AssignmentPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            assignment: []
        };
    }

    componentDidMount() {
        this.fetchAssignment();
    }

    fetchAssignment() {
        const success = (data) => { this.setState({ assignment: data, isLoading: false }); }
        APIRequester.getJSON(APIConstants.assignments.member(this.props.assignment.id), success);
    }

    render() {
        let page;
        if (this.state.isLoading) {
            page = (
                <div className="spinner-container"></div>
            )
        } else {
            page = (
                <div>
                    <p>
                        <strong>Name: </strong>
                        {this.state.assignment.name}
                    </p>
                    <p>
                        <strong>Points: </strong>
                        {this.state.assignment.points}
                    </p>
                    <p>
                        <strong>Due date: </strong>
                        {this.state.assignment.due_date}
                    </p>
                    <p>
                        <strong>Semester: </strong>
                        {this.state.assignment.semester}
                    </p>
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

AssignmentPage.propTypes = { assignment: React.PropTypes.object.isRequired };
