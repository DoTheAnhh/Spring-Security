import React, { useEffect, useState } from 'react';
import { Button, Table } from 'antd';
import { EditFilled, MoreOutlined } from '@ant-design/icons';
import axios from 'axios';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
}

const ListProduct: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:8080/product', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setProducts(response.data);
            } catch (error: any) {
                console.error('Error fetching products:', error);
                if (error.response && error.response.status === 401) {
                    // Token có thể đã hết hạn, thực hiện làm mới token
                    refreshAuthToken();
                }
            }
        };

        const refreshAuthToken = async () => {
            try {
                const refreshToken = localStorage.getItem('refreshToken');
                const response = await axios.post('http://localhost:8080/auth/refresh', {
                    refreshToken: refreshToken,
                });

                if (response.data.token) {
                    localStorage.setItem('token', response.data.token);
                    // Gọi lại hàm fetchProducts sau khi làm mới token thành công
                    fetchProducts();
                }
            } catch (error) {
                console.error('Error refreshing token:', error);
                // Xử lý khi làm mới token thất bại
            }
        };

        fetchProducts();
    }, []);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: 80,
            align: 'center' as const,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            align: 'center' as const,
        },
        {
            title: 'Action',
            key: 'action',
            align: 'center' as const,
            render: () => (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        type="primary"
                        icon={<MoreOutlined />}
                        style={{ marginRight: 8 }}
                        onClick={() => { /* Navigate to product detail */ }}
                    >
                        Detail
                    </Button>
                    <Button
                        type="primary"
                        icon={<EditFilled />}
                        onClick={() => { /* Navigate to update product */ }}
                    >
                        Update
                    </Button>
                </div>
            ),
        },
    ];

    return <Table dataSource={products} columns={columns} />;
};

export default ListProduct;
