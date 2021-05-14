import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { getStudentInfo } from "../api/studentAPI";

const fetchUserInfo = (userID, setStudentName, setRegCourses) => {
    getStudentInfo(userID)
        .then(res => {
            if (res.success) {
                setStudentName(res.studentName);
                setRegCourses(res.registeredCourses);
            }
        })
}


function UserInfo(props) {
    const [studentName, setStudentName] = useState('');
    const [regCourses, setRegCourses] = useState([]);

    useEffect(() => {
        fetchUserInfo(props.userID, setStudentName, setRegCourses);
    }, [props.userID])

    return (
        <>
            <Helmet>
                <title>Lab 7 - User Info</title>
            </Helmet>
            <div className='login'>
                <div className='heading'>
                    <h2>Student name: {studentName}</h2>
                    <h2>Registered Courses:</h2>
                    {
                        regCourses.map(name => {
                            return (
                                <div>
                                    <h3>{name}</h3>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default UserInfo;