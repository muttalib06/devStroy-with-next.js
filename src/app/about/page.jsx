import Link from 'next/link';
import React from 'react';

const About = () => {
        return (
                <div>
                        <h2>About</h2>
                        <Link className='text-blue-500 border mr-8'  href={'/about/contact'}>Contact</Link>
                        <Link className='text-blue-500 border' href={"/about/team"}>Team</Link>
                </div>
        );
};

export default About;