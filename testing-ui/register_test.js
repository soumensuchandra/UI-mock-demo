Feature('CodeceptJS demo -- Registration Form demo');

Scenario('Registration Form Success', async ({ I }) => {
    I.amOnPage('http://localhost:3000');
    I.see('First name');
    I.fillField('firstName', 'John');
    I.wait(2);
    I.see('Last name');
    I.fillField('lastName', 'Dow');
    I.wait(2);
    I.see('Email address');
    I.fillField('email', 'sachin.t@gmail.com');
    I.wait(2);
    I.click('Continue');
    I.see('Registered Successfully');
    I.wait(2);
    I.saveScreenshot('success.png', true)
    //pause();
});

Scenario('Registration Form Failure', async ({ I }) => {
    I.amOnPage('http://localhost:3000');
    I.see('First name');
    I.fillField('firstName', 'John');
    I.wait(5);
    I.click('Continue');
    I.see('Last name is required!');
    I.wait(2);
    I.saveScreenshot('failure.png', true)
    //pause();
});

Scenario('Registration Form validation check', async ({ I }) => {
    I.amOnPage('http://localhost:3000');
    I.click('Continue');
    I.see('First name is required!');
    I.see('Last name is required!');
    I.see('Email address is required!');
    I.saveScreenshot('validation1.png', true)
    I.see('First name');
    I.fillField('firstName', 'John');
    I.wait(2);
    I.click('Continue');
    I.see('Last name is required!');
    I.see('Email address is required!');
    I.saveScreenshot('validation2.png', true)
    I.wait(2);

    I.fillField('lastName', 'Dow');
    I.wait(2);
    I.click('Continue');
    I.see('Email address is required!');
    I.saveScreenshot('validation3.png', true)
    I.wait(2);

    I.fillField('email', 'test@test.com');
    I.wait(2);
    I.click('Continue');
    I.see('Email Address doesnot matches with our records');
    I.wait(2);
    I.saveScreenshot('validation4.png', true)
    I.wait(2);

    I.fillField('email', 'ben.stokes@gmail.com');
    I.click('Continue');
    I.see('Registered Successfully');
    I.wait(2);
    I.saveScreenshot('validation5.png', true)
    //pause();
});
