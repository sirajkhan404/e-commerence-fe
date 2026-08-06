import React, { useState } from 'react'
import { Button, Form, Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const initialState = { name: "", email: "", password: "", confirmPassword: "" }

const Register = () => {

    const navigate = useNavigate()

    const [state, setState] = useState(initialState)
    const [isProcessing, setIsProcessing] = useState(false)

    const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))

    // Ant Design's onFinish triggers on submit (Works seamlessly on Mobile Keyboards)
    const handleSubmit = () => {

        let { name, email, password, confirmPassword } = state

        name = name.trim()

        if (name.length < 3) { return window.toastify("Please enter your name", "error") }
        if (password.length < 6) { return window.toastify("Password must be at least 6 characters long", "error") }
        if (password !== confirmPassword) { return window.toastify("Passwords do not match", "error") }

        const formData = { name, email, password }

        setIsProcessing(true)

        axios.post(window.api + "/api/auth/register", formData)
            .then(res => {
                const { status, data } = res
                if (status === 201) {
                    window.toastify(data.message, "success")
                    setState(initialState)
                    navigate("/auth/login")
                }
            })
            .catch(err => {
                console.log("err", err)
                if (err?.response) {
                    const { status, data } = err.response
                    if (status === 400) { window.toastify(data?.message || "Invalid input", "error") }
                    else { window.toastify(data?.message || "Something went wrong", "error") }
                } else {
                    window.toastify("Network error or server unreachable", "error")
                }
            })
            .finally(() => {
                setIsProcessing(false)
            })

    }

    return (
        <main className='auth'>

            {/* Decorative floating dots */}
            <div className="auth-dots">
                <span /><span /><span /><span /><span />
            </div>

            <div className="auth-card">

                {/* Brand */}
                <div className="auth-brand">
                    <div className="brand-icon">🛍️</div>
                    <span className="brand-name">MyStore</span>
                </div>

                {/* Header */}
                <div className="auth-header">
                    <h2 className="auth-title">Create Account</h2>
                    <p className="auth-subtitle">
                        Already have an account?{' '}
                        <Link to="/auth/login">Sign In</Link>
                    </p>
                </div>

                <div className="auth-divider" />

                {/* Form */}
                <Form layout="vertical" onFinish={handleSubmit} autoComplete="off">

                    <Form.Item label="Full Name" required>
                        <Input
                            placeholder='Enter your full name'
                            size='large'
                            name='name'
                            value={state.name}
                            onChange={handleChange}
                            prefix={<span style={{ color: 'rgba(167,139,250,0.7)', marginRight: 4 }}>👤</span>}
                        />
                    </Form.Item>

                    <Form.Item label="Email Address" required>
                        <Input
                            placeholder='Enter your email'
                            size='large'
                            name='email'
                            type="email"
                            value={state.email}
                            onChange={handleChange}
                            prefix={<span style={{ color: 'rgba(167,139,250,0.7)', marginRight: 4 }}>✉️</span>}
                        />
                    </Form.Item>

                    <Form.Item label="Password" required>
                        <Input.Password
                            placeholder='Create a strong password'
                            size='large'
                            name='password'
                            value={state.password}
                            onChange={handleChange}
                            prefix={<span style={{ color: 'rgba(167,139,250,0.7)', marginRight: 4 }}>🔒</span>}
                        />
                    </Form.Item>

                    <Form.Item label="Confirm Password" required>
                        <Input.Password
                            placeholder='Re-enter your password'
                            size='large'
                            name='confirmPassword'
                            value={state.confirmPassword}
                            onChange={handleChange}
                            prefix={<span style={{ color: 'rgba(167,139,250,0.7)', marginRight: 4 }}>🔐</span>}
                        />
                    </Form.Item>

                    <Form.Item className='mb-0'>
                        <Button
                            htmlType="submit"
                            loading={isProcessing}
                            className="auth-btn"
                        >
                            {!isProcessing && '✨ '} Create Account
                        </Button>
                    </Form.Item>

                </Form>

                <p className="auth-footer-text">
                    🔒 Your data is safe & encrypted
                </p>

            </div>
        </main>
    )
}

export default Register