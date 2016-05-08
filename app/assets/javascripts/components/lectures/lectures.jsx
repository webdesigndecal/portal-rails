/**
 * @prop lectures - the list of lectures
 */
var Lectures = React.createClass({
    getInitialState: function() {
        return {
            lectures: this.props.lectures,
        };
    },
    render: function() {
        var lectures = this.state.lectures.map(function(lecture) {
            return (
                <Lecture lecture  = {lecture}
                           key        = {lecture["id"]} />
            );
        });
        return (
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
        );
    }
});

/**
 * @prop lecture - the info about this lecture
 */
var Lecture = React.createClass({

    handleRowClick(e) {
       window.location.href = `/assignments/${this.props.lecture.assignment.id}`;
    },

    render: function() {
        return (
            <tr >
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
                    { this.props.lecture.semester }
                </td>
            </tr>
        );
    }
});