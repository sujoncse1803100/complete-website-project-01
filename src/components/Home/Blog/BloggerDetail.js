import React from 'react';

const BloggerDetail = ({ blogger }) => {
    const styles = {
        boxSizing: 'boder-box',
        padding: '5px',
        boxShadow: '2px 5px 5px 1px  gray',
        borderRadius: '10px'
    }

    return (
        <div style={styles} className="col-md-3 col-sm-6 p-3">
            <div className="d-flex">
                <img style={{ width: '50px', height: '50px' }} src={blogger.image} alt="" />
                <div className="ms-2">
                    <b><h6>{blogger.name}</h6></b>
                    <p className="text-small">{blogger.date}</p>
                </div>
            </div>
            <div className="text-start">
                <b>{blogger.title}</b>
                <p className="mt-4">{blogger.description}</p>
            </div>
        </div>
    );
};

export default BloggerDetail;