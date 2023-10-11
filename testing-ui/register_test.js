Feature('CodeceptJS demo -- Registration Form demo');

Scenario('Registration Form Success', async ({ I }) => {
    I.amOnPage('http://localhost:3000');
    I.see('Firstname');
    I.fillField('firstName', 'John');
    I.wait(2);
    I.see('Lastname');
    I.fillField('lastName', 'Dow');
    I.wait(2);
    I.see('Email');
    I.fillField('email', 'test@test.com');
    I.wait(2);
    I.click('Continue');
    I.see('Registered Successfully');
    I.wait(2);
    I.saveScreenshot('success.png', true)
    //pause();
});

Scenario('Registration Form Failure', async ({ I }) => {
    I.amOnPage('http://localhost:3000');
    I.see('Firstname');
    I.fillField('firstName', 'John');
    I.wait(5);
    I.click('Continue');
    I.see('Lastname is required!');
    I.wait(2);
    I.saveScreenshot('failure.png', true)
    //pause();
});

Scenario('Registration Form validation check', async ({ I }) => {
    I.amOnPage('http://localhost:3000');
    I.click('Continue');
    I.see('Firstname is required!');
    I.see('Lastname is required!');
    I.see('Email is required!');
    I.saveScreenshot('validation1.png', true)
    I.see('Firstname');
    I.fillField('firstName', 'John');
    I.wait(2);
    I.click('Continue');
    I.see('Lastname is required!');
    I.see('Email is required!');
    I.saveScreenshot('validation2.png', true)
    I.wait(2);

    I.fillField('lastName', 'Dow');
    I.wait(2);
    I.click('Continue');
    I.see('Email is required!');
    I.saveScreenshot('validation3.png', true)
    I.wait(2);

    I.fillField('email', 'test@test.com');
    I.wait(2);
    I.click('Continue');
    I.see('Registered Successfully');
    I.wait(2);
    I.saveScreenshot('validation.png', true)
    //pause();
});
