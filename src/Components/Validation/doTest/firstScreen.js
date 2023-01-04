import * as Yup from "yup";
import {onlyLetters,allowedPostiveIntegerNumbers
} from "../regex";



export default Yup.object({
    firstName: Yup.string()
    .required('Please enter  a valid first name')
    .matches(onlyLetters, 'The value must be a text'),

    lastName: Yup.string()
    .required('Please enter  a valid last name')
    .matches(onlyLetters, 'The value must be a text'),

    gender: Yup.string()
    .required('Please enter a valid gender')
    .nullable(),

    email: Yup.string()
    .trim()
    .required("Please enter a valid email address")
    .email("Please enter a valid email address"),

    relatives: Yup.string()
    .required('Please enter  a valid relatives')
    .matches(onlyLetters, 'The value must be a text'),

    Age:  Yup.number()
    .required('Please enter a valid Age')
    .test(
        'Is positive?', 
        'The number must be greater than 0!', 
        (value) => value > 0
      )
    
})