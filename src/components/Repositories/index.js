import React from 'react';

import styles from './style.scss';

export default function Repositories() {
    const repositoriesList = [
        {
            id: 1,
            language: 'TypeScript',
            name: 'nest-social-blog',
            description: 'A kind of Medium blog built with Nest.js using TypeORM with PGSQL placed on Docker and Open API with Swagger',
            color: '#2b7489',
            link: 'https://github.com/devmeireles/nest-social-blog'
        },
        {
            id: 2,
            language: 'TypeScript',
            name: 'triangle-api',
            description: 'A Serverless API built with AWS ecosystem using Lambda + DynamoDB',
            color: '#2b7489',
            link: 'https://github.com/devmeireles/triangle-api'
        },
        {
            id: 3,
            language: 'TypeScript',
            name: 'serverless-scheduled-function',
            description: 'Small project aiming to handle with scheduled functions on AWS with Serverless',
            color: '#2b7489',
            link: 'https://github.com/devmeireles/serverless-scheduled-function'
        },
        {
            id: 4,
            language: 'TypeScript',
            name: 'serverless-dynamo-relationship',
            description: 'Serverless REST API working with relational data on DynamoDB using the unique table pattern',
            color: '#2b7489',
            link: 'https://github.com/devmeireles/serverless-dynamo-relationship'
        },
        {
            id: 5,
            language: 'Go',
            name: 'go-simple-api',
            description: 'This is a simple short REST API wrote with Golang using features as use-cases tests, JWT, smtp.SendMail and Postgres / SQLite (or any SQL database surported by GORM)',
            color: '#00ADD8',
            link: 'https://github.com/devmeireles/go-simple-api'
        },
        {
            id: 6,
            language: 'Python',
            name: 'soccer-player-api',
            description: "A short API wrote with Flask that's responsible for read, process and provide data using BS4, Pandas, Pymongo and Gunicorn",
            color: '#ffd538',
            link: 'https://github.com/devmeireles/soccer-player-api'
        },
        {
            id: 7,
            language: 'TypeScript',
            name: 'typescript-simple-api',
            description: 'This is a REST API wrote with TypeScript using Express, TypeORM, Jest, S3, SQS and SES',
            color: '#2b7489',
            link: 'https://github.com/devmeireles/typescript-simple-api'
        },
        {
            id: 8,
            language: 'Python',
            name: '202021-transfer-window',
            description: 'A small data scrap to get data from the transfer window of the season 2020 / 2021',
            color: '#ffd538',
            link: 'https://github.com/devmeireles/202021-transfer-window'
        },
        {
            id: 9,
            language: 'Python',
            name: 'soccer-profile-generator',
            description: 'This is a lib responsible for read with data scrap, process and render images using Pillow',
            color: '#ffd538',
            link: 'https://github.com/devmeireles/soccer-profile-generator'
        },
    ];

    const openLink = (url) => {
        window.open(url, "_blank", "noreferrer");
    };

    return (
        <section className='repositories' id='repositories'>
            <div className='repositories-header'>
                <h1>Repositories</h1>
            </div>

            <div className='repositories-items'>
                {repositoriesList.map((repository) => (
                    <div className='repositories-items__item' key={repository.id} onClick={() => openLink(repository.link)}>
                        <h3>{repository.name}</h3>
                        <p>{repository.description}</p>
                        <p>{repository.language}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}