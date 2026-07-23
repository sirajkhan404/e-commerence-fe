import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Modal, Form, Input, Button, Spin, Empty, InputNumber } from 'antd'
import { ShoppingCartOutlined, EnvironmentOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons'
import { useAuth } from '@/context/Auth'
import './Products.scss'

const Products = () => {

    const { isAuth } = useAuth()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    // Order modal state
    const [orderModal, setOrderModal] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [orderLoading, setOrderLoading] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [form] = Form.useForm()

    // ── Fetch public products ──────────────────────────────────────────
    const fetchProducts = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get(`${window.api}/api/products/public-all`)
            setProducts(data.products || [])
        } catch (err) {
            window.toastify('Failed to load products', 'error')
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => { fetchProducts() }, [])

    // ── Open Order modal ───────────────────────────────────────────────
    const openOrderModal = (product) => {
        if (!isAuth) {
            window.toastify('Please login to place an order', 'warning')
            return
        }
        setSelectedProduct(product)
        setQuantity(1)
        form.resetFields()
        setOrderModal(true)
    }

    // ── Submit Order ───────────────────────────────────────────────────
    const handleOrderSubmit = async (values) => {
        try {
            setOrderLoading(true)
            const token = localStorage.getItem('jwt')

            const orderPayload = {
                products: [{
                    productId: selectedProduct.id,
                    name: selectedProduct.name,
                    price: selectedProduct.price,
                    quantity: quantity,
                    imageURL: selectedProduct.imageURL,
                }],
                shippingAddress: {
                    fullName: values.fullName,
                    phone: values.phone,
                    address: values.address,
                    city: values.city,
                },
                totalAmount: selectedProduct.price * quantity,
            }

            await axios.post(
                `${window.api}/api/orders/create`,
                orderPayload,
                { headers: { Authorization: `Bearer ${token}` } }
            )

            window.toastify('Order placed successfully! 🎉', 'success')
            setOrderModal(false)
            form.resetFields()

        } catch (err) {
            const msg = err?.response?.data?.message || 'Failed to place order'
            window.toastify(msg, 'error')
            console.error(err)
        } finally {
            setOrderLoading(false)
        }
    }

    return (
        <main className="products-page">
            {/* ── Hero Banner ────────────────────────────────────── */}
            <section className="products-hero">
                <div className="products-hero__content">
                    <span className="products-hero__badge">Our Collection</span>
                    <h1 className="products-hero__title">Shop Premium Products</h1>
                    <p className="products-hero__subtitle">Discover our handpicked selection of quality items</p>
                </div>
            </section>

            {/* ── Products Grid ──────────────────────────────────── */}
            <section className="products-section">
                <div className="container">
                    {loading ? (
                        <div className="products-loader">
                            <Spin size="large" />
                            <p>Loading products...</p>
                        </div>
                    ) : products.length === 0 ? (
                        <div className="products-empty">
                            <Empty description="No products available right now" />
                        </div>
                    ) : (
                        <div className="products-grid">
                            {products.map(product => (
                                <div className="product-card" key={product._id}>
                                    <div className="product-card__image-wrap">
                                        <img
                                            src={product.imageURL}
                                            alt={product.name}
                                            className="product-card__image"
                                        />
                                        <span className="product-card__badge">{product.category}</span>
                                    </div>

                                    <div className="product-card__body">
                                        <h3 className="product-card__name">{product.name}</h3>
                                        <p className="product-card__desc">{product.description}</p>

                                        <div className="product-card__meta">
                                            <span className="product-card__price">
                                                Rs. {Number(product.price).toLocaleString()}
                                            </span>
                                            <span className={`product-card__stock ${product.stock <= 5 ? 'low' : ''}`}>
                                                {product.stock <= 0 ? 'Out of stock' : product.stock <= 5 ? `Only ${product.stock} left` : `In stock: ${product.stock}`}
                                            </span>
                                        </div>

                                        <button
                                            className="product-card__order-btn"
                                            onClick={() => openOrderModal(product)}
                                            disabled={product.stock <= 0}
                                            id={`order-btn-${product.id}`}
                                        >
                                            <ShoppingCartOutlined />
                                            {product.stock <= 0 ? 'Out of Stock' : 'Order Now'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* ── Order Modal ────────────────────────────────────── */}
            <Modal
                open={orderModal}
                onCancel={() => { setOrderModal(false); form.resetFields() }}
                footer={null}
                title={null}
                width={520}
                className="order-modal"
                centered
                destroyOnClose
            >
                {selectedProduct && (
                    <div className="order-modal__inner">
                        {/* Product summary */}
                        <div className="order-modal__product">
                            <img src={selectedProduct.imageURL} alt={selectedProduct.name} className="order-modal__product-img" />
                            <div className="order-modal__product-info">
                                <h3>{selectedProduct.name}</h3>
                                <p className="order-modal__product-price">$. {Number(selectedProduct.price).toLocaleString()} / item</p>
                                <p className="order-modal__product-cat">{selectedProduct.category}</p>
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className="order-modal__qty">
                            <label>Quantity</label>
                            <InputNumber
                                min={1}
                                max={selectedProduct.stock}
                                value={quantity}
                                onChange={(val) => setQuantity(val || 1)}
                                style={{ width: '100%' }}
                                id="order-quantity"
                            />
                            <span className="order-modal__total">
                                Total: <strong>$. {(selectedProduct.price * quantity).toLocaleString()}</strong>
                            </span>
                        </div>

                        <div className="order-modal__divider">
                            <span>Shipping Address</span>
                        </div>

                        {/* Shipping form */}
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={handleOrderSubmit}
                            requiredMark={false}
                        >
                            <Form.Item
                                name="fullName"
                                label="Full Name"
                                rules={[{ required: true, message: 'Please enter your full name' }]}
                            >
                                <Input
                                    prefix={<UserOutlined />}
                                    placeholder="John Doe"
                                    id="shipping-fullName"
                                />
                            </Form.Item>

                            <Form.Item
                                name="phone"
                                label="Phone Number"
                                rules={[{ required: true, message: 'Please enter your phone number' }]}
                            >
                                <Input
                                    prefix={<PhoneOutlined />}
                                    placeholder="03XX-XXXXXXX"
                                    id="shipping-phone"
                                />
                            </Form.Item>

                            <Form.Item
                                name="address"
                                label="Address"
                                rules={[{ required: true, message: 'Please enter your address' }]}
                            >
                                <Input.TextArea
                                    prefix={<EnvironmentOutlined />}
                                    placeholder="Street, House No, Area..."
                                    rows={2}
                                    id="shipping-address"
                                />
                            </Form.Item>

                            <Form.Item
                                name="city"
                                label="City"
                                rules={[{ required: true, message: 'Please enter your city' }]}
                            >
                                <Input
                                    placeholder="Karachi"
                                    id="shipping-city"
                                />
                            </Form.Item>

                            <div className="order-modal__actions">
                                <Button
                                    onClick={() => { setOrderModal(false); form.resetFields() }}
                                    id="cancel-order-btn"
                                    size="large"
                                    style={{ flex: 1 }}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    loading={orderLoading}
                                    icon={<ShoppingCartOutlined />}
                                    id="confirm-order-btn"
                                    size="large"
                                    style={{ flex: 2, background: '#1d3557', borderColor: '#1d3557' }}
                                >
                                    Place Order
                                </Button>
                            </div>
                        </Form>
                    </div>
                )}
            </Modal>
        </main>
    )
}

export default Products