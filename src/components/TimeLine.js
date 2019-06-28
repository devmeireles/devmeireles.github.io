import React, {Component} from 'react';
import { Timeline, Row, Col } from 'antd';


export default class TimeLine extends Component{
    render(){
        return(
        <Timeline>
            <Timeline.Item>
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Col xs={24} sm={24} md={7} lg={7} xl={7}>
                            <div className="timelineBox">
                                <h3>Desarrollador PHP</h3>
                                <h4>Sennit - Combining Efforts</h4>
                                <h5>Abril 2019 - Actualmente</h5>
                                <p>São Paulo - Brasil</p>
                            </div>
                        </Col>

                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <div className="timelineDescription">
                                <p>En la Sennit soy parte de un equipo de desarrollo responsable de el desarrollo de aplicaciones mobile. Trabajo con intercambio y manipulación de datos por medio de APIs.</p>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </Timeline.Item>

            <Timeline.Item>
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Col xs={24} sm={24} md={7} lg={7} xl={7}>
                            <div className="timelineBox">
                                <h3>Desarrollador PHP</h3>
                                <h4>Quântk Digital Marketing</h4>
                                <h5>Febrero 2017 - Abril 2019</h5>
                                <p>São Paulo - Brasil</p>
                            </div>
                        </Col>

                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <div className="timelineDescription">
                                <p>En la Quantk trabajé desarrollando sitios y aplicaciones web utilizando Laravel así como la gestión de servidores web con AWS y integración de servicios en los medios sociales.</p>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </Timeline.Item>

            <Timeline.Item>
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Col xs={24} sm={24} md={7} lg={7} xl={7}>
                            <div className="timelineBox">
                                <h3>Desarrollador PHP</h3>
                                <h4>PMK Involvement Marketing</h4>
                                <h5>Febrero 2016 - Febrero 2017</h5>
                                <p>São Paulo - Brasil</p>
                            </div>
                        </Col>

                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <div className="timelineDescription">
                                <p>Integré en la PMK el equipo de web para trabajar con Zend Framework, Facebook SDK, Laravel y Ionic desarrollando herramientas con integraciones con medios pago y cobranza.</p>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </Timeline.Item>

            <Timeline.Item>
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Col xs={24} sm={24} md={7} lg={7} xl={7}>
                            <div className="timelineBox">
                                <h3>Desarrollador PHP</h3>
                                <h4>Art Saves</h4>
                                <h5>Marzo 2015 - Febrero 2016</h5>
                                <p>São Paulo - Brasil</p>
                            </div>
                        </Col>

                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <div className="timelineDescription">
                                <p>Integré y dirigé un proyecto de creación y desarrollo de una escuela de coaching en São Paulo y California. Utilizaba de PHP con CodeIgniter, Angular con Ionic y posteriormente Laravel.</p>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </Timeline.Item>

            <Timeline.Item>
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Col xs={24} sm={24} md={7} lg={7} xl={7}>
                            <div className="timelineBox">
                                <h3>Desarrollador PHP</h3>
                                <h4>Código Garcia</h4>
                                <h5>Octubre 2014 - Marzo 2015</h5>
                                <p>São Paulo - Brasil</p>
                            </div>
                        </Col>

                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <div className="timelineDescription">
                                <p>Trabajé desarrollando aplicaciones y sitios web utilizando estándares MVC. Desde entonces adquirí la capacidad de trabajar como un desarrollador full stack.</p>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </Timeline.Item>

            <Timeline.Item>
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Col xs={24} sm={24} md={7} lg={7} xl={7}>
                            <div className="timelineBox">
                                <h3>Desarrollador PHP</h3>
                                <h4>Transtelecom</h4>
                                <h5>Enero 2013 - Octubre 2014</h5>
                                <p>São Paulo - Brasil</p>
                            </div>
                        </Col>

                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <div className="timelineDescription">
                                <p>Desarrollo de sistemas en CodeIgniter para telefonía, Administración Empresarial y tecnologías para centros de llamadas.</p>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </Timeline.Item>
        </Timeline>
        );
    }
}