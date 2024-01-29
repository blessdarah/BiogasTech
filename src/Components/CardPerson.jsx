import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Avatar, Card, Skeleton, Switch } from 'antd';
const { Meta } = Card;
const CardPerson = () => {

    return (
        <>
            <Card
                style={{
                    width: 400,
                    marginTop: 16,
                }}
            >
                <Meta
                    avatar={
                        <div>
                            <div className="rounded" style={{ padding: '2px', background: 'rgb(6, 189, 6)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div className="rounded" style={{ padding: '1px', background: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                                    <img className="rounded object-cover" style={{ padding: '1px' }} width='70px' height='70px' src="/assets/recolte-7-no-min.jpg.jpg" alt="" srcset="" />
                                </div>
                            </div>
                        </div>
                    }
                    title="Card title"
                    description=" 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi corrupti cum numquam. Quasi laboriosam totam ex libero provident inventore expedita tenetur deserunt atque maxime dolorem cum excepturi, iste et."
                />
            </Card>




        </>
    );
};
export default CardPerson;