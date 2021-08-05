import * as yup from 'yup';

export const SchemaLoginForm = yup.object().shape({
  login: yup.string().required('Введите логин').email('Некорректная почта'),
  password: yup.string().required('Введите пароль').min(5).max(15),
});
