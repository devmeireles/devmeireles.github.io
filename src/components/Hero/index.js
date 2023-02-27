import React from 'react';

import styles from './style.scss';

export default function Hero() {
    return (
        <header className='hero' id='about'>
            <div className='hero-bio'>
                <h1>Hello, I'm <strong className='bold'>Gabriel Meireles</strong></h1>
                <p>
                    a software developer based in Almada, Portugal. Over the past few years, I've been involved in several projects for different segments within and outside the technology industry. I started my career developing with PHP, which I worked with Laravel, Codeigniter, Zend, Lumen, Yii2, CakePHP and Symfony.
                </p>

                <p>
                    In addition to PHP, I've been working with JavaScript and TypeScript both for front and back-end stacks with React and Vue.js for front-end, React Native for mobile applications, Nest.js, Serverless, Express.js, Hapi.js whenever possible supported by Docker images.
                </p>

                <p>
                    I also love to explore other languages and technologies outside of my comfort zone as Golang, Python, Google Cloud and Kubernetes.
                </p>
            </div>

            <div className='hero-image'>
                <img src='img/hero-img.png' />
            </div>
        </header>
    )
}