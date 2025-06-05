import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="px-4 sm:px-6 lg:px-8 py-24 max-w-4xl mx-auto">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <h2>We Do What We Love.</h2>
          <p>
            At Pro Cineography, every creation is a reflection of our passion for storytelling through art. We're proud to say that our returning customers speak volumes—each one touched by the detail and emotion captured in the works we deliver.
          </p>

          <h2 className="mt-10">India's Premier Cinematic Art Studio</h2>
          <p>
            Pro Cineography is not just a brand—it's a space where imagination meets precision. We specialize in crafting 3D cinematic miniatures, personalized collectibles, and stylized art pieces that celebrate life's moments in unforgettable ways.
          </p>
          <p>
            Blending the beauty of digital craftsmanship with the spirit of film and visual storytelling, we've built a growing community of collectors, artists, and cinephiles who trust us to turn their memories into masterpieces.
          </p>

          <h2 className="mt-10">Built by Creators, For Creators</h2>
          <p>
            Founded by a team of two passionate creators, Pro Cineography began as a humble idea—to give people cinematic keepsakes they could hold in their hands. What started in a small home studio has grown into an independent creative platform that delivers quality, emotion, and personalization with every order.
          </p>
          <p>
            Our founders—working out of KOLKATA, WEST BENGAL—continue to lead with heart, overseeing everything from design to customer care.
          </p>

          <h2 className="mt-10">What We Offer</h2>
          <ul>
            <li>Custom 3D Miniature Creations</li>
            <li>Personalized Cinematic Collectibles</li>
            <li>High-Quality Printing & Finishing</li>
            <li>Order Fulfillment, Packaging & Delivery</li>
          </ul>
          <p>
            Whether it's for a gift, a film fan, a personal memory, or an artistic tribute, we make sure every product that leaves our studio is as meaningful as the story behind it.
          </p>

          <h2 className="mt-10">Empowering Creativity & Memories</h2>
          <p>
            Our goal has always been simple: to preserve emotions through the lens of cinematic art. We work closely with every client, ensuring their vision comes alive in the most stunning and personal way possible. At Pro Cineography, art isn't just created—it's curated, carefully, and passionately.
          </p>

          <h2 className="mt-10">Welcome to Pro Cineography.</h2>
          <p>Where your stories take shape.</p>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
