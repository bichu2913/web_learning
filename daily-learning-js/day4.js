const output = document.getElementById("output");

function display(title, value) {

    console.log(title + " : ", value);

    output.innerHTML += `
        <div class="card">
            <h2>${title}</h2>
            <p>${value}</p>
        </div>
    `;
}

// ==================================
// Customer Object
// ==================================

const customer = {

    customerName: "Bichu B Nadhan",
    mobileNumber: "8606892913",
    deliveryAddress: "Trivandrum, Kerala",
    paymentMethod: "UPI",
    membershipType: "Gold"

};

// ==================================
// Food Array
// ==================================

let foodItems = [

    "Burger",
    "Pizza",
    "Biriyani",
    "Shawarma",
    "Fried Rice",
    "Ice Cream"

];

// ==================================
// Functions
// ==================================

function displayCustomerDetails() {

    let details = `
    Name : ${customer.customerName}<br>
    Mobile : ${customer.mobileNumber}<br>
    Address : ${customer.deliveryAddress}<br>
    Payment : ${customer.paymentMethod}<br>
    Membership : ${customer.membershipType}
    `;

    display("Customer Details", details);

}

function displayFoodItems() {

    display("Food Items", foodItems.join(", "));

}

function countFoodItems() {

    display("Total Food Items", foodItems.length);

}

function addFoodItem(item) {

    foodItems.push(item);

    display("After Adding Food Item", foodItems.join(", "));

}

function removeLastFoodItem() {

    foodItems.pop();

    display("After Removing Last Item", foodItems.join(", "));

}

function searchFood(item) {

    let result = foodItems.includes(item);

    display("Search Result",
        result ? item + " Found" : item + " Not Found");

}

function sortFoodItems() {

    foodItems.sort();

    display("Sorted Food Items", foodItems.join(", "));

}

function reverseFoodItems() {

    foodItems.reverse();

    display("Reverse Food Items", foodItems.join(", "));

}

function joinedFoodItems() {

    display("Joined Food List", foodItems.join(" | "));

}

// ==================================
// Function with Parameter
// ==================================

function welcomeCustomer(name) {

    display("Welcome Message",
        `Welcome ${name}! Enjoy your delicious food.`);

}

// ==================================
// Function with Return Value
// ==================================

function getTotalFoodItems() {

    return foodItems.length;

}

// ==================================
// Function Expression
// ==================================

const deliveryStatus = function () {

    display("Delivery Status",
        "Your order is being prepared.");

};

// ==================================
// Arrow Function
// ==================================

const estimatedDeliveryTime = () => {

    display("Estimated Delivery Time",
        "30 Minutes");

};

// ==================================
// Function Calls
// ==================================

welcomeCustomer(customer.customerName);

displayCustomerDetails();

displayFoodItems();

countFoodItems();

addFoodItem("Momos");

removeLastFoodItem();

searchFood("Pizza");

sortFoodItems();

reverseFoodItems();

joinedFoodItems();

display(
    "Return Value (Total Food Items)",
    getTotalFoodItems()
);

deliveryStatus();

estimatedDeliveryTime();