import React from 'react';
import { Card, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const OnboardingForm = () => {
    return (
        <Card className="form-card">
            <CardBody>

                <Form className="onboarding-form">
                    <Input
                        className="username"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Username"
                    />

                    <Input
                        className="emailaddress"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                    />

                    <Input
                        className="password"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                    />

                    <FormGroup check>
                        <Label>
                            <Input
                                className="terms"
                                type="checkbox"
                                name="terms"
                                id="terms"
                            />
                                {' '} I've Read and Agree to the Terms of Service
                            </Label>
                    </FormGroup>

                    <Button type="submit">Sign Up</Button>
                </Form>

            </CardBody>
        </Card>
    )
}

export default OnboardingForm;