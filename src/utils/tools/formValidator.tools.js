export const formValidator = () => {
  return {
    firstName: (firstName) => {
      const firstNameRegx = /[A-Za-z\s]{3,}/;
      return firstNameRegx.test(firstName);
    },

    lastname: (lastName) => {
      const lastNameRegx = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
      return lastNameRegx.test(lastName);
    },

    identification: (id) => {
      const idRegx = /^([0-9]{10})$/;
      return idRegx.test(id);
    },

    email: (email) => {
      const emailRegx = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/;
      return emailRegx.test(email);
    },

    phone: (phone) => {
      const phoneRegx =
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
      return phoneRegx.test(phone);
    },

    gender: (gender) => {
      const genderRegx = /(Male)|(Female)|(No Binary)/;
      return genderRegx.test(gender);
    },
  };
};
