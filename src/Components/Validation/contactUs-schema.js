import * as Yup from "yup";
import {onlyLetters,
} from "./regex";


export default Yup.object({
    firstName: Yup.string()
    .required('Please enter a valid question')
    .matches(onlyLetters, 'The value must be a text'),

    lastName: Yup.string()
    .required('Please enter a valid question')
    .matches(onlyLetters, 'The value must be a text'),

    gender: 
    Yup.string()
    .required('Please enter a valid gender').nullable(),

    email: Yup.string()
    .trim()
    .required("Please enter a valid email address")
    .email("Please enter a valid email address"),

    message: Yup.string()
    .required('Please enter a valid question')
    .matches(onlyLetters, 'The value must be a text'),
    
    
    // .typeError('The value must be a text'),

})