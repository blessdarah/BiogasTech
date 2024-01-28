import { Button, Form, Input } from "antd";
import '../../assets/index.css'
import { useState } from 'react';

export function RegisterPage() {

    const [form] = Form.useForm();
    const [match,setMatch] = useState(false)

    const  handleMatch = (value) =>{
         setMatch(value)
    }

    const onFinish = async(values) => {

       // e.preventDefault();
        const { password, passwordConfirm } = await form.validateFields();
       
        if (password !== passwordConfirm) {
            // Show error message and prevent form submission
            console.log('!error');
            handleMatch(true)
        } else {
            // Submit form data
            handleMatch(false)
            
            console.log(values)

        }

        console.log(match);
    }

    return (



        <Form
            name="register-page"
            form={form}
            layout="vertical"
            onFinish={onFinish}
            style={{

                maxWidth: "30rem",
                margin: "2rem auto",
            }}>

            <div className="w-full  flex justify-center  item-center">
                
                <img src="/logo.png" className="" width='200px' alt="" srcset="" />
            </div>

            <h3>Create Account</h3>

            <Form.Item
                name="username"
                label="Enter your username"
                rules={[
                    {
                        required: true,
                        message: "Username is required",
                    }, {
                        max: 15,
                        message: "Username must be less than 15 characters"
                    }, {
                        min: 6,
                        message: "Username must be greater than 6 characters"
                    }
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="email"
                label="Enter your email"
                rules={[
                    {
                        required: true,
                        message: "email is required",
                    },
                ]}
            >
                <Input type="email" />
            </Form.Item>


            <Form.Item
                name="password"
                label="Enter your password"
                rules={[
                    {
                        required: true,
                        message: "Password is required",
                    }, {
                        max: 50,
                        message: "Password must be less than 50 characters"
                    }, {
                        min: 6,
                        message: "Password must be greater than 8 characters"
                    }
                ]}

            >
                <Input type="password" />
            </Form.Item>


            <Form.Item
                name="passwordConfirm"
                label="Enter your password Confirm"
                rules={[
                    {
                        required: true,
                        message: "Password Confirm is required",
                    }, {
                        max: 50,
                        message: "Password Confirm must be less than 50 characters"
                    }, {
                        min: 6,
                        message: "Password Confirm must be greater than 8 characters"
                    }
                ]}

            >
                <Input type="password" />
            </Form.Item>

            <div className="text-red mb-4">
             {match && 'Password must match'}
            </div>


            <div className="w-full  mb-4 flex justify-beteewn">
                <Button htmlType="reset" type="default"
                    style={{
                        background: 'gray',
                        color: 'white'
                    }}
                >
                    Reset
                </Button>

                <Button htmlType="submit" type="primary"  >
                    Create
                </Button>
            </div>

            <div className="w-full flex justify-center">
                <link rel="stylesheet" href="/auth/login" />
                  <span className="text-blue cursor">  Already have account log in ? </span>
            </div>

        </Form>


    );
}