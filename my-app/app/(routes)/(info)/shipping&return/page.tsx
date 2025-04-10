import Paragraph from "@/app/components/paragraph";
import AccordionBox from "@/app/components/accordion";
import { AccordianItem } from "@/app/components/accordion";

//STYLE
import "../info.scss";

export default function ShippingAndReturnPage() {
  const AccordionData: AccordianItem = [
    {
      title: "Shipping",
      body: "We ship worldwide. All orders are shipped from New York City. For continental U.S. orders under $150, we ship via USPS and UPS for a flat rate of $7.95. Free ground shipping on all orders over $150. It usually takes 2-3 business days (Mon - Fri) for your orders to be processed and shipped out. Domestic orders are usually delivered within 5-7 business days after the orders are shipped. Please note that original shipping charges are non-refundable. Need your order sooner? Upgrade to express shipping. Shipping rates will be calculated based on your location. For Alaska, Hawaii, Puerto Rico, and international orders, shipping rates will be calculated based on your location. For all international shipping, customers are responsible for customs duties, tax or import tariffs. *If there is a pre-order item in your order, we will ship everything after the pre-order item becomes available. Please contact us if you would like the shipment to be arranged separately. *Please make sure your shipping address, including city and zip code, is correct. Mogutable is not responsible for any orders that can't be delivered due to the wrong shipping address provided.",
    },
    {
      title: "Return",
      body: "It is our hope that you are happy with our products. If there is any reason you are unsatisfied with your items, you may return them within 14 days of purchase for in-store orders or within 14 days of receiving your order for online purchases. For in-store purchases, returns must be made directly at the store. All returns can only be processed with a receipt, and the item must be unused, unwashed, and in the same condition that you received it, including its original packaging. For online orders, you have the option to return the item in-store or request a return label. Your package must be sent back to us within 14 days after your return label is issued. Refunds will be issued to your original method of payment. To be eligible for a return, your item must be unused, unwashed and in the same condition that you received it. It must also be in the original packaging. All pantry, sanitary, skincare, and sale products are considered final sale and cannot be returned. Including but not limited to teas, sauces, spices, dried fruits, soap, hand cream, body lotion, etc. For continental U.S. orders, you will be responsible for a $8.95 shipping fee per package for returning your item. Original shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund. We cannot be held responsible for items damaged or lost in return shipment. Please wrap your return items carefully. Alaska, Hawaii, Puerto Rico, and international customers will be responsible for the full return costs. Please contact us at info@mogutable.com if you wish to make a return. Click HERE to start your return process.",
    },
    {
      title: "Item(s) Arrived Damaged",
      body: "If any of the items from your order arrived damaged, please contact us at info@mogutable.com. Please kindly make sure to include your order number, photo of the shipping box, photo of the damaged item(s), and photo of the wrapping material so we can start to process a replacement or refund for your order.",
    },
    {
      title: "Lost Package",
      body: "If your order is marked as delivered, but you haven't received it, we kindly ask you to wait for a couple more days as sometimes the shipping carriers mark a package as delivered, but would deliver the package in the next couple of days. If your order still doesn't turn up after the wait period, please contact us at info@mogutable.com with your order number. We will start the replacement or refund process.",
    },
    {
      title: "Exchange",
      body: " If you wish to exchange an item, please note the following options: for in-store purchases, exchanges can be made directly at our store. For online orders, we do not offer direct exchanges through mail. Instead, you may request a return and place a new order for your desired item. Alternatively, online orders can be brought to our store for an exchange. As with our return policy, all exchanged items must be unused, unwashed, and in their original packaging.",
    },
  ];
  return (
    <div className="info-page" id="shipping-return-page">
      <Paragraph title="INFO" subtitle="SHIPPING & RETURN">
        <AccordionBox data={AccordionData} />
      </Paragraph>
    </div>
  );
}
