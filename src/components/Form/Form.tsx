import React, { FormEvent, FocusEvent, useState } from 'react'
import Link from 'next/link'
import styles from './Form.module.scss'
import { Asterisk } from '../icons'
import { Input, Select } from '../ui/Form'
import { Button } from '../ui'
import options from '@data/form-options.json'
import countries from '@data/countries.json'

type Option = {
  _id: string
  label: string
  value: string
  name?: string
}

const Form = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    organization: '',
    details: '',
    topic: {} as Option,
    country: {} as Option,
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    organization: '',
    topic: '',
    country: '',
  })

  const [success, setSuccess] = useState({
    name: false,
    email: false,
    organization: false,
    topic: false,
    country: false,
  })

  const [formError, setFormError] = useState(false)

  const onChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    setData({ ...data, [e.currentTarget.name]: e.currentTarget.value })
  }

  const onSelectChangeHandler = (option: Option) => {
    if (option.name === 'topic') {
      setData({ ...data, topic: option })
      setErrors({ ...errors, topic: '' })
      setSuccess({ ...success, topic: true })
    }
    if (option.name === 'country') {
      setData({ ...data, country: option })
      setErrors({ ...errors, country: '' })
      setSuccess({ ...success, country: true })
    }
  }

  const onBlurInputHandler = (e: FocusEvent<HTMLInputElement>) => {
    if (e.currentTarget.required && e.currentTarget.value.length === 0) {
      setErrors({ ...errors, [e.currentTarget.name]: 'This field is required' })
      setSuccess({ ...success, [e.currentTarget.name]: false })
      return
    }

    if (e.currentTarget.name === 'email' && e.currentTarget.value.length > 0) {
      const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}\b/
      const isValid = emailRegex.test(e.currentTarget.value)
      if (!isValid) {
        setErrors({ ...errors, email: 'Please enter a valid email address' })
        setSuccess({ ...success, [e.currentTarget.name]: false })
        return
      }
    }
    setSuccess({ ...success, [e.currentTarget.name]: true })
    setErrors({ ...errors, [e.currentTarget.name]: '' })
  }
  const onBlurSelectTopicHandler = (
    required: boolean | undefined,
    e: FocusEvent<HTMLDivElement>
  ) => {
    if (
      required &&
      (Object.keys(data.topic).length === 0 ||
        data.topic.label === 'Other (please specify)')
    ) {
      setErrors({ ...errors, topic: 'Please, select a topic' })
      setSuccess({ ...success, topic: false })
      return
    }

    setSuccess({ ...success, topic: true })
    setErrors({ ...errors, topic: '' })
  }

  const onBlurSelectCountryHandler = (
    required: boolean | undefined,
    e: FocusEvent<HTMLDivElement>
  ) => {
    if (
      required &&
      (Object.keys(data.country).length === 0 ||
        data.country.label === 'Other (please specify)')
    ) {
      setErrors({ ...errors, country: 'Please, select a country' })
      setSuccess({ ...success, country: false })
      return
    }
    setSuccess({ ...success, country: true })
    setErrors({ ...errors, country: '' })
  }
  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault()
    if (!Object.values(errors).every((error) => error === '')) {
      setFormError(true)
      return
    }
    if (!Object.keys(data.topic).length) {
      setErrors({ ...errors, topic: 'Please, select a topic' })
      setSuccess({ ...success, topic: false })
      setFormError(true)
      return
    }
    if (!Object.keys(data.country).length) {
      setErrors({ ...errors, country: 'Please, select a country' })
      setSuccess({ ...success, country: false })
      setFormError(true)
      return
    }
    setFormError(false)
    console.log('data: ', data)
  }
  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <p className={styles.form__notice_required}>
        Required fields are marked with an Asterisk (
        <span>
          <Asterisk width='0.5em' height='0.5em' />
        </span>
        )
      </p>
      {formError && (
        <p className={styles.form__error}>Please fill all required filed</p>
      )}
      <div className={styles.form__row}>
        <div className={styles.form__col}>
          <Input
            type='text'
            name='name'
            label='name'
            value={data['name']}
            onChange={onChangeHandler}
            onBlur={onBlurInputHandler}
            error={errors['name']}
            success={success['name']}
            required
          />
          <Input
            type='text'
            name='organization'
            label='organization'
            value={data['organization']}
            onChange={onChangeHandler}
            onBlur={onBlurInputHandler}
            error={errors['organization']}
            success={success['organization']}
            required
          />
          <Select
            label='Country/territory'
            required
            options={countries}
            name='country'
            onBlur={(required, e) => onBlurSelectCountryHandler(required, e)}
            error={errors['country']}
            success={success['country']}
            onSelectHandler={(option) => onSelectChangeHandler(option)}
          />
        </div>
        <div className={styles.form__col}>
          <Input
            type='email'
            name='email'
            label='email'
            value={data['email']}
            onChange={onChangeHandler}
            onBlur={onBlurInputHandler}
            error={errors['email']}
            success={success['email']}
            required
          />
          <Select
            label='What topics are you interested in?'
            required
            options={options}
            name='topic'
            onBlur={(required, e) => onBlurSelectTopicHandler(required, e)}
            error={errors['topic']}
            success={success['topic']}
            onSelectHandler={(option) => onSelectChangeHandler(option)}
          />
          <div className={styles.form__details}>
            <label htmlFor='details'>
              Further details regarding your enquiry
            </label>
            <textarea name='details' id='details' rows={1}></textarea>
          </div>
        </div>
      </div>
      <p className={styles.form__disclaimer}>
        By submitting your email address, you acknowledge that you have read the
        <Link href='#'>Privacy Statement</Link>
        and that you consent to our processing data in accordance with the
        Privacy Statement (including international transfers). If you change
        your mind at any time about wishing to receive the information from us,
        you can send us an email message using the
        <Link href='#'>Contact Us</Link>
        page.
      </p>
      <div className={styles.form__submit}>
        <Button variant='dark-primary' type='submit'>
          submit
        </Button>
      </div>
    </form>
  )
}

export default Form
