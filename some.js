class Subscription {
    constructor(name, price, features) {
        this.name = name;
        this.price = price;
        this.features = features;
    }

    getInfo() {
        return `<h2>${this.name}</h2>
                <p>Price: $${this.price} per month</p>
                <ul>
                    ${this.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>`;
    }
}

const basicFeatures = [
    'Basic Temp Converter',
    'Access to Limited Temperature units'
];

const advanceFeatures = [
    'Advance Temp Converter',
    'Access to Multiple Temperature units'
];

const basic = new Subscription('Basic', 0, basicFeatures);
const advance = new Subscription('Advance', 0.99, advanceFeatures);

document.getElementById('basic').innerHTML = basic.getInfo();
document.getElementById('advance').innerHTML = advance.getInfo();
