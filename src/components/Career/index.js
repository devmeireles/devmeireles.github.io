import React from 'react';

import styles from './style.scss';

export default function Career() {
    const timeline = [
        {
            id: 1,
            name: 'Software Engineer - Alter Solutions',
            description: 'As a front-end developer I’m responsible for implementing new features, bug fixes also participate directly in releases from planning, developing and deploy to a CRM maintained by Vue 2 with JavaScript using some composition api features from Vue 3.',
            date: 'Jul 2022 - Present',
            stack: 'JavaScript, SASS, TypeScript, Vue.js'
        },
        {
            id: 2,
            name: 'Software Engineer - Goco',
            description: 'On Goco I worked as a web developer programming with TypeScript using React, React Native and serverless functionalities on AWS as DynamoDB, API Gateway and CloudFormation in general also with PHP often on legacy code on previous PHP version and sometimes with PHP 7.3',
            date: 'Jun 2021 - Jul 2022',
            stack: 'React.js, Node.js, Amazon Web Services (AWS), TypeScript, React Native, Amazon Dynamodb, AWS Step Functions, Google Cloud Platform (GCP)'
        },
        {
            id: 3,
            name: 'Software Engineer - 2Mundos Inc',
            description: 'I started at 2Mundos working on an ed-tech platform with Vue.js, Node, Laravel and Lumen. I was used to planning and creating with QA and stakeholder team collaborations for improvements on a back-end platform written using Laravel, Node.js and Postgres.',
            date: 'Feb 2020 - Jun 2021',
            stack: 'JavaScript, Node.js, Vue.js, PostgreSQL, PHP, Laravel, Web Components, MongoDB'
        },
        {
            id: 4,
            name: 'Software Engineer - Deloitte ',
            description: 'At Deloitte I worked on a short-term project when I was responsible for maintaining an API written with Node.js that provided an application responsible for property surveys. The entire survey process was registered on a no-SQL database and with some triggers the data was registered on SQL Server database also and this data was accessed on a web application created with Yii2. With this web app the manager user can create some kind of surveys, manage the finished surveys, besides see all data as an interactive dashboard.',
            date: 'Oct 2019 - Jan 2020',
            stack: 'Node.js, PHP, yii2, Microsoft SQL Server, MongoDB',
        },
        {
            id: 5,
            name: 'Software Engineer - Sennit - Combining Efforts',
            description: 'Working at Sennit I was allocated to Movida, one of the biggest car rental companies in Brazil where I’d the experience of working with microservices where usually the tools were developed with legacy PHP and sometimes with Laravel and Lumen Framework. I worked on a short-term project when I was responsible for maintaining an API that provides data to a vehicle survey service, this service taxed possible damages during the rental period.',
            date: 'Apr 2019 - Nov 2019',
            stack: 'JavaScript, PHP, Laravel Lumen, MongoDB',
        },
        {
            id: 6,
            name: 'Software Engineer - Quantk Digital',
            description: 'At Quântk I’d the experience of working with cloud services such as AWS and Google Cloud. I was responsible for creating products from the planning to the deployment, so I worked not only coding but also participating in product planning for projects as static websites to manageable content like CMS and CRM. Beside that I managed a small team where I was the back-end developer with aside other two front-end developers.',
            date: 'Feb 2017 - Apr 2019',
            stack: 'JavaScript, React.js, Node.js, TypeScript, React Native, PHP, Laravel',
        },
        {
            id: 7,
            name: 'Software Engineer - PMK Digital Marketing',
            description: 'At PMK I’d my first experience with great frameworks as Zend and Laravel, I was responsible for maintaining a large CRM developed with Zend Framework and MariaDB and using some microservices written with Laravel, besides I used to do reports extracted from our database and through the months I improved this tool creating a web interactive app capable of doing this whole process in a friendly way.',
            date: 'Jan 2016 - Feb 2017',
            stack: 'PHP, Laravel, Zend Framework, MariaDB',
        },
    ]

    return (
        <section className='career' id='career'>
            <div className='header'>
                <h1>Career</h1>
            </div>

            <div className='timeline'>
                {timeline.map((item) => (
                    <div className='item' key={item.id}>
                        <div className='content'>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p className='date'>{item.date}</p>
                            <p className='stack'>{item.stack}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='see-more'>
                <a href='https://www.linkedin.com/in/devmeireles/details/experience/' target='_blank'>See more on Linkedin</a>
            </div>

        </section>
    );
}