import Paragraph from "@/app/components/paragraph";
import AccordionBox from "@/app/components/accordion";
import { AccordianItem } from "@/app/components/accordion";

// STYLES
import "../info.scss";

export default function FaqPage() {
  const storeData: AccordianItem = [
    {
      title: "Where is the Mogutable store?",
      body: "Our store is located at 130 Grand St, Brooklyn, NY 11249.",
    },
    {
      title: "Your Business Hours?",
      body: "Monday: Closed \n Tuesday - Saturday: 12pm - 7pm \n Sunday: 12pm - 6pm",
    },
  ];
  const paymentData: AccordianItem = [
    {
      title: "What payment methods do you accept?",
      body: "We accept Visa, MasterCard, American Express and Discover credit cards as well as PayPal.",
    },
  ];
  const shippingData: AccordianItem = [
    {
      title: "Do you ship overseas?",
      body: "Yes, we ship worldwide. \n\n For continental U.S. orders under $100, we ship via USPS and UPS for $7.95 flat rate. We offer free ground shipping on orders over $100. \n For Alaska, Hawaii, Puerto Rico, and international orders, shipping costs will apply. Shipping rate will be calculated base on the location. ",
    },
    {
      title: "How long will it take to get my order?",
      body: "It depends on where you are. Orders processed here will take 5-7 business days to arrive. Overseas deliveries can take anywhere from 7-16 days. Delivery details will be provided in your confirmation email.",
    },
    {
      title: "What shipping carriers do you use?",
      body: "We ship via USPS and UPS.",
    },
    {
      title: "I live in New York. Can I pick up my order?",
      body: 'Yes! You may pick up your order at our shop in 130 Grand St in Williamsburg, Brooklyn. Please select "Pick Up" when you check out, and we will inform you when your order is ready for picking up.',
    },
  ];
  const productData: AccordianItem = [
    {
      title: "Can I return my product?",
      body: "It is our hope that you are happy with our products. If there is any reason you are unsatisfied with your items, you can return them within 14 days of receiving the order. Refunds will be issued to your original method of payment. \n\n To be eligible for a return, your item must be unused, unwashed and in the same condition that you received it. It must also be in the original packaging. \n\n We cannot accept returns for sanitary goods and skin care products like soap, hand cream, body lotion etc.\n\n You will be responsible for a $8.95 shipping fee for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.",
    },
    {
      title: "Can I return an item that is on sale?",
      body: "Sale items are considered final sale and cannot be returned.",
    },
    {
      title: "Are all of the items eligible for promotions?",
      body: "While most of our items are eligible for promotions, some of the collections are not included like most of our artist pieces. ",
    },
  ];
  return (
    <div className="info-page" id="faq-page">
      <Paragraph title="INFO" subtitle="FAQ">
        <div>
          <div className="accordion-category">STORE INFO</div>
          <AccordionBox data={storeData} />
          <div className="accordion-category">PAYMENT</div>
          <AccordionBox data={paymentData} />
          <div className="accordion-category">SHIPPING</div>
          <AccordionBox data={shippingData} />
          <div className="accordion-category">PRODUCT</div>
          <AccordionBox data={productData} />
        </div>
      </Paragraph>
    </div>
  );
}
