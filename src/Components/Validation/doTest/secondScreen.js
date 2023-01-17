import * as Yup from "yup";
import {onlyLetters,allowedPostiveIntegerNumbers
} from "../regex";


export default Yup.object({
    fullNamme: Yup.string()
    .required('Please enter  a valid name')
    .matches(onlyLetters, 'The value must be a text'),


    birthDate:Yup
    .string()
    .nullable()
    .required("Please enter  a valid birthday")
    ,

    chiledGender: Yup.string()
    .required('Please enter a valid gender')
    .nullable(),

});
