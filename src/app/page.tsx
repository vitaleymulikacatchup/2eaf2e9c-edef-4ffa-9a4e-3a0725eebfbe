"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="small"
      sizing="small"
      background="fluid"
      cardStyle="glass-flat"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Medicide"
          navItems={[
            { name: "About", id: "about" },
            { name: "Products", id: "products" },
            { name: "Benefits", id: "benefits" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="MEDICIDE"
          description="Premium medicinal cannabis products crafted for wellness and healing"
          buttons={[
            { text: "Shop Now", href: "products" },
            { text: "Learn More", href: "about" }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764004870291-p9hnwk3p.jpg",
              imageAlt: "Medical cannabis plant"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764004872499-pp7k86tw.jpg",
              imageAlt: "Cannabis leaf medicine"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764004873424-vwxeeg22.jpg",
              imageAlt: "Cannabis pharmaceutical products"
            }
          ]}
          autoplayDelay={4000}
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="About Medicide"
          description="We provide pharmaceutical-grade medicinal cannabis products designed to support your wellness journey. Our carefully curated selection meets the highest quality standards, backed by extensive research and professional expertise in cannabis therapeutics."
        />
      </div>

      <div id="benefits" data-section="benefits">
        <FeatureCardThree
          title="Wellness Benefits"
          description="Discover the therapeutic properties of our medicinal cannabis products"
          tag="Health"
          features={[
            {
              id: "01",
              title: "Pain Management",
              description: "Natural relief from chronic and acute pain with therapeutic cannabis formulations",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764004874609-dackmhnb.jpg",
              imageAlt: "Pain relief wellness"
            },
            {
              id: "02",
              title: "Sleep Support",
              description: "Promote restful sleep and recovery with calming cannabis products",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764004875869-taxib2dw.jpg",
              imageAlt: "Sleep recovery"
            },
            {
              id: "03",
              title: "Stress Relief",
              description: "Reduce anxiety and stress with our premium wellness formulations",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764004877142-y77fzk2p.jpg",
              imageAlt: "Stress relief meditation"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardThree
          title="Our Product Line"
          description="Premium medicinal cannabis products for your wellness needs"
          products={[
            {
              id: "1",
              name: "Premium CBD Tincture",
              price: "$45.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764004878102-p1zero9a.jpg",
              imageAlt: "CBD tincture bottle",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "THC/CBD Capsules",
              price: "$55.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764004879042-jkwej3f9.jpg",
              imageAlt: "Cannabis capsules",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "Therapeutic Balm",
              price: "$35.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764004880430-zv714qlb.jpg",
              imageAlt: "Cannabis cream balm",
              initialQuantity: 1
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Customer Success Stories"
          description="Real experiences from our valued customers"
          tag="Reviews"
          testimonials={[
            {
              id: "1",
              name: "Jennifer Martinez",
              role: "Pain Management Patient",
              testimonial: "Medicide products have transformed my pain management routine. The quality and consistency are exceptional, and I finally have relief without harsh side effects.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764004881555-qnc5ujud.jpg",
              imageAlt: "Jennifer Martinez"
            },
            {
              id: "2",
              name: "David Chen",
              role: "Wellness Advocate",
              testimonial: "I appreciate the professional approach and transparency from Medicide. Their products meet my therapeutic needs perfectly.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764004882341-ys4o0jeq.jpg",
              imageAlt: "David Chen"
            },
            {
              id: "3",
              name: "Sarah Williams",
              role: "Sleep Health Patient",
              testimonial: "The sleep support products work wonderfully. I sleep better than I have in years, and wake up refreshed without grogginess.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764004883285-br7e14hf.jpg",
              imageAlt: "Sarah Williams"
            },
            {
              id: "4",
              name: "Michael Thompson",
              role: "Chronic Condition Manager",
              testimonial: "Medicide's quality and customer service are unmatched. Their products have become an essential part of my wellness routine.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1764004884517-8tfcpmqo.jpg",
              imageAlt: "Michael Thompson"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Common Questions"
          sideDescription="Find answers to frequently asked questions about our products and services"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "Are your products legal?",
              content: "Yes, all Medicide products comply with federal and state regulations for medicinal cannabis. We operate with full licensing and transparency."
            },
            {
              id: "2",
              title: "How do I know which product is right for me?",
              content: "Our staff provides personalized consultations based on your specific wellness goals. We recommend starting with our consultation form or contacting our team directly."
            },
            {
              id: "3",
              title: "What is the difference between CBD and THC?",
              content: "CBD offers therapeutic benefits without psychoactive effects, while THC provides additional healing properties with mild psychoactive effects. We offer both options for different needs."
            },
            {
              id: "4",
              title: "How long does shipping take?",
              content: "We offer discreet shipping within 1-2 business days. Most orders arrive within 3-5 business days depending on your location."
            },
            {
              id: "5",
              title: "Do you offer consultations?",
              content: "Yes, we provide free consultations with our wellness experts to help you select the right products for your needs."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get in Touch"
          description="Have questions? Our team is ready to help you find the perfect products for your wellness journey"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your wellness goals...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Medicide"
          copyrightText="© 2025 Medicide. All rights reserved."
          columns={[
            {
              title: "Products",
              items: [
                { label: "Tinctures", href: "products" },
                { label: "Capsules", href: "products" },
                { label: "Topicals", href: "products" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "FAQ", href: "faq" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Terms of Service", href: "https://example.com/terms" },
                { label: "Privacy Policy", href: "https://example.com/privacy" },
                { label: "Disclaimer", href: "https://example.com/disclaimer" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}