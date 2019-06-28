import React, {Component} from 'react';
import { Row, Col, Avatar, Icon } from 'antd';
import TimeLine from '../components/TimeLine';
import Projects from '../components/Projects';



export default class Home extends Component{
    render(){
        return(
            <Row gutter={16}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <Avatar
                            src="https://cdn2.vectorstock.com/i/thumb-large/80/91/person-gray-photo-placeholder-little-boy-vector-22808091.jpg"
                            shape={"circle"}
                            alt={"Gabriel Meireles"}
                            size={250}
                            className="centered"
                        />
                    </Col>

                    <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                        <div className="headerInfo">
                            <h1 className="name">
                                Gabriel<br />
                                <span>Meireles</span>
                            </h1>
                            <p className="position">Desarrollador web</p>
                        </div>
                        <hr />

                        <Col xs={12} sm={12} md={8} lg={5} xl={5}>
                            <p><span className="strong">Ubicación</span><br />
                            São Paulo - Brasil</p>
                        </Col>

                        <Col xs={12} sm={12} md={8} lg={4} xl={4}>
                            <p>
                                <span className="strong">Mail</span><br />
                                <a href="mailto:dev.meireles@gmail.com" rel="noopener noreferrer">dev.meireles@gmail.com</a>
                            </p>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <p>Hola, soy Gabriel Meireles, desarrollador web con experiencia en PHP, trabajo hace 8 años con web y debido mi convivencia con la publicidad tuve ocasión de adquirir conocimiento en herramientas y soluciones del mercado actuando como desarrollador. Trabajé en diversos proyectos de pequeña y larga escala, lo que me permitió aprender lo mejor de cada persona, solución y tarea. Agregué en mis conocimientos frameworks MVC como Zend Framework, Laravel y CodeIgniter así como el desarrollo de aplicaciones mobile con React Native y web con React.</p>
                        </Col>
                    </Col>
                </Col>

                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="gray content">
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <h2 className="textCentered paddingBottom">Conocimientos</h2>
                    </Col>

                    <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <div className="descriptionsBox">
                                <h3>PHP</h3>
                                <p>Mi primer contacto con lenguajes de programación fue con PHP hace ocho años, desde ahí aprendí estándares MVC y así pues Frameworks como el Zend, Codeigniter, Laravel y también Lumen.</p>
                            </div>
                        </Col>

                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <div className="descriptionsBox">
                                <h3>JavaScript</h3>
                                <p>Puedo decir con toda seguridad qué aprender JavaScript fue una de las mejores decisiones que he tomado y desde ahí pasé a crear APIs con Node, Express y MongoDB, además, aplicaciones web con React y aplicaciones mobile con React Native.</p>
                            </div>
                        </Col>

                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <div className="descriptionsBox">
                                <h3>Databases</h3>
                                <p>Siempre fue un aficionado por los datos, desde que empecé a trabajar con PHP siempre trabajé con MySQL y por supuesto, después tuve la oportunidad de trabajar con bases MariaDB, Cassandra y recientemente MongoDB en el PHP y JavaScript.</p>
                            </div>
                        </Col>

                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <div className="descriptionsBox">
                                <h3>Mobile</h3>
                                <p>Empecé a estudiar JavaScript y muy pronto también React y React Native. He creado algunas aplicaciones pero sólo para estudios.</p>
                            </div>
                        </Col>
                    </Col>
                </Col>

                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="content">
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <h2 className="textCentered paddingBottom">Experiencia Profesional</h2>
                    </Col>

                    <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                        <TimeLine />
                    </Col>
                </Col>

                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="gray content">
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <h2 className="textCentered paddingBottom">Proyectos</h2>
                    </Col>

                    <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                        <Projects />
                    </Col>
                </Col>

                <Col xs={24} sm={24} md={24} lg={24} xl={24} className="content">
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <h2 className="textCentered paddingBottom">Links</h2>
                    </Col>

                    <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                        <Col xs={24} sm={24} md={3} lg={3} xl={4}>
                            <a href="https://www.linkedin.com/in/gmeireles/" target="_blank" rel="noopener noreferrer">
                                <Icon type="linkedin" style={{ fontSize: '30px' }}/>
                            </a>
                        </Col>

                        <Col xs={24} sm={24} md={3} lg={3} xl={4}>
                            <a href="https://github.com/devmeireles" target="_blank" rel="noopener noreferrer">
                                <Icon type="github" style={{ fontSize: '30px' }} />
                            </a>
                        </Col>

                        <Col xs={24} sm={24} md={3} lg={3} xl={4}>
                            <a href="https://medium.com/dev-meireles" target="_blank" rel="noopener noreferrer">
                                <Icon type="medium" style={{ fontSize: '30px' }} />
                            </a>
                        </Col>

                        <Col xs={24} sm={24} md={3} lg={3} xl={4}>
                            <a href="mailto:dev.meireles@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Icon type="mail" style={{ fontSize: '30px' }} />
                            </a>
                        </Col>
                    </Col>
                </Col>
            </Row>
        );
    }
}