import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

function MovieForm() {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Form values:', values);
    };

    return (
        <Form form={form} onFinish={onFinish} layout="vertical">
            <Form.Item label="Movie Name" name="movieName" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Description" name="description" rules={[{ required: true }]}>
                <Input.TextArea />
            </Form.Item>
            <Form.Item label="Duration" name="duration" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Genre" name="genre" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Language" name="language" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Release Date" name="releaseDate" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default MovieForm;