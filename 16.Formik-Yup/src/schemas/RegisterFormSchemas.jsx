import * as yup from "yup";

export const RegisterFormSchemas = yup.object().shape({
  email: yup
    .string()
    .email("Gecerli Email Adresi Giriniz")
    .required("Email Adresi Zorunlu"),
  age: yup
    .number()
    .positive("Pozitif Bir Deger Giriniz")
    .integer("Tam Sayi Giriniz")
    .required("Yas Alani Zorunlu"),
  password: yup.string().required("Sifre Alani Zorunlu"),
  confirmPassword: yup
    .string()
    .required("Tekrar Sifre Alani Zorunlu")
    .oneOf([yup.ref("password", yup.password)], "Sifreler Eslesmiyor"),
  term: yup.boolean().required("Lutfen Kabul Etmenizi Onaylayiniz"),
});
