import React from 'react';

import styles from './style.scss';

export default function Stack() {
    const items = [
        {
            name: 'JavaScript',
            icon: 'https://img.stackshare.io/service/1209/javascript.jpeg'
        },
        {
            name: 'TypeScript',
            icon: 'https://img.stackshare.io/service/1612/bynNY5dJ.jpg',
        },
        {
            name: 'Node.js',
            icon: 'https://img.stackshare.io/service/1011/n1JRsFeB_400x400.png',
        },
        {
            name: 'NestJS',
            icon: 'https://img.stackshare.io/service/8747/4zsOyxko_400x400.jpg',
        },
        {
            name: 'PHP',
            icon: 'https://img.stackshare.io/service/991/hwUcGZ41_400x400.jpg',
        },
        {
            name: 'Python',
            icon: 'https://img.stackshare.io/service/993/pUBY5pVj.png',
        },
        {
            name: 'React',
            icon: 'https://img.stackshare.io/service/1020/OYIaJ1KK.png',
        },
        {
            name: 'Postgres',
            icon: 'https://img.stackshare.io/service/1028/ASOhU5xJ.png',
        },
        {
            name: 'MongoDB',
            icon: 'https://img.stackshare.io/service/1030/leaf-360x360.png'
        },
        {
            name: 'Vue.js',
            icon: 'https://img.stackshare.io/service/3837/paeckCWC.png'
        },
        {
            name: 'React Native',
            icon: 'https://img.stackshare.io/service/2699/KoK6gHzp.jpg'
        },
        {
            name: 'Laravel',
            icon: 'https://img.stackshare.io/service/992/AcA2LnWL_400x400.jpg'
        },
        {
            name: 'Go',
            icon: 'https://img.stackshare.io/service/1005/O6AczwfV_400x400.png'
        },
        {
            name: 'Kafka',
            icon: 'https://img.stackshare.io/service/1063/kazUJooF_400x400.jpg'
        },
        {
            name: 'Codeigniter',
            icon: 'https://img.stackshare.io/service/1195/ci_logo.png'
        },
        {
            name: 'Symfony',
            icon: 'https://img.stackshare.io/service/1197/logosf_positif_03_icon.png'
        },
        {
            name: 'Serverless',
            icon: 'https://img.stackshare.io/service/5095/serverless-logo.png'
        },
        {
            name: 'CakePHP',
            icon: 'https://img.stackshare.io/service/1196/default_6de4f48b9e8db9eef67580fad2e58fd642b82327.jpg'
        },
        {
            name: 'Lumen',
            icon: 'https://img.stackshare.io/service/2820/lumen.png'
        },
        {
            name: 'Zend Framework',
            icon: 'https://img.stackshare.io/service/1198/zend-logo.png'
        },
        {
            name: 'Docker',
            icon: 'https://img.stackshare.io/service/586/n4u37v9t_400x400.png'
        },
        {
            name: 'SASS',
            icon: 'https://img.stackshare.io/service/1171/jCR2zNJV.png'
        },
        {
            name: 'Amazon EC2',
            icon: 'https://img.stackshare.io/service/18/amazon-ec2.png'
        },
        {
            name: 'Django',
            icon: 'https://img.stackshare.io/service/994/4aGjtNQv.png'
        },
        {
            name: 'Redux',
            icon: 'https://img.stackshare.io/service/4074/13142323.png'
        },
        {
            name: 'Express.js',
            icon: 'https://img.stackshare.io/service/1163/hashtag.png'
        },
        {
            name: 'GCP',
            icon: 'https://img.stackshare.io/service/4240/1a61e4pu_400x400.jpg'
        },
        {
            name: 'Azure',
            icon: 'https://img.stackshare.io/service/213/default_88defae415fcb9cd0ac5d36c1ed27e74133c6287.jpg'
        },
        {
            name: 'AWS Lambda',
            icon: 'https://img.stackshare.io/service/1909/aws-lambda.png'
        },
        {
            name: 'RabbitMQ',
            icon: 'https://img.stackshare.io/service/1061/default_df93e9a30d27519161b39d8c1d5c223c1642d187.jpg'
        },
        {
            name: 'Amazon RDS',
            icon: 'https://img.stackshare.io/service/232/amazon-rds.png'
        },
        {
            name: 'Amazon Dynamo DB',
            icon: 'https://img.stackshare.io/service/389/amazon-dynamodb.png'
        },
        {
            name: 'Amazon SES',
            icon: 'https://img.stackshare.io/service/17/amazon-ses.png'
        },
        {
            name: 'Amazon Step Functions',
            icon: 'https://img.stackshare.io/service/6089/SWF-e64610d24b6e458c257f1105d8aa926f4a524182.png'
        },
        {
            name: 'MySQL',
            icon: 'https://img.stackshare.io/service/1025/logo-mysql-170x170.png'
        },
        {
            name: 'AWS Cloud Formation',
            icon: 'https://img.stackshare.io/service/411/aws-cloudformation.png'
        },
    ];

    return (
        <section className='stack' id='stack'>
            <div className='header'>
                <h1>Stack</h1>
            </div>

            <div className='items'>
                {items.map((item) => (
                    <div className='item' key={item.name}>
                        <img src={item.icon} alt={item.name} />
                    </div>
                ))}
            </div>

            <div className='see-more'>
                <a href='https://stackshare.io/devmeireles/my-stack' target='_blank'>See more on Stack Share</a>
            </div>
        </section>
    )
}