//import { useFormik } from "formik";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CustomForm = () => {
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                amount: 0,
                currency: '',
                text: '',
                terms: false
            }}
            validationSchema={Yup.object({
                name: Yup.string().min(2, "Минимум 2 символа").required("Обязательное поле"),
                email: Yup.string().email("Не правильный email адрес").required("Обязательное поле"),
                amount: Yup.number().min(1, 'Минимальная сумма 1').required("Обязательное поле"),
                currency: Yup.string().required('Обязательное поле'),
                text: Yup.string().required("Обязательное поле"),
                terms: Yup.boolean().required('Необходимо согласие').oneOf([true], 'Необходимо согласие')
            })}
            onSubmit={values => console.log(JSON.stringify(values, null, 2))}
        >
            <Form className="form">
                <h2>Отправить пожертвование</h2>
                <label htmlFor="name">Ваше имя</label>
                <Field
                    id="name"
                    name="name"
                    type="text"
                />
                <ErrorMessage className='error' name='name' component='div'/>

                <label htmlFor="email">Ваша почта</label>
                <Field
                    id="email"
                    name="email"
                    type="email"
                />
                <ErrorMessage className='error' name='email' component='div'/>
                

                <label htmlFor="amount">Количество</label>
                <Field
                    id="amount"
                    name="amount"
                    type="number"
                />
                <ErrorMessage className='error' name='amount' component='div'/>

                <label htmlFor="currency">Валюта</label>
                <Field
                    id="currency"
                    name="currency"
                    as='select'>
                        <option value="">Выберите валюту</option>
                        <option value="USD">USD</option>
                        <option value="UAH">UAH</option>
                        <option value="RUB">RUB</option>
                </Field>
                <ErrorMessage className='error' name='currency' component='div'/>

                <label htmlFor="text">Ваше сообщение</label>
                <Field 
                    id="text"
                    name="text"
                    as="textarea"
                />
                <ErrorMessage className='error' name='text' component='div'/>

                <label className="checkbox">
                    <Field name="terms" 
                        type="checkbox" />
                    Соглашаетесь с политикой конфиденциальности?
                </label>
                <ErrorMessage className='error' name='terms' component='div'/>

                <button type="submit">Отправить</button>
            </Form>
        </Formik>

    )
}


// изначальный не оптимизированный вариант с созданной валидацией с помощью функции или Yup (для функции использовать вместо validationSchema ====> validate)

// const Form = () => {
//     const formik = useFormik({
//         initialValues: {
//             name: '',
//             email: '',
//             amount: 0,
//             currency: '',
//             text: '',
//             terms: false
//         },
//         validationSchema: Yup.object({
//             name: Yup.string().min(2, "Минимум 2 символа").required("Обязательное поле"),
//             email: Yup.string().email("Не правильный email адрес").required("Обязательное поле"),
//             amount: Yup.number().min(1, 'Обязательное поле'),
//             currency: Yup.string().required('Обязательное поле'),
//             text: Yup.string().required("Обязательное поле"),
//             terms: Yup.boolean().required('Необходимо согласие').oneOf([true], 'Необходимо согласие')
//         }),
//         onSubmit: values => console.log(JSON.stringify(values, null, 2)) 
//     });

//     return (
//         <form className="form" onSubmit={formik.handleSubmit}>
//             <h2>Отправить пожертвование</h2>
//             <label htmlFor="name">Ваше имя</label>
//             <input
//                 id="name"
//                 value={formik.values.name}
//                 style={formik.errors.name ? {border: '2px solid red'} : null}
//                 name="name"
//                 type="text"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//             />

//             {formik.errors.name && formik.touched.name ? <div style={{marginTop: '5px'}}>{formik.errors.name}</div> : null}

//             <label htmlFor="email">Ваша почта</label>
//             <input
//                 id="email"
//                 value={formik.values.email}
//                 name="email"
//                 type="email"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//             />

//             {formik.errors.email && formik.touched.email ? <div style={{marginTop: '5px'}}>{formik.errors.email}</div> : null}

//             <label htmlFor="amount">Количество</label>
//             <input
//                 id="amount"
//                 value={formik.values.amount}
//                 name="amount"
//                 type="number"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//             />

//             {formik.errors.amount && formik.touched.amount ? <div style={{marginTop: '5px'}}>{formik.errors.amount}</div> : null}

//             <label htmlFor="currency">Валюта</label>
//             <select
//                 id="currency"
//                 value={formik.values.currency}
//                 name="currency"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}>
//                     <option value="">Выберите валюту</option>
//                     <option value="USD">USD</option>
//                     <option value="UAH">UAH</option>
//                     <option value="RUB">RUB</option>
//             </select>

//             {formik.errors.currency && formik.touched.currency ? <div style={{marginTop: '5px'}}>{formik.errors.currency}</div> : null}

//             <label htmlFor="text">Ваше сообщение</label>
//             <textarea 
//                 id="text"
//                 value={formik.values.text}
//                 name="text"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//             />

//             {formik.errors.text && formik.touched.text ? <div style={{marginTop: '5px'}}>{formik.errors.text}</div> : null}

//             <label className="checkbox">
//                 <input name="terms"
//                        value={formik.values.terms} 
//                        type="checkbox"
//                        onChange={formik.handleChange}
//                        onBlur={formik.handleBlur} />
//                 Соглашаетесь с политикой конфиденциальности?
//             </label>

//             {formik.errors.terms && formik.touched.terms ? <div style={{marginTop: '5px'}}>{formik.errors.terms}</div> : null}

//             <button type="submit">Отправить</button>
//         </form>
//     )
// }


// function validate(values) {
//     const errors = {};

//     if (!values.name) {
//         errors.name = 'Обязательное поле';
//     } else if (values.name.length < 2) {
//         errors.name = 'Имя должно содерать минимум 2 символа';
//     } else if (values.name.length > 30) {
//         errors.name = 'Ошибка. Имя содержит более 30 символов';
//     }

//     if (!values.email) {
//         errors.email = 'Обязательное поле';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//         errors.email = 'Введен не верный email адрес';
//     }

//     if (!values.amount) {
//         errors.amount = 'Обязательное поле';
//     } else if (typeof(values.amount) !== 'number') {
//         errors.amount = 'Введено не число';
//     }

//     if (values.currency !== 'USD' && values.currency !== 'UAH' && values.currency !== 'RUB') {
//         errors.currency = "Не выбрана валюта";
//     }

//     if (!values.text) {
//         errors.text = 'Обязательное поле';
//     } 
    
//     if (!values.terms) {
//         errors.terms = 'Обязательное соглашение';
//     } 

//     return errors;
// }


export default CustomForm;