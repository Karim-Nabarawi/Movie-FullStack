import * as yup from "yup";

const configureValidations = () => {
  yup.addMethod(yup.string, "firstLetterUppercase", function (msg = "First Letter must be Uppercase") {
    return this.test({
      name: "first-letter-uppercase",
      message: msg,
      test: (value) => value && value.length > 0 && value.substring(0, 1).toUpperCase() === value.substring(0, 1),
    });
  });
};
export default configureValidations;
