import { Redirect } from 'react-router';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';

import { getCourseNames, submitCourseReg } from '../api/studentAPI';

import '../styles/style.css'

const handleSubmit = (userID, selectedCourseNames, updater) => {
    console.log(`Registering ${selectedCourseNames}...`);
    submitCourseReg(userID, selectedCourseNames)
        .then(resp => {
            if (resp.success) {
                console.log(`Registered ${selectedCourseNames}!`);
                updater(true);
            } else {
                console.log('Registration error!');
            }
        });
}

const fetchCourses = (setCourseCheckboxes, selectedCourseNames, setSelectedCourseNames) => {
    getCourseNames()
        .then(res => {
            if (res.success) {
                console.log('SUCCESS')
                console.log(res.courseNames)
                setCourseCheckboxes(<CourseCheckboxes courseNames={res.courseNames} selectedCourseNames={selectedCourseNames} setSelectedCourseNames={setSelectedCourseNames}/>)
            }
            else {
                console.log("got here")
                setCourseCheckboxes(<div>There are no courses</div>)
            }
        })
}

const CourseCheckboxes = (props) => {
    const courses = props.courseNames;
    console.log(`Inside: ${courses}`);
    return (
        <>
            {
                courses.map((name) => {
                    return (
                        <div className="input-group input-group-lg">
                            <input type="checkbox" className="form-control" id={name} value={name} onChange={() => {
                                props.selectedCourseNames.has(name) ? props.selectedCourseNames.delete(name) : props.selectedCourseNames.add(name);
                                props.setSelectedCourseNames(props.selectedCourseNames);
                            }} />
                            <label className="input-group-addon" htmlFor={name}>{name}</label>
                        </div>
                    )
                })
            }
        </>
    );
}

function CourseRegister(props) {
    const [selectedCourseNames, setSelectedCourseNames] = useState(new Set());
    const [courseCheckboxes, setCourseCheckboxes] = useState(<></>);
    // eslint-disable-next-line no-unused-vars
    const [registered, setRegistered] = useState(false);

    useEffect(() => {
        fetchCourses(setCourseCheckboxes, selectedCourseNames, setSelectedCourseNames)
    }, [selectedCourseNames]);
    

    return !props.userID || registered ? (
        <Redirect to='/info' />
    ) : (
        <>
            <Helmet>
                <title>Lab 7 - Register Course</title>
            </Helmet>
            <div className="login">
                <div className="heading">
                    <h2>Choose course to register</h2>
                    <form onSubmit={(event) => { event.preventDefault(); handleSubmit(props.userID, selectedCourseNames, setRegistered) }}>
                        {courseCheckboxes}
                        <button type="submit" className="float">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CourseRegister;