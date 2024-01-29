import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Avatar, Card, Skeleton, Switch } from 'antd';
const { Meta } = Card;
const CardPerson = ({comment,name,src}) => {

    
    return (
        <>
            <Card
                style={{
                    width: 400,
                    marginTop: 16,
                    color:'black'
                }}
                extraColor='black'

            >
                <Meta
                    avatar={
                        <div>
                            <div className="rounded" style={{ padding: '2px', background: 'rgb(6, 189, 6)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div className="rounded" style={{ padding: '1px', background: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                                    <img className="rounded object-cover" style={{ padding: '1px' }} width='70px' height='70px' src={src} alt="" srcset="" />
                                </div>
                            </div>
                        </div>
                    }
                    description= {comment}
                    title={name}
                />
            </Card>




        </>
    );
};
export default CardPerson;