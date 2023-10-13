Feature('CodeceptJS demo -- Registration Form demo');

Scenario('Image Compare', async ({ I }) => {
    I.amOnPage('/product');
    let productVal = await I.executeScript(function () {
        let [x1, x2, y1, y2] = [0, 0, 0, 0];
        let distance = -1;
        const elementOne = document.getElementById("productImg");
        const elementTwo = document.getElementById("productImageText");
        x1 = elementOne.offsetTop;
        y1 = elementOne.offsetLeft;
        x2 = elementTwo.offsetTop;
        y2 = elementTwo.offsetLeft;
        const xDistance = x1 - x2;
        const yDistance = y1 - y2;
        distance = Math.sqrt(
            (xDistance * xDistance) + (yDistance * yDistance)
        );
        return distance;
    })

    I.amOnPage('/order');
    let orderVal = await I.executeScript(function () {
        let [x1, x2, y1, y2] = [0, 0, 0, 0];
        let distance = -1;
        const elementOne = document.getElementById("orderImg");
        const elementTwo = document.getElementById("orderImageText");
        x1 = elementOne.offsetTop;
        y1 = elementOne.offsetLeft;
        x2 = elementTwo.offsetTop;
        y2 = elementTwo.offsetLeft;
        const xDistance = x1 - x2;
        const yDistance = y1 - y2;
        distance = Math.sqrt(
            (xDistance * xDistance) + (yDistance * yDistance)
        );
        return distance;
    })

    I.amOnPage('/about');
    let aboutVal = await I.executeScript(function () {
        let [x1, x2, y1, y2] = [0, 0, 0, 0];
        let distance = -1;
        const elementOne = document.getElementById("aboutImg");
        const elementTwo = document.getElementById("aboutImageText");
        x1 = elementOne.offsetTop;
        y1 = elementOne.offsetLeft;
        x2 = elementTwo.offsetTop;
        y2 = elementTwo.offsetLeft;
        const xDistance = x1 - x2;
        const yDistance = y1 - y2;
        distance = Math.sqrt(
            (xDistance * xDistance) + (yDistance * yDistance)
        );
        return distance;
    })

    console.log('orderVal',orderVal,'productVal',productVal, 'aboutVal',aboutVal);
    if (orderVal === productVal) {
        console.log('Order page and product page image are in same place');
    } else {
        console.log('Order page and product image are not in same place')
    }

    if (productVal === aboutVal) {
        console.log('Product page and about page image are in same place');
    } else {
        console.log('Product page and about image are not in same place')
    }
});

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
