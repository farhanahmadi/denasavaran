import React from 'react'
import styles from "./JoinUs.module.css"
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import {Form, Button , Col , Row} from "react-bootstrap"


const JoinUs = () => {
    return (
        <div>
        <div className={styles.container} dir="rtl">
        <div className={styles.formContainer} dir="rtl">
            <section className={styles.fromData}>
            <div className={styles.formLogo} >
                 <img src={"/assets/images/navbarlogo.png"} alt="logo" />
            </div>
            <hr />
            <Form>
                 <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className={styles.formDataLabel} >نام</Form.Label>
                    <Form.Control className={styles.formDataInput} type="text" placeholder="برای مثال (علی)" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label className={styles.formDataLabel} >نام خانوادگی</Form.Label>
                    <Form.Control className={styles.formDataInput} type="text" placeholder="برای مثال (احمدی)" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className={styles.formDataLabel} >سن</Form.Label>
                    <Form.Control className={styles.formDataInput} type="number"  placeholder="برای مثال (۱۸)" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label className={styles.formDataLabel} >شماره موبایل</Form.Label>
                    <Form.Control className={styles.formDataInput} type="password" placeholder="برای مثال (۰۹۱۲۳۴۵۶۷۸۹)" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label className={styles.formDataLabel} >آدرس</Form.Label>
                    <Form.Control className={styles.formDataInput} placeholder="برای مثال (ارومیه ، ۸ شهریور ، کوچه ۸ ، پلاک ۸ )  "/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label className={styles.formDataLabel} >انتخاب ماشین</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>انتخاب ...</option>
                        <option>دنا</option>
                        <option>دنا پلاس</option>
                        <option>دنا پلاس توربو</option>
                    </Form.Select>
                </Form.Group>
                <br />
                <Row className="mb-3">
                    <Form.Group controlId="formFileSm" className="mb-3">
                        <Form.Label className={styles.formDataLabel} >آپلود عکس گواهی نامه</Form.Label>
                        <Form.Control type="file" size="sm" />
                    </Form.Group>

                    

                    <Form.Group controlId="formFileSm" className="mb-3">
                        <Form.Label className={styles.formDataLabel} >آپلود عکس ماشین</Form.Label>
                        <Form.Control type="file" size="sm" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" className={styles.formDataLabel} label="قوانین را قبول دارم " />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </section>
        </div>
    </div>
</div>
        
    )
}

export default JoinUs
