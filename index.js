function distanceFromHqInBlocks(location) {
    // Calculate the distance from headquarters in blocks
    // You might have logic here to determine the distance based on the 'location' parameter
    const headquarters = 42; // headquarters at block 42
    const distance = Math.abs(location - headquarters);
    return distance;
}

//calling the function with a location parameter
const distanceFromHQ = distanceFromHqInBlocks(50); // Replace 50 with the actual location
console.log(`Distance from HQ: ${distanceFromHQ} blocks`);

function distanceFromHqInBlocks(location) {
    // Calculate the distance from headquarters in blocks
    const headquarters = 42; // headquarters is at block 42
    const distance = Math.abs(location - headquarters);
    return distance;
}

function distanceFromHqInFeet(location) {
    const feetPerBlock = 264; // 1 block =>264 feet
    const blocks = distanceFromHqInBlocks(location);
    const distanceInFeet = blocks * feetPerBlock;
    return distanceInFeet;
}

// calling the function with a location parameter to get the distance in feet
const distanceFromHQInFeet = distanceFromHqInFeet(50); // Replace 50 with the actual location
console.log(`Distance from HQ: ${distanceFromHQInFeet} feet`);

function distanceTravelledInFeet(start, end) {
    const feetPerBlock = 264; // 1 block is => 264 feet
    const distance = Math.abs(end - start) * feetPerBlock;
    return distance;
}

// calling the function with start and end distances
const startDistance = 30;
const endDistance = 50;
const distanceTravelled = distanceTravelledInFeet(startDistance, endDistance);
console.log(`Distance travelled: ${distanceTravelled} feet`);

function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264; // Assuming 1 block is 264 feet
    const distance = Math.abs(destination - start) * feetPerBlock;
    return distance;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let farePrice = 0;

    if (distance <= 400) {
        farePrice = 0; 
    } else if (distance > 400 && distance <= 2000) {
        farePrice = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        farePrice = 25;
    } else {
        farePrice = 'cannot travel that far';
    }

    return farePrice;
}

// Now you can call the function with start and destination parameters
const startLocation = 30;
const destinationLocation = 50;
const fare = calculatesFarePrice(startLocation, destinationLocation);
console.log(`Fare Price: $${fare}`);
