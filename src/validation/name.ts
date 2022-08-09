import * as Yup from 'yup'

export const nameSchema = Yup.string().required('É obrigatório informar seu nome').nullable(false)
