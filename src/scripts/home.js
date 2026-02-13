import heroImg from "../assets/images/hero-image.png";
import restaurantImg from "../assets/images/restaurant-image.png"

export default function loadHome() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    // HERO SECTION
    const heroSection = document.createElement("section");
    heroSection.id = "hero";
    content.appendChild(heroSection);

    const heroContent = document.createElement("div");
    heroContent.id = "hero-content";
    const heroText = document.createElement("h1");
    const heroImage = document.createElement("img");

    heroSection.appendChild(heroContent);
    heroContent.appendChild(heroText);
    heroContent.appendChild(heroImage);

    heroText.innerHTML = `Experience fresh, bold, and flavorful eats with no shortcuts — <span>just straight-up flavor in every bite.</span>`;
    heroImage.src = heroImg;
    heroImage.id = "hero-img";

    // VALUES SECTION
    const valuesSection = document.createElement("section");
    valuesSection.id = "values"
    content.appendChild(valuesSection);

    const valuesContent = document.createElement("div");
    valuesContent.id = "values-content";
    const valuesHeader = document.createElement("h1");
    const valuesText = document.createElement("p");

    valuesSection.appendChild(valuesContent);
    valuesContent.appendChild(valuesHeader);
    valuesContent.appendChild(valuesText);

    valuesHeader.textContent = "VALUES"
    valuesText.textContent = "At Bussin’ Burger Joint, we believe great food starts with passion and purpose. Our values are built on quality, freshness, and community — serving up handcrafted burgers made from locally sourced ingredients that hit the spot every time. We’re committed to fast, friendly service, creating a space where everyone feels welcome, and keeping it real, bold, and delicious. At Bussin’ Burger, it’s not just a meal — it’s a vibe.";

    // HOURS & LOCATION SECTION
    const locationSection = document.createElement("section")
    locationSection.id = "location";
    content.appendChild(locationSection);

    const locationContent = document.createElement("div");
    locationContent.id = "location-content"
    const locationTextContainer = document.createElement("div");
    const locationImage = document.createElement("img")
    const locationHours = document.createElement("p");

    locationSection.appendChild(locationContent);
    locationContent.appendChild(locationTextContainer);
    locationContent.appendChild(locationImage);
    locationImage.id = "location-img";
    locationTextContainer.appendChild(locationHours);

    locationImage.src = restaurantImg;
    locationHours.innerHTML = `
        <div>
            <h1>Open Hours</h1>
        </div>
        <div id="open-hours-container">
            <div>
                <p>Monday</p>
                <p>Tuesday</p>
                <p>Wednesday</p>
                <p><span>Thursday</span></p>
                <p><span>Friday</span></p>
                <p><span>Saturday</span></p>
                <p>Sunday</p>
            </div>
            <div>
                <p>10:00AM - 12:00AM</p>
                <p>10:00AM - 12:00AM</p>
                <p>10:00AM - 12:00AM</p>
                <p><span>10:00AM - 1:00AM</span></p>
                <p><span>10:00AM - 1:00AM</span></p>
                <p><span>10:00AM - 1:00AM</span></p>
                <p>10:00AM - 12:00AM</p>
            </div>
        </div>
        <div>
            <div>
                <h1>Location</h1>
            </div>
            <h2>Midtown Manhattan</h2>
            <p>123 W 42nd St New York, NY 10036</p>
        </div>
    `

}