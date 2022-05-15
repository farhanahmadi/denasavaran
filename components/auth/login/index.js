import React,{useState} from 'react'
import Link from "next/link"


//import styles
import styles from "./login.module.css"

//import functions
import { authValidation } from '../../function/authValidation'


import {Form, Button , Col , Row} from "react-bootstrap"


const JoinUs = () => {

    const [submit , setSubmit] = useState(false);
    const [error , setError] = useState([]);
    const [data , setData] = useState({
        email: '',
        password: ''
    });
    
    const changeHandler = event =>{
        setData({...data , [event.target.name] : event.target.value});
        setError(authValidation(data));
    }

    const submitHandler = (event) =>{
        setSubmit(true);
        event.preventDefault();
        setError(authValidation(data));
    }

    return (
        <div>
        <div className={styles.container} dir="rtl">
        <div className={styles.formContainer} dir="rtl">
            <section className={styles.fromData}>
            <div className={styles.formLogo} >
                 <img className={styles.logo} src={"/assets/images/navbarlogo.png"} alt="logo" />
            </div>
            <hr />
            <Form>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <Form.Group className="mb-3" controlId="formGridEmail">
                            <Form.Label className={styles.formDataLabel} >ایمیل</Form.Label>
                            <Form.Control name='email' className={styles.formDataInput} value={data.email} placeholder="ایمیل خود را وارد کنید" onChange={changeHandler}/>
                            {submit && error.email && <Form.Label className={styles.formDataLabelError} >{error.email}</Form.Label>}
                        </Form.Group>
                    </Col>

                    <Col lg={12} md={12} sm={12}>
                        <Form.Group className="mb-3" controlId="formGridPassword">
                            <Form.Label className={styles.formDataLabel} >رمز ورود</Form.Label>
                            <Form.Control name='password' className={styles.formDataInput} value={data.password} placeholder="رمز خود را وارد کنید" onChange={changeHandler}/>
                            {submit && error.password && <Form.Label className={styles.formDataLabelError} >{error.password}</Form.Label>}
                        </Form.Group>
                    </Col>
                </Row>


                <Row className='w-100'>
                    <Button onClick={submitHandler} className='w-50 mx-auto' variant="primary" type="submit" style={{marginTop: '20px'}}>
                         ورود
                    </Button>
                    <Col lg={12} md={12} sm={12} >
                        <p className='text-center' style={{marginTop: '15px'}}>اکانت ندارید ؟ <Link href={'/auth/register/'}>ثبت نام کنید</Link></p>
                    </Col>
               </Row>
                </Form>
            </section>
        </div>
    </div>
</div>
        
    )
}

export default JoinUs
