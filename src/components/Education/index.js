import React from 'react';

import styles from './style.scss';

export default function Education() {
    const items = [
        {
            id: 1,
            title: 'NestJS Fundamentals',
            school: 'NestJS',
            skills: 'TypeORM, Open API, NestJS, TypeScript, MongoDB',
            date: 'Feb 2023'
        },
        {
            id: 2,
            title: 'NestJS Zero to Hero - Modern TypeScript Back-end Development',
            school: 'Udemy',
            skills: 'NestJS, GraphQL, TypeScript, PostgreSQL, MongoDB',
            date: 'Feb 2023'
        },
        {
            id: 3,
            title: 'Take your first steps with Go',
            school: 'Microsoft',
            skills: 'Go',
            date: 'Feb 2023'
        },
        {
            id: 4,
            title: 'Software Development Lifecycle Specialization',
            school: 'University of Minnesota',
            skills: 'Object-Oriented Programming, Agile Methodologies, Software Quality, Software Architecture, Design Patterns',
            date: 'Jan 2023'
        },
        {
            id: 5,
            title: 'Advanced CSS and Sass: Flexbox, Grid and Animations',
            school: 'Udemy',
            skills: 'SASS, CSS3',
            date: 'Jul 2022'
        },
        {
            id: 6,
            title: 'Design Patterns in TypeScript',
            school: 'Udemy',
            skills: 'TypeScript, Design Patterns',
            date: 'Mar 2022'
        },
        {
            id: 7,
            title: 'AWS Serverless APIs & Apps',
            school: 'Udemy',
            skills: 'Amazon Web Services (AWS), Amazon CloudWatch, AWS CloudFormation, AWS Lambda, Amazon Dynamodb, Amazon S3, AWS Command Line Interface',
            date: 'Jan 2021'
        },
        {
            id: 8,
            title: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
            school: 'Udemy',
            skills: 'SQL, GraphQL, Express.js, JavaScript, Node.js',
            date: 'Fev 2020',
        },
        {
            id: 9,
            title: "Typescript: The Complete Developer's Guide",
            school: 'Udemy',
            skills: 'Typescript',
            date: 'Jun 2020',
        },
        {
            id: 10,
            title: 'Node.js, Express, MongoDB & More: The Complete Bootcamp',
            school: 'Udemy',
            skills: 'NoSQL, SQL, Express.js, Node.js',
            date: 'Abr 2019',
        },
        {
            id: 11,
            title: 'The Complete React Native Course',
            school: 'Udemy',
            skills: 'React Native',
            date: 'Jan 2019',
        },
        {
            id: 12,
            title: 'PHP Object Oriented Programming',
            school: '4linux',
            skills: 'Object-Oriented Programming (OOP), PHP, MySQL',
            date: 'Jan 2014',
        },
    ];

    return (
        <section className='education' id='education'>
            <div className='header'>
                <h1>Education</h1>
            </div>

            <div className='items'>
                {items.map((item) => (
                    <div className='item' key={item.id}>
                        <h3 className='item__title'>{item.title} - {item.school} <span>({item.date})</span></h3>
                        <p>{item.skills}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}