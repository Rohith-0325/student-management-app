function StudentProfile(props) {
    return (
        <div className="student-profile">
            <h2>{props.name}</h2>
            <p><b>Department:</b> {props.department}</p>
            <p><b>Year:</b> {props.year}</p>
        </div>
    );
}

export default StudentProfile;