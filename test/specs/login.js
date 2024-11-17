import {
  acceptButton,
  addToCartButton,
  cartButton,
  cartChefName,
  cartDeliveryWindow,
  cartDishName,
  cartDishPrice,
  cartDishQty,
  cartDishSmallOrderCharge,
  cartDistanceWindow,
  cartLunchDinnerChecker,
  cartOrderBy,
  cartOrderInstructions,
  cartSubDeliveryFee,
  cartSubSmallOrderCharge,
  cartSubTax,
  cartSubTotal,
  cartTotalPrice,
  cartWeekChecker,
  checkBoxField,
  checkoutButton,
  continueButton,
  crossIconButton,
  emailField,
  goToHomeButton,
  loginButton,
  logOutButton,
  myAccountButton,
  passwordField,
  paymentContinueButton,
  plusQtyButton,
  proceedToPayButton,
  skipNowLink,
  yesButton,
} from "../pageobjects/AppElements.page";
import { email, password } from "../data/login.json";
import { $, driver } from "@wdio/globals";

describe("Login Test And Do The Payment", () => {
  it("User Click On Remember me When user do the login and do the payment", async () => {
    // entering in the app
    await $(skipNowLink).click();
    await $(acceptButton).click();

    // login in the app
    await $(emailField).click();
    await $(emailField).setValue(email);

    await $(passwordField).click();
    await $(passwordField).setValue(password);

    await $(checkBoxField).doubleClick();

    await $(loginButton).click();

    // in app add to cart
    await $(addToCartButton).click();
    await $(plusQtyButton).click();
    await $(continueButton).click();

    await driver.pause(2000);
    await $(crossIconButton).click();

    //entering in the cart
    await $(cartButton).click();
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1)"
    );

    await driver.pause(2000);
    await $(checkoutButton).click();

    //entering in the order summary
    await driver.pause(1500);
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1)"
    );

    await driver.pause(2000);
    await $(proceedToPayButton).click();

    // user do the payment
    await $(paymentContinueButton).click();

    // go to home
    await $(goToHomeButton).click();
    await driver.pause(2500);

    // my account enter and do the logout
    await $(myAccountButton).click();
    await $(logOutButton).click();

    await driver.pause(2000);
    await $(yesButton).click();

    // wait on the login screen 2 seconds
    await driver.pause(2000);
  });

  it("First clear Login Detials Without Remember me When user do the login and do the payment", async () => {
    // login in the app
    await $(emailField).click();
    await $(emailField).clearValue();

    await $(passwordField).click();
    await $(passwordField).clearValue();

    await $(checkBoxField).doubleClick();

    await $(emailField).click();
    await $(emailField).setValue(email);

    await $(passwordField).click();
    await $(passwordField).setValue(password);

    await $(checkBoxField).doubleClick();

    await $(loginButton).click();

    // in app add to cart
    await $(addToCartButton).click();
    await $(plusQtyButton).click();
    await $(continueButton).click();

    await driver.pause(2000);
    await $(crossIconButton).click();

    //entering in the cart
    await $(cartButton).click();
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1)"
    );

    await driver.pause(2000);
    await $(checkoutButton).click();

    //entering in the order summary
    await driver.pause(1500);
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1)"
    );

    await driver.pause(2000);
    await $(proceedToPayButton).click();

    // user do the payment
    await $(paymentContinueButton).click();

    // go to home
    await $(goToHomeButton).click();
    await driver.pause(2500);

    // my account enter and do the logout
    await $(myAccountButton).click();
    await $(logOutButton).click();

    await driver.pause(2000);
    await $(yesButton).click();

    // wait on the login screen 2 seconds
    await driver.pause(2000);
  });

  // it("User Click On Remember me When user do the login and do the payment And Get Details", async () => {
  //   // entering in the app
  //   await $(skipNowLink).click();
  //   await $(acceptButton).click();

  //   // login in the app
  //   await $(emailField).click();
  //   await $(emailField).setValue(email);

  //   await $(passwordField).click();
  //   await $(passwordField).setValue(password);

  //   await $(checkBoxField).doubleClick();

  //   await $(loginButton).click();

  //   // cartdetails AND  // homedetails get karke logic say automation testing kar sakthe hai

  //   // get homeDetiails from login.json

  //   // get text from cartDetails
  //   let cartdishName = await $(cartDishName).getText();
  //   let cartdishPrice = await $(cartDishPrice).getText();
  //   let cartchefName = await $(cartChefName).getText();
  //   let cartorderBy = await $(cartOrderBy).getText();
  //   let cartdeliveryWindow = await $(cartDeliveryWindow).getText();
  //   let cartdistanceWindow = await $(cartDistanceWindow).getText();
  //   let cartlunchDinnerChecker = await $(cartLunchDinnerChecker).getText();
  //   let cartsubTotal = await $(cartSubTotal).getText();
  //   let cartsubSmallOrderCharge = await $(cartSubSmallOrderCharge).getText();
  //   let cartsubDeliveryFee = await $(cartSubDeliveryFee).getText();
  //   let cartsubTax = await $(cartSubTax).getText();
  //   let carttotalPrice = await $(cartTotalPrice).getText();
  //   let cartweekChecker = await $(cartWeekChecker).getText();
  //   let cartdishSmallOrderCharge = await $(cartDishSmallOrderCharge).getText();
  //   let cartdishQty = await $(cartDishQty).getText();
  //   let cartorderInstructions = await $(cartOrderInstructions).getText();

  //   // in app add to cart
  //   await $(addToCartButton).click();
  //   await $(plusQtyButton).click();
  //   await $(continueButton).click();

  //   await driver.pause(2000);
  //   await $(crossIconButton).click();

  //   //entering in the cart
  //   await $(cartButton).click();
  //   await $(
  //     "android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1)"
  //   );

  //   await driver.pause(2000);
  //   await $(checkoutButton).click();

  //   //entering in the order summary
  //   await driver.pause(1500);
  //   await $(
  //     "android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1)"
  //   );

  //   await driver.pause(2000);
  //   await $(proceedToPayButton).click();

  //   // user do the payment
  //   await $(paymentContinueButton).click();

  //   // go to home
  //   await $(goToHomeButton).click();
  //   await driver.pause(2500);

  //   // my account enter and do the logout
  //   await $(myAccountButton).click();
  //   await $(logOutButton).click();

  //   await driver.pause(2000);
  //   await $(yesButton).click();

  //   // wait on the login screen 2 seconds
  //   await driver.pause(2000);
  // });
});
