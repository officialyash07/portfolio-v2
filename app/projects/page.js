import Project from "@/components/projects/project";

import cal1 from "@/public/project-images/calculator/cal-1.png";
import cal2 from "@/public/project-images/calculator/cal-2.png";
import cal3 from "@/public/project-images/calculator/cal-3.png";
import certificate1 from "@/public/project-images/certificate-registration/certificate-1.png";
import certificate2 from "@/public/project-images/certificate-registration/certificate-2.png";
import certificate3 from "@/public/project-images/certificate-registration/certificate-3.png";
import certificate4 from "@/public/project-images/certificate-registration/certificate-4.png";
import certificate5 from "@/public/project-images/certificate-registration/certificate-5.png";
import space1 from "@/public/project-images/space-tourism/space-1.png";
import space2 from "@/public/project-images/space-tourism/space-2.png";
import space3 from "@/public/project-images/space-tourism/space-3.png";
import facebook1 from "@/public/project-images/facebook/facebook-1.png";
import facebook2 from "@/public/project-images/facebook/facebook-2.png";
import watch1 from "@/public/project-images/watchvista/watchvista-1.png";
import watch2 from "@/public/project-images/watchvista/watchvista-2.png";
import watch3 from "@/public/project-images/watchvista/watchvista-3.png";
import ceramic1 from "@/public/project-images/cermaic-shop/ceramic-1.png";
import ceramic2 from "@/public/project-images/cermaic-shop/ceramic-2.png";
import ceramic3 from "@/public/project-images/cermaic-shop/ceramic-3.png";
import ceramic4 from "@/public/project-images/cermaic-shop/ceramic-4.png";
import ceramic5 from "@/public/project-images/cermaic-shop/ceramic-5.png";
import country1 from "@/public/project-images/countries/country-1.png";
import country2 from "@/public/project-images/countries/country-2.png";
import country3 from "@/public/project-images/countries/country-3.png";
import ipImage from "@/public/project-images/ip-address/ip.png";
import product1 from "@/public/project-images/product-page/product-1.png";
import product2 from "@/public/project-images/product-page/product-2.png";
import product3 from "@/public/project-images/product-page/product-3.png";
import chattr1 from "@/public/project-images/chattr-app/chattr-1.png";
import chattr2 from "@/public/project-images/chattr-app/chattr-2.png";
import chattr3 from "@/public/project-images/chattr-app/chattr-3.png";
import chattr4 from "@/public/project-images/chattr-app/chattr-4.png";
import quiz1 from "@/public/project-images/quiz-js/quiz-1.png";
import quiz2 from "@/public/project-images/quiz-js/quiz-2.png";
import quiz3 from "@/public/project-images/quiz-js/quiz-3.png";

import FadeInLeft from "@/ui/animation/fade-in-left";

const certificateImages = [
    { src: certificate1, alt: "Certificate Image 1" },
    { src: certificate2, alt: "Certificate Image 2" },
    { src: certificate3, alt: "Certificate Image 3" },
    { src: certificate4, alt: "Certificate Image 4" },
    { src: certificate5, alt: "Certificate Image 5" },
];

const spaceImages = [
    { src: space1, alt: "Space Tourism 1" },
    { src: space2, alt: "Space Tourism 2" },
    { src: space3, alt: "Space Tourism 3" },
];

const calImages = [
    { src: cal1, alt: "Calculator theme 1" },
    { src: cal2, alt: "Calculator theme 2" },
    { src: cal3, alt: "Calculator theme 3" },
];

const facebookImages = [
    { src: facebook1, alt: "Facebook" },
    { src: facebook2, alt: "Facebook" },
];

const watchImages = [
    { src: watch1, alt: "Watch 1" },
    { src: watch2, alt: "Watch 2" },
    { src: watch3, alt: "Watch 3" },
];

const ceramicImages = [
    { src: ceramic1, alt: "ceramic1" },
    { src: ceramic2, alt: "ceramic2" },
    { src: ceramic3, alt: "ceramic3" },
    { src: ceramic4, alt: "ceramic4" },
    { src: ceramic5, alt: "ceramic5" },
];

const countryImages = [
    { src: country1, alt: "country1" },
    { src: country2, alt: "country2" },
    { src: country3, alt: "country3" },
];

const ipImages = [
    { src: ipImage, alt: "IP" },
    { src: ipImage, alt: "IP" },
];

const productImages = [
    { src: product1, alt: "product1" },
    { src: product2, alt: "product2" },
    { src: product3, alt: "product3" },
];

const chattrImages = [
    { src: chattr1, alt: "Chattr1" },
    { src: chattr2, alt: "Chattr2" },
    { src: chattr3, alt: "Chattr3" },
    { src: chattr4, alt: "Chattr4" },
];

const quizImages = [
    { src: quiz1, alt: "Quiz1" },
    { src: quiz2, alt: "Quiz2" },
    { src: quiz3, alt: "Quiz3" },
];

const ProjectsPage = () => {
    return (
        <main>
            <FadeInLeft>
                <Project
                    images={chattrImages}
                    title="Chattr App"
                    description="Chattr App is a responsive frontend web application for real-time one-to-one chat. Built using modern web technologies, it features intuitive UI design, efficient state management, and smooth user interactions. The project demonstrates expertise in component-based architecture, delivering a seamless messaging experience entirely on the client side."
                    codeLink="https://github.com/officialyash07/chattr-app"
                    liveLink="https://chattr-app-snowy.vercel.app/"
                />
            </FadeInLeft>
            <FadeInLeft>
                <Project
                    images={quizImages}
                    title=" JS Quiz App"
                    description="This is a web-based quiz application designed to deliver interactive quizzes to users. Built primarily with JavaScript, the app allows users to engage in quizzes through a clean and responsive interface. It features straightforward navigation, making it easily accessible. This project demonstrates my ability to develop functional and user-friendly web applications using modern JavaScript Classes."
                    codeLink="https://github.com/officialyash07/quiz-app"
                    liveLink="https://quiz-app-pink-ten-36.vercel.app/"
                />
            </FadeInLeft>
            <FadeInLeft>
                <Project
                    images={certificateImages}
                    title="Certificado Registro"
                    description="A web application using AWS that allows users to securely store and manage their certificate details. The application uses AWS Cognito for user authentication and AWS DynamoDB for storing certificate information, ensuring scalability and reliability. It provides a simple and user-friendly interface for adding, viewing, and managing certificates online."
                    codeLink="https://github.com/officialyash07/certificate-registration"
                    liveLink="https://certificate-registration.vercel.app/"
                />
            </FadeInLeft>
            <FadeInLeft>
                <Project
                    images={spaceImages}
                    title="Space Tourism Website"
                    description="Explore the Cosmos with Us! Embark on the ultimate adventure with our space tourism experiences."
                    codeLink="https://github.com/officialyash07/space-tourism"
                    liveLink="https://space-tourism-pi-seven.vercel.app/"
                />
            </FadeInLeft>
            <FadeInLeft>
                <Project
                    images={calImages}
                    title="Calculator"
                    description="A versatile calculator with three customizable themes! Perform quick and accurate calculations while switching between light, dark, and colorful modes to match your style."
                    codeLink="https://github.com/officialyash07/themed-calculator"
                    liveLink="https://themed-calculator-gilt.vercel.app/"
                />
            </FadeInLeft>
            <FadeInLeft>
                <Project
                    images={facebookImages}
                    title="Facebook Validation Form"
                    description="A Facebook clone of login and sign up form with validation."
                    codeLink="https://github.com/officialyash07/facebook-login-signup-validation"
                    liveLink="https://facebook-login-signup-validation-gk1xp71dm.vercel.app/"
                />
            </FadeInLeft>
            <FadeInLeft>
                <Project
                    images={watchImages}
                    title="WacthVista Website"
                    description="Your ultimate destination for premium watches. Explore a curated collection of luxury, classic, and modern timepieces designed for every style and occasion."
                    codeLink="https://github.com/officialyash07/watchvista-e-commerce-website"
                    liveLink="/projects/maintenance"
                />
            </FadeInLeft>
            <FadeInLeft>
                <Project
                    images={ceramicImages}
                    title="E-Commerce Website"
                    description="Discover premium ceramic products at Ceramic Shop! From elegant tableware to stylish home decor."
                    codeLink="https://github.com/officialyash07/ceramic-shop-full-e-commerce-website"
                    liveLink="https://ceramic-shop-full-e-commerce-websit.vercel.app/"
                />
            </FadeInLeft>
            <FadeInLeft>
                <Project
                    images={countryImages}
                    title="Country Info Web App"
                    description="Get detailed insights on any country with our Country Info web app! Explore population, geography, economy, culture, and more—all in one place. Fast, reliable, and easy to use!"
                    codeLink="https://github.com/officialyash07/countries-rest-api-website"
                    liveLink="https://countries-rest-api-website.vercel.app/"
                />
            </FadeInLeft>
            <FadeInLeft>
                <Project
                    images={ipImages}
                    title="IP Address Tracker"
                    description="Track and locate IP addresses with real-time geolocation data. Get insights on location, ISP, and more with our fast and reliable IP address tracker."
                    codeLink="https://github.com/officialyash07/ip-address-tracker"
                    liveLink="https://ip-address-tracker-seven-gilt.vercel.app/"
                />
            </FadeInLeft>
            <FadeInLeft>
                <Project
                    images={productImages}
                    title="E-Commerce Product Page"
                    description="A simple webpage for an e-commerce product. It includes a product image, title, description, price, and a button to add the product to the cart."
                    codeLink="https://github.com/officialyash07/ecommerce-product-main-page"
                    liveLink="https://ecommerce-product-main-page-lilac.vercel.app/"
                />
            </FadeInLeft>
        </main>
    );
};

export default ProjectsPage;
