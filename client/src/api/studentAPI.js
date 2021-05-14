import { get, post } from 'axios';

const url = 'localhost:4000';

// DISCLAIMER: None of the below api calls nor the api endpoints' design
// are secure in anyway. Time is of the essence in this case, not security.

export const submitLogin = async (username, password) => {
    const res = {
        success: false,
        userID: ''
    }
    const body = {
        Username: username,
        Password: password
    }

    try {
        let resp = await post(url + '/login', body);
        res.success = true;
        res.userID = resp.data.UserID;
        // res.success = true;
        // res.userID = 1234;
        return res;
    } catch (err) {
        console.log(err);
    }
    return res;
}

export const submitCourseReg = async (userID, courseNames) => {
    const res =  {
        success: false
    }
    
    const body = {
        userID: userID,
        courseNames: courseNames
    }
    
    try {
        await post(url + '/users/registerCourse', body);
        res.success = true;
        return res;
    } catch (err) {
        console.log(err);
    }
    return res;
}

export const getStudentInfo = async (userID) => {
    const res = {
        success: false,
        studentName: '',
        registeredCourses: []
    }
    
    const params = {
        userID: userID
    }
    
    try {
        let resp = await get(url + '/users/info', {params});
        res.success = true;
        res.studentName = resp.data.studentName;
        res.registeredCourses = resp.data.registeredCourses;
        // res.studentName = 'haha'
        // res.registeredCourses = ['asdf', 'asasddf']
        return res;
    } catch (err) {
        console.log(err);
    }
    return res;
}

export const getCourseNames = async () => {
    const res = {
        success: false,
        courseNames: []
    }

    try {
        let resp = await get(url + '/courses');
        res.success = true;
        res.courseNames = resp.data.courseNames;
        // res.success = true;
        // res.courseNames = ['test1', 'test2', 'test3']
        return res;
    } catch (err) {
        console.log(err);
    }
    return res;
}