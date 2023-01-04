import * as Yup from "yup";
import {onlyLetters,allowedPostiveIntegerNumbers
} from "../regex";






  export default Yup.object()
  .shape({
    foo: Yup.object({
      entries: Yup.lazy((value) => {
        console.log(value)
        if ((!value)) {
          const validationObject = { name: Yup.string().required('Item cannot be empty') }
          const newEntries = Object.keys(value).reduce(
            (acc, val) => ({
              ...acc,
              [val]: Yup.object(validationObject),
            }),
            {}
          )

          return Yup.object().shape(newEntries)
        }
        return Yup.mixed().notRequired()
      }),
    }),
  })
  .nullable()
  .notRequired()

