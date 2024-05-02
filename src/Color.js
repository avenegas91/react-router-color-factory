import React, { useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';

const Color = ({ colors }) => {
    const { color } = useParams();
    const history = useHistory();

    const selectedColor = colors.find(c => c.name === color);

    useEffect(() => {
        if (!selectedColor) {
            history.push('/colors');
            return;
        }
        document.body.style.backgroundColor = selectedColor;

        return () => {
            document.body.style.backgroundColor = '';
        };
    }, [selectedColor, history]);

    return (
        <>
            <div className='color-links'>
                <h1 className='title'>{selectedColor}</h1>
                <Link exact to="/colors">Go Back</Link>
            </div>
        </>
    );
};

export default Color;