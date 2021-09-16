import * as yup from 'yup';

const productStructure = yup.object({
  id: yup.number().required(),
  title: yup.string().required(),
  body: yup.string().required(),
});

export interface IPosts extends yup.Asserts<typeof productStructure> {}
