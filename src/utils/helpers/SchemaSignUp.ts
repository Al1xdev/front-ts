import * as yup from 'yup';

export const SchemaSignUpForm = yup.object().shape({
  login: yup.string().required('Обязательное поле').email('Некорректная почта'),
  password: yup.string().required('Обязательное поле').min(5).max(15),
});
