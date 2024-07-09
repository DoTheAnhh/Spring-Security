import { EditFilled, MoreOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
}

const ListProduct: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const fetchProduct = async (): Promise<Product[]> => {
        try {
            const response = await axios.get(`http://localhost:8080/public/product`);
            return response.data;
        } catch (error) {
            console.error("Error fetching data:", error);
            return [];
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedProducts = await fetchProduct();
                setProducts(fetchedProducts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            width: 80,
            align: "center" as const,
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            align: "center" as const,
        },
        {
            title: "Action",
            key: "action",
            align: "center" as const,
            render: () => (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                        type="primary"
                        icon={<MoreOutlined />}
                        style={{ marginRight: 8 }}
                        onClick={() => {} /* Navigate to product detail */}
                    >
                        Detail
                    </Button>
                    <Button
                        type="primary"
                        icon={<EditFilled />}
                        onClick={() => {} /* Navigate to update product */}
                    >
                        Update
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <Table dataSource={products} columns={columns} />
    );
};

export default ListProduct;
