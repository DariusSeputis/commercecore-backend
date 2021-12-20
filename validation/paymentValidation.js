import * as Yup from 'yup';

export const paymentValidationSchema = Yup.object({
  firstName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('required'),
  email: Yup.string()
    .email()
    .max(20, 'Invalid email address')
    .required('required'),
  address: Yup.string().required('required'),
  city: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('required'),
  country: Yup.string().required('required'),
  regionState: Yup.string().required('required'),
  postalCode: Yup.string()
    .min(3, 'Invalid postal code')
    .max(10, 'Invalid postal code')
    .required('required'),
  paymentMethod: Yup.string().required('required'),
  cardNumber: Yup.string()
    .min(16, 'Invalid card number')
    .max(16, 'Invalid card number')
    .required('required'),
  cardMMYY: Yup.string()
    .min(4, 'Invalid date')
    .max(4, 'Invalid date')
    .required('required'),
  cardCVV: Yup.string().matches(/(100)/, 'Invalid CVV'),
});
