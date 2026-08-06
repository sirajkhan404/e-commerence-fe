import React, { useState } from 'react'
import { Button, Form, Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useAuth } from '@/context/Auth';


const initialState = { email: "", password: "" }

const Login = () => {

    const { readProfile } = useAuth()

    const navigate = useNavigate()

    const [state, setState] = useState(initialState)
    const [isProcessing, setIsProcessing] = useState(false)


    const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))

    const handleSubmit = e => {

        e.preventDefault()

        let { email, password } = state

        const formData = { email, password }

        setIsProcessing(true)

        axios.post(window.api + "/api/auth/login", formData)
            .then(res => {
                const { status, data } = res
                if (status === 200) {
                    const { token } = data
                    localStorage.setItem("jwt", token)
                    window.toastify(data.message, "success")
                    setState(initialState)
                    readProfile(token)
                    navigate("/")
                }
            })
            .catch(err => {
                console.log('err', err)
                if (err?.response) {
                    const { status, data } = err.response
                    if (status === 400 || status === 401) { window.toastify(data?.message || "Invalid credentials", "error") }
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
                    <h2 className="auth-title">Welcome Back!</h2>
                    <p className="auth-subtitle">
                        Don't have an account?{' '}
                        <Link to="/auth/register">Sign Up Free</Link>
                    </p>
                </div>

                <div className="auth-divider" />

                {/* Form */}
                <Form layout="vertical" autoComplete="off">

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
                            placeholder='Enter your password'
                            size='large'
                            name='password'
                            value={state.password}
                            onChange={handleChange}
                            prefix={<span style={{ color: 'rgba(167,139,250,0.7)', marginRight: 4 }}>🔒</span>}
                        />
                    </Form.Item>

                    <Form.Item className='mb-0'>
                        <Button
                            loading={isProcessing}
                            onClick={handleSubmit}
                            className="auth-btn"
                            htmlType="submit"
                        >
                            {!isProcessing && '🚀 '} Sign In
                        </Button>
                    </Form.Item>

                </Form>

                <p className="auth-footer-text">
                    🔒 Secured with end-to-end encryption
                </p>

            </div>
        </main>
    )
}

export default Login