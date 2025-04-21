'use client'

import { useForm } from 'react-hook-form'
import TextTitle from '../TextTitle/TextTitle'

type FormData = {
    name: string
    surname: string
    email: string
    message: string
}

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormData>()

    const onSubmit = (data: FormData) => {
        console.log('Form submitted:', data)
        reset()
    }

    return (
        <div className='text-center mb-8'>
            <TextTitle text="Ваше повідомлення" className="mb-2 uppercase font-normal" />
            <p className="text-[14px] text-normal text-center mb-6">Заповніть форму – і ми з вами зв’яжемося</p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1 max-w-sm mx-auto ">
                <input
                    type="text"
                    placeholder="* Ім’я"
                    {...register('name')}
                    className="w-full rounded-sm border  px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--main-orange)] focus:border-transparent transition duration-200 placeholder:text-[12px]"
                />
            {errors.name && <span className="text-red-500 text-xs">Обовʼязкове поле</span>}

            <input
                placeholder="* Прізвище"
                {...register('surname')}
                    className="w-full rounded-sm border  px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--main-orange)] focus:border-transparent transition duration-200 placeholder:text-[12px]"            />
            {errors.surname && <span className="text-red-500 text-xs">Обовʼязкове поле</span>}

            <input
                placeholder="* Електронна пошта"
                type="email"
                {...register('email')}
                    className="w-full rounded-sm border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--main-orange)] focus:border-transparent transition duration-200 placeholder:text-[12px]"            />
            {errors.email && <span className="text-red-500 text-xs">Обовʼязкове поле</span>}

            <textarea
                placeholder="* Поділіться своєю думкою"
                {...register('message')}
                    className="border rounded-sm px-3 py-2 h-24 resize-none placeholder:text-[12px] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--main-orange)] focus:border-transparent transition duration-200"
            />
            {errors.message && <span className="text-red-500 text-xs">Обовʼязкове поле</span>}

            <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 bg-[var(--main-orange)] text-white py-2.5 rounded-full text-[12px]"
            >
                {isSubmitting ? 'Надсилається...' : 'Надіслати'}
            </button>
        </form>
        </div >
    )
}

export default ContactForm
