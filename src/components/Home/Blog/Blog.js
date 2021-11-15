import React from 'react';
import BloggerDetail from './BloggerDetail';
import ellipse1 from '../../../images/Ellipse 1.png'
import ellipse2 from '../../../images/Ellipse 2.png'
import ellipse3 from '../../../images/Ellipse 3.png'

const blogger = [
    {
        id: '1',
        name: 'Dr. Robert Welliam',
        date: '23 November 2021',
        image: ellipse1,
        title: '2 times of brush in a day can keep you healthy',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptates'
    },
    {
        id: '2',
        name: 'Dr. Jhon Mitchel',
        date: '23 November 2021',
        image: ellipse2,
        title: 'The Tooth cancer is taking a challenge',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptates, '
    },
    {
        id: '3',
        name: 'Dr. Metha',
        date: '23 November 2021',
        image: ellipse3,
        title: '2 times of brush in a day can keep you healthy',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptates , '
    }
]

const Blog = () => {
    return (
        <section className="blogger-section">
            <div className="container text-center mt-5">
                <h5 style={{ color: '#1CC7C1' }}>OUR BLOG</h5>
                <h2>From Our Blog News</h2>
                <div className="row pt-5 mb-5 d-flex justify-content-between">
                    {
                        blogger.map(blogger => <BloggerDetail key={blogger.id} blogger={blogger} />)
                    }
                </div>
            </div>

        </section>
    );
};

export default Blog;