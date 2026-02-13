import "../scripts/about-styles.css"

import aboutImg from "../assets/images/about.png";

export default function loadAbout() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    
    // About Hero
    const aboutHeroSection = document.createElement("section");
    aboutHeroSection.id = "about-section";
    const aboutHeroImage = document.createElement("img");
    const aboutHeroText = document.createElement("h1");

    aboutHeroImage.src = aboutImg;
    aboutHeroText.innerHTML = `From backyard grill to legend — <span>no shortcuts, just flavor.</span>`

    content.append(aboutHeroSection);
    aboutHeroSection.append(aboutHeroImage, aboutHeroText);

    // Our Story
    const ourStorySection = document.createElement("section");
    ourStorySection.id = "our-story-section";
    const ourStoryContent = document.createElement("div");
    ourStoryContent.id = "our-story-content";
    const ourStoryHeader = document.createElement("h1");
    const ourStoryText = document.createElement("p");

    ourStoryHeader.textContent = "Our Story"
    ourStoryText.textContent = "Bussin’ Burgers started with a simple craving and a big dream. One late night, a group of friends realized they were tired of bland, overhyped fast food that never hit the way it should. They wanted a burger that was juicy, messy, and bussin’ — the kind that made you close your eyes after the first bite. So, they fired up a backyard grill, experimented with bold flavors, and started serving their friends and neighbors. Word spread fast, the backyard lines got longer, and soon that small idea became a local favorite. Today, Bussin’ Burgers stays true to its roots — no shortcuts, no gimmicks, just straight-up flavor that hits every time."

    content.append(ourStorySection);
    ourStorySection.append(ourStoryContent);
    ourStoryContent.append(ourStoryHeader, ourStoryText);

    // Contact
    const contactSection = document.createElement("section");
    contactSection.id = "contact-section";
    const contactContent = document.createElement("div")
    contactContent.id = "contact-content";

    const contactMobile = document.createElement("div")
    contactMobile.id = "contact-mobile";
    const mobileHeader = document.createElement("p");
    const mobileContent = document.createElement("p");

    const contactAddress = document.createElement("div")
    contactAddress.id = "contact-address";
    const addressHeader = document.createElement("p");
    const addressContent = document.createElement("p");

    const contactEmail = document.createElement("div")
    contactEmail.id = "contact-email";
    const emailHeader = document.createElement("p");
    const emailContent = document.createElement("p");

    mobileHeader.textContent = "Call Us";
    mobileContent.textContent = "+1 (123) 456-7890";

    addressHeader.textContent = "Visit Us";
    addressContent.textContent = "123 W 42nd St New York, NY 10036";

    emailHeader.textContent = "Email Us";
    emailContent.textContent = "contact@bussin.jnt";

    content.append(contactSection);
    contactSection.append(contactContent);
    contactContent.append(contactMobile, contactEmail, contactAddress);
    contactMobile.append(mobileHeader, mobileContent);
    contactEmail.append(emailHeader, emailContent);
    contactAddress.append(addressHeader, addressContent);

}